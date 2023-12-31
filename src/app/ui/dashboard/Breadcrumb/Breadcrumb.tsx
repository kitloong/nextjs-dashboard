import { Breadcrumb as BSBreadcrumb, BreadcrumbItem } from 'react-bootstrap'

export default function Breadcrumb() {
  return (
    <BSBreadcrumb listProps={{ className: 'mb-0 align-items-center' }}>
      <BreadcrumbItem
        linkProps={{ className: 'text-decoration-none' }}
        href="/"
      >
        Home
      </BreadcrumbItem>
      <BreadcrumbItem
        linkProps={{ className: 'text-decoration-none' }}
        href="/"
      >
        Library
      </BreadcrumbItem>
      <BreadcrumbItem active>Data</BreadcrumbItem>
    </BSBreadcrumb>
  )
}
