import 'server-only'

type FetchArguments = Parameters<typeof fetch>;

class RetryableError extends Error {
}

/**
 * Fetch wrapper for server side use only.
 * Implemented retries and timeout.
 *
 * @param args
 */
export default async function serverFetch(...args: FetchArguments): Promise<Response> {
  let retryCount = 0
  const maxRetries = 3
  const timeout = 30_000 // 30 seconds
  let success = false

  while (retryCount < maxRetries && !success) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const response = await fetch(
        args[0],
        { ...args[1], signal: AbortSignal.timeout(timeout) },
      )

      if (!response.ok) {
        const statusCode = response.status

        // Retry only on specific HTTP status codes indicating network issues
        if (
          (statusCode >= 500 && statusCode <= 599) // Server errors
          || statusCode === 408 // Request timeout
          || statusCode === 429 // Too many requests
          || statusCode === 0 // Network error or CORS policy blocking
        ) {
          retryCount += 1
          throw new RetryableError(`Network-related error occurred (Status: ${statusCode}).`)
        }

        throw new Error(`HTTP error! Status: ${statusCode}`)
      }

      success = true
      return response
    } catch (error) {
      if (error instanceof RetryableError) {
        // eslint-disable-next-line no-continue
        continue
      }

      if ((error as Error).name === 'TimeoutError') {
        throw new Error('Fetch request timeout error.')
      }

      throw error
    }
  }

  throw new Error('Maximum number of retries reached without success.')
}
