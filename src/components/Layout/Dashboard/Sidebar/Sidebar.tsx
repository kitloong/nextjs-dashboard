'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Button } from 'react-bootstrap'
import { useSidebar } from '@/components/Layout/Dashboard/SidebarProvider'

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [isNarrow, setIsNarrow] = useState(false)

  const { showSidebarState: [isShowSidebar] } = useSidebar()

  const toggleIsNarrow = () => {
    const newValue = !isNarrow
    localStorage.setItem('isNarrow', newValue ? 'true' : 'false')
    setIsNarrow(newValue)
  }

  // On first time load only
  useEffect(() => {
    if (localStorage.getItem('isNarrow')) {
      setIsNarrow(localStorage.getItem('isNarrow') === 'true')
    }
  }, [setIsNarrow])

  return (
    <div
      className={classNames('sidebar d-flex flex-column position-fixed h-100 border-end', {
        'sidebar-narrow': isNarrow,
        show: isShowSidebar,
      })}
      id="sidebar"
    >
      <div className="sidebar-brand d-none d-md-flex align-items-center justify-content-center">
        <svg
          className="sidebar-brand-full"
          width="118"
          height="46"
        >
          <title>CoreUI Logo</title>
          <use xlinkHref="/assets/brand/coreui.svg#full" />
        </svg>
        <svg
          className="sidebar-brand-narrow d-none"
          width="46"
          height="46"
        >
          <title>CoreUI Logo</title>
          <use xlinkHref="/assets/brand/coreui.svg#signet" />
        </svg>
      </div>

      <div className="sidebar-nav flex-fill border-top">
        {children}
      </div>

      <Button
        variant="link"
        className="sidebar-toggler d-none d-md-inline-block rounded-0 text-end pe-4 fw-bold shadow-none border-top"
        onClick={toggleIsNarrow}
        type="button"
        aria-label="sidebar toggler"
      >
        <FontAwesomeIcon className="sidebar-toggler-chevron" icon={faAngleLeft} fontSize={24} />
      </Button>
    </div>
  )
}
