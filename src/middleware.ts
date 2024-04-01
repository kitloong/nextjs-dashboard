import { withAuth } from 'next-auth/middleware'

export default withAuth({
  // Matches the pages config in `[...nextauth]`
  pages: {
    signIn: '/login',
  },
})

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - login
     * - register
     */
    '/((?!login|register).*)',
  ],
}
