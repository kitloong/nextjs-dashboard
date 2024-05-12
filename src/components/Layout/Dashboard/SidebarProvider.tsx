'use client'

import {
  createContext, Dispatch, SetStateAction, useContext, useMemo, useState,
} from 'react'

type SidebarContextType = {
  showSidebarState: [boolean, Dispatch<SetStateAction<boolean>>];
  showSidebarMdState: [boolean, Dispatch<SetStateAction<boolean>>];
}

export const SidebarContext = createContext<SidebarContextType>({
  showSidebarState: [false, () => {}],
  showSidebarMdState: [false, () => {}],
})

export default function SidebarProvider({ children }: {
  children: React.ReactNode;
}) {
  // Show status for xs screen
  const [isShowSidebar, setIsShowSidebar] = useState(false)

  // Show status for md screen and above
  const [isShowSidebarMd, setIsShowSidebarMd] = useState(true)

  const value: SidebarContextType = useMemo(() => ({
    showSidebarState: [isShowSidebar, setIsShowSidebar],
    showSidebarMdState: [isShowSidebarMd, setIsShowSidebarMd],
  }), [isShowSidebar, isShowSidebarMd])

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}

export const useSidebar = () => {
  const sidebar = useContext(SidebarContext)
  if (sidebar === null) {
    throw new Error('useSidebar hook must be used within SidebarProvider')
  }

  return sidebar
}
