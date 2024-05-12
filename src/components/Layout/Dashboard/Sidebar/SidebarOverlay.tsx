'use client'

import React from 'react'
import { useSidebar } from '@/components/Layout/Dashboard/SidebarProvider'
import classNames from 'classnames'

export default function SidebarOverlay() {
  const {
    showSidebarState: [isShowSidebar, setIsShowSidebar],
  } = useSidebar()

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
