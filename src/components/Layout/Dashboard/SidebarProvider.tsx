'use client'

import {
  createContext, Dispatch, SetStateAction, useContext, useMemo, useState,
} from 'react'

type SidebarContextType = {
  showSidebarState: [boolean, Dispatch<SetStateAction<boolean>>];
}

export const SidebarContext = createContext<SidebarContextType>({
  showSidebarState: [false, () => {}],
})

export default function SidebarProvider({ children }: {
  children: React.ReactNode;
}) {
  const [isShowSidebar, setIsShowSidebar] = useState(false)

  const value: SidebarContextType = useMemo(() => ({
    showSidebarState: [isShowSidebar, setIsShowSidebar],
  }), [isShowSidebar])

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}

export const useSidebar = () => {
  const sidebar = useContext(SidebarContext)
  if (sidebar === null) {
    throw new Error('useSidebar hook must be used within SidebarProvider')
  }

  return sidebar
}
