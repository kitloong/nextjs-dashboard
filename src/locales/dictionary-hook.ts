'use client'

import { useContext } from 'react'
import { DictionaryContext } from '@/locales/DictionaryProvider'

export default function useDictionary() {
  const dictionary = useContext(DictionaryContext)
  if (dictionary === null) {
    throw new Error('useDictionary hook must be used within DictionaryProvider')
  }

  return dictionary
}
