import { Container } from 'react-bootstrap'
import React from 'react'
import SidebarProvider from '@/app/ui/dashboard/sidebar-provider'
import SidebarOverlay from '@/app/ui/dashboard/Sidebar/SidebarOverlay'
import Sidebar from '@/app/ui/dashboard/Sidebar/Sidebar'
import SidebarNav from '@/app/ui/dashboard/Sidebar/SidebarNav'
import Header from '@/app/ui/dashboard/Header/Header'
import Footer from '@/app/ui/dashboard/Footer/Footer'

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
