'use client'

import { createContext } from 'react'
import { getDictionary } from '@/locales/dictionary'

// Reference https://github.com/vercel/next.js/discussions/57405

// Import `getDictionary` from `server-only` works for typehint
type Dictionary = Awaited<ReturnType<typeof getDictionary>>

export const DictionaryContext = createContext<Dictionary | null>(null)

export default function DictionaryProvider({
  dictionary,
  children,
}: {
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  return <DictionaryContext.Provider value={dictionary}>{children}</DictionaryContext.Provider>
}
