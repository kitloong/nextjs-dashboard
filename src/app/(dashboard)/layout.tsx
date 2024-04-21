import { Container } from 'react-bootstrap'
import React from 'react'
import SidebarProvider from '@/app/(dashboard)/layout/SidebarProvider'
import SidebarOverlay from '@/app/(dashboard)/layout/Sidebar/SidebarOverlay'
import Sidebar from '@/app/(dashboard)/layout/Sidebar/Sidebar'
import SidebarNav from '@/app/(dashboard)/layout/Sidebar/SidebarNav'
import Header from '@/app/(dashboard)/layout/Header/Header'
import Footer from '@/app/(dashboard)/layout/Footer/Footer'

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SidebarOverlay />
      <Sidebar>
        <SidebarNav />
      </Sidebar>

      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header />

        <div className="body flex-grow-1 px-sm-2 mb-4">
          <Container fluid="lg">
            {children}
          </Container>
        </div>

        <Footer />
      </div>

      <SidebarOverlay />
    </SidebarProvider>
  )
}
