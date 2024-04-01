'use server'

import { cookies } from 'next/headers'
import { serializeCookie } from '@/lib/cookie'

export async function login(formData: FormData) {
  const res = await fetch('http://localhost:3000/api/mock/login', {
    method: 'post',
    body: formData,
  })

  if (res.status !== 200) {
    throw new Error('Failed to login')
  }

  const cookie = serializeCookie('auth', { user: 'Andy' }, { path: '/' })
  cookies().set('name', 'Delba')
}
