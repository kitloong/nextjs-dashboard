import NProgress from 'nprogress'
import { Router } from 'next/router'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done(true)
})

export default function ProgressBar() {
  return null
}
