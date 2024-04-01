import NextAuth, { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

declare module 'next-auth' {
  interface User {
    id: number;
    username: string;
    name: string;
    email: string;
    avatar: string;
  }

  interface Session {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User;
  }
}

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

        if (!ok) {
          return null
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

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
