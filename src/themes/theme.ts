import 'server-only'

import { cookies } from 'next/headers'
import { Theme } from '@/themes/enum'

export default function getTheme() {
  const themeCookies = (cookies().get('theme')?.value ?? Theme.Auto) as Theme

  if (!Object.values(Theme).includes(themeCookies)) {
    return Theme.Auto
  }

  return themeCookies
}
