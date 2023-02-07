import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

type Middleware = (request: NextRequest) => NextResponse

const redirectIfAuthenticated: Middleware = (request) => {
  const authSession = request.cookies.get('auth')?.value

  if (authSession) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

const authenticated: Middleware = (request) => {
  const authSession = request.cookies.get('auth')?.value

  if (!authSession) {
    const response = NextResponse.redirect(new URL('/login', request.url))
    response.cookies.set({
      name: 'redirect',
      value: request.url,
    })
    return response
  }

  return NextResponse.next()
}

export default function middleware(request: NextRequest) {
  if ([
    '/login',
    '/register',
  ].includes(request.nextUrl.pathname)) {
    return redirectIfAuthenticated(request)
  }

  if ([
    '/',
    '/pokemons',
    '/pokemons/client',
  ].includes(request.nextUrl.pathname)) {
    return authenticated(request)
  }

  return NextResponse.next()
}
