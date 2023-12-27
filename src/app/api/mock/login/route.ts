import { serializeCookie } from '@/lib/cookie'

export async function POST() {
  const cookie = serializeCookie('auth', { user: 'Andy' }, { path: '/' })
  return Response.json({ login: true }, {
    headers: {
      'Set-Cookie': cookie,
    },
  })
}
