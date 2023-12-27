import { serializeCookie } from '@/lib/cookie'

export async function POST() {
  const cookie = serializeCookie('auth', {}, { path: '/', expires: new Date(Date.now()) })
  return Response.json({ logout: true }, {
    headers: {
      'Set-Cookie': cookie,
    },
  })
}
