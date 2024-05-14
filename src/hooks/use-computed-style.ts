import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export default function useComputedStyle(property: string) {
  const [style, setStyle] = useState('')
  const theme = Cookies.get('theme')

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const element = document.body
      const computedStyle = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '')
      setStyle(computedStyle)
    }
  }, [property, theme])

  return style
}
