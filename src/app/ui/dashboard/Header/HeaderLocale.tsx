'use client'

import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { defaultLocale } from '@/locales/config'
import { useRouter } from 'next/navigation'
import {
  Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavLink,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function HeaderLocale() {
  const [locale, setLocale] = useState(defaultLocale)
  const router = useRouter()

  const changeLocale = (loc: string) => {
    Cookies.set('locale', loc)
    setLocale(loc)
    router.refresh()
  }

  useEffect(() => {
    setLocale(Cookies.get('locale') ?? defaultLocale)
  }, [])

  return (
    <Dropdown>
      <DropdownToggle as={NavLink} bsPrefix="hide-caret" id="dropdown-locale">
        <FontAwesomeIcon icon={faGlobe} size="lg" />
      </DropdownToggle>
      <DropdownMenu className="pt-0" align="end">
        <DropdownItem active={locale === 'en'} onClick={() => changeLocale('en')}>
          English
        </DropdownItem>
        <DropdownItem active={locale === 'ja'} onClick={() => changeLocale('ja')}>
          日本語
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
