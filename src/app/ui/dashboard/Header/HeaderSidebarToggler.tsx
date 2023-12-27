'use client'

import { useContext } from 'react'
import { SidebarContext } from '@/app/ui/dashboard/sidebar-provider'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function HeaderSidebarToggler() {
  const {
    showSidebarState: [isShowSidebar, setIsShowSidebar],
    showSidebarMdState: [isShowSidebarMd, setIsShowSidebarMd],
  } = useContext(SidebarContext)

  const toggleSidebar = () => {
    setIsShowSidebar(!isShowSidebar)
  }

  const toggleSidebarMd = () => {
    setIsShowSidebarMd(!isShowSidebarMd)
  }

  return (
    <>
      <Button
        variant="link"
        className="header-toggler d-md-none px-md-0 me-md-3 rounded-0 shadow-none"
        type="button"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Button
        variant="link"
        className="header-toggler d-none d-md-inline-block px-md-0 me-md-3 rounded-0 shadow-none"
        type="button"
        onClick={toggleSidebarMd}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
    </>
  )
}
