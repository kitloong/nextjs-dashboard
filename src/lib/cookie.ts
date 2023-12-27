import { CookieSerializeOptions, serialize } from 'cookie'

export function serializeCookie(
  name: string,
  value: unknown,
  options?: CookieSerializeOptions,
) {
  const stringValue = typeof value === 'object' ? `j:${JSON.stringify(value)}` : String(value)

  const cookieOptions = { ...options }

  if (cookieOptions.maxAge) {
    cookieOptions.expires = new Date(Date.now() + cookieOptions.maxAge)
    cookieOptions.maxAge /= 1000
  }

  return serialize(name, String(stringValue), cookieOptions)
}
