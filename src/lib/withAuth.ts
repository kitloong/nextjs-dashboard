import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { PreviewData } from 'next/types'
import { serializeCookie } from '@lib/cookie'

type WithAuth = <
  P extends { [key: string]: unknown } = { [key: string]: unknown },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData,
>(
  gssp: GetServerSideProps<P, Q, D>
) => GetServerSideProps<P, Q, D>

/**
 * Use with `GetServerSideProps`
 * eg:
 * ```
 * export const getServerSideProps: GetServerSideProps<Props> = withAuth(async (context) => {
 *   ...
 * })
 * ```
 */
const withAuth: WithAuth = (gssp) => async (context) => {
  const { auth: authSession } = context.req.cookies

  if (!authSession) {
    context.res.setHeader('Set-Cookie', serializeCookie('redirect', context.resolvedUrl, { path: '/' }))
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return gssp(context) // Continue on to call `getServerSideProps` logic
}

export default withAuth
