'use client'

import { IconDefinition } from '@fortawesome/free-regular-svg-icons'
import React, { PropsWithChildren } from 'react'
import { useSidebar } from '@/components/Layout/Dashboard/SidebarProvider'
import { NavItem, NavLink } from 'react-bootstrap'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  href: string;
  icon?: IconDefinition;
} & PropsWithChildren

export default function SidebarNavItem(props: Props) {
  const {
    icon,
    children,
    href,
  } = props

  const {
    showSidebarState: [, setIsShowSidebar],
  } = useSidebar()

  return (
    <NavItem>
      <Link href={href} passHref legacyBehavior>
        <NavLink className="px-3 py-2 d-flex align-items-center" onClick={() => setIsShowSidebar(false)}>
          {icon ? <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
            : <span className="nav-icon ms-n3" />}
          {children}
        </NavLink>
      </Link>
    </NavItem>
  )
}
