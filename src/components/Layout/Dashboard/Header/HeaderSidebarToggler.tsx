'use client'

import { useSidebar } from '@/components/Layout/Dashboard/SidebarProvider'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function HeaderSidebarToggler() {
  const {
    showSidebarState: [isShowSidebar, setIsShowSidebar],
  } = useSidebar()

  const toggleSidebar = () => {
    setIsShowSidebar(!isShowSidebar)
  }

  return (
    <Button
      variant="link"
      className="header-toggler rounded-0 shadow-none"
      type="button"
      onClick={toggleSidebar}
    >
      <FontAwesomeIcon icon={faBars} />
    </Button>
  )
}
