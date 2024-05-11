import { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getDictionary } from '@/locales/dictionary'

export const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        return { ...token, user: { ...user as User } }
      }

      return token
    },
    async session({ session, token }) {
      return { ...session, user: token.user }
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { type: 'string' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null
        }
        const { username, password } = credentials

        // Replace with real authentication here
        const ok = username === 'Username' && password === 'Password'

        const dict = await getDictionary()

        if (!ok) {
          throw new Error(dict.login.message.auth_failed)
        }

        return {
          id: 1,
          name: 'Name',
          username: 'Username',
          email: 'user@email.com',
          avatar: '/assets/img/avatars/8.jpg',
        }
      },
    }),
  ],
}
