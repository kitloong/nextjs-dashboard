import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { PreviewData } from 'next/types'
import { serializeCookie } from '@lib/cookie'

type RedirectIfAuthenticated = <
  P extends { [key: string]: unknown } = { [key: string]: unknown },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData,
>(
  gssp: GetServerSideProps<P, Q, D>
) => GetServerSideProps<P, Q, D>

const redirectIfAuthenticated: RedirectIfAuthenticated = (gssp) => async (context) => {
  const { auth: authSession } = context.req.cookies
  if (authSession) {
    // context.res.setHeader('Set-Cookie', serializeCookie('redirect', context.resolvedUrl, { path: '/' }))

    return {
      redirect: {
        destination: context.req.headers.referer ?? '/',
        permanent: false,
      },
    }
  }

  return gssp(context) // Continue on to call `getServerSideProps` logic
}

export default redirectIfAuthenticated
