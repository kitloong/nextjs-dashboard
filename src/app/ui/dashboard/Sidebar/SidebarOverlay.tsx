'use client'

import React, { useContext } from 'react'
import { SidebarContext } from '@/app/ui/dashboard/sidebar-provider'
import classNames from 'classnames'

export default function SidebarOverlay() {
  const {
    showSidebarState: [isShowSidebar, setIsShowSidebar],
  } = useContext(SidebarContext)

  const hideSidebar = () => {
    setIsShowSidebar(false)
  }

  return (
    <div
      tabIndex={-1}
      aria-hidden
      className={classNames('sidebar-overlay position-fixed top-0 bg-dark w-100 h-100 opacity-50', {
        'd-none': !isShowSidebar,
      })}
      onClick={hideSidebar}
    />
  )
}
