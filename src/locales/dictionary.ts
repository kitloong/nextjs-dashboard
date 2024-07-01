import 'server-only'
import { cookies } from 'next/headers'
import { defaultLocale } from '@/locales/config'

const dictionaries = {
  en: () => import('./en/lang.json').then((module) => module.default),
  ja: () => import('./ja/lang.json').then((module) => module.default),
  zh: () => import('./zh/lang.json').then((module) => module.default),
}

type Locale = keyof typeof dictionaries

export const getLocales = () => Object.keys(dictionaries) as Array<Locale>

export const getLocale = (): Locale => {
  const localeCookies = cookies().get('locale')?.value ?? defaultLocale

  if (!getLocales().includes(localeCookies as Locale)) {
    return defaultLocale
  }

  return localeCookies as Locale
}

export const getDictionary = async () => {
  const locale = getLocale()
  return dictionaries[locale]()
}
