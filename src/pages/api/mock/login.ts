import type { NextApiRequest, NextApiResponse } from 'next'
import { serializeCookie } from '@lib'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = serializeCookie('auth', { user: 'Andy' }, { path: '/' })
  res.status(200)
    .setHeader('Set-Cookie', cookie)
    .json({ login: true })
}
