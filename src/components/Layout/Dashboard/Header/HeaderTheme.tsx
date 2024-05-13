'use client'

import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavLink,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { Theme } from '@/themes/enum'
import useDictionary from '@/locales/dictionary-hook'

const CurrentTheme = ({ theme }: { theme: string }) => (
  <>
    {theme === Theme.Light && <FontAwesomeIcon icon={faSun} size="lg" />}
    {theme === Theme.Dark && <FontAwesomeIcon icon={faMoon} size="lg" />}
    {theme === Theme.Auto && <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" />}
  </>
)

export default function HeaderTheme({ currentTheme }: { currentTheme: Theme }) {
  const dict = useDictionary()
  const [theme, setTheme] = useState<Theme>(currentTheme)
  const router = useRouter()

  const changeTheme = (t: Theme) => {
    Cookies.set('theme', t)
    setTheme(t)
    document.documentElement.setAttribute('data-bs-theme', t)
    router.refresh()
  }

  return (
    <Dropdown>
      <DropdownToggle className="px-2 mx-1 px-sm-3 mx-sm-0" as={NavLink} bsPrefix="hide-caret" id="dropdown-theme">
        <CurrentTheme theme={theme} />
      </DropdownToggle>
      <DropdownMenu className="pt-0" align="end">
        <DropdownItem active={theme === Theme.Light} onClick={() => changeTheme(Theme.Light)}>
          <FontAwesomeIcon className="me-2" icon={faSun} fixedWidth />
          {dict.theme.light}
        </DropdownItem>
        <DropdownItem active={theme === Theme.Dark} onClick={() => changeTheme(Theme.Dark)}>
          <FontAwesomeIcon className="me-2" icon={faMoon} fixedWidth />
          {dict.theme.dark}
        </DropdownItem>
        <DropdownItem active={theme === Theme.Auto} onClick={() => changeTheme(Theme.Auto)}>
          <FontAwesomeIcon className="me-2" icon={faCircleHalfStroke} fixedWidth />
          {dict.theme.auto}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
