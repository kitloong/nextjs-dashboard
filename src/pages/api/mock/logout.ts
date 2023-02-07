import type { NextApiRequest, NextApiResponse } from 'next'
import { serializeCookie } from '@lib'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200)
    .setHeader('Set-Cookie', serializeCookie('auth', {}, { path: '/', expires: new Date(Date.now()) }))
    .json({ logout: true })
}
