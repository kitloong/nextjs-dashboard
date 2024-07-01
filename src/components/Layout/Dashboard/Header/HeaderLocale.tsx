'use client'

import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavLink,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

export default function HeaderLocale({ currentLocale }: { currentLocale: string }) {
  const [locale, setLocale] = useState(currentLocale)
  const router = useRouter()

  const changeLocale = (loc: string) => {
    Cookies.set('locale', loc)
    setLocale(loc)
    router.refresh()
  }

  return (
    <Dropdown>
      <DropdownToggle className="px-2 mx-1 px-sm-3 mx-sm-0" as={NavLink} bsPrefix="hide-caret" id="dropdown-locale">
        <FontAwesomeIcon icon={faLanguage} size="lg" />
      </DropdownToggle>
      <DropdownMenu className="pt-0" align="end">
        <DropdownItem active={locale === 'en'} onClick={() => changeLocale('en')}>
          English
        </DropdownItem>
        <DropdownItem active={locale === 'ja'} onClick={() => changeLocale('ja')}>
          日本語
        </DropdownItem>
        <DropdownItem active={locale === 'zh'} onClick={() => changeLocale('zh')}>
          简体中文
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
