import Link from 'next/link'
import { Nav, NavItem, NavLink } from 'react-bootstrap'

export default function HeaderFeaturedNav() {
  return (
    <Nav>
      <NavItem>
        <Link href="/" passHref legacyBehavior>
          <NavLink className="p-2">Dashboard</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="#" passHref legacyBehavior>
          <NavLink className="p-2">Users</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="#" passHref legacyBehavior>
          <NavLink className="p-2">Settings</NavLink>
        </Link>
      </NavItem>
    </Nav>
  )
}
