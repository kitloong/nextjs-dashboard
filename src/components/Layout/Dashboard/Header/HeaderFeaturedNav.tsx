import Link from 'next/link'
import { Nav, NavItem, NavLink } from 'react-bootstrap'
import { getDictionary } from '@/locales/dictionary'

export default async function HeaderFeaturedNav() {
  const dict = await getDictionary()
  return (
    <Nav>
      <NavItem>
        <Link href="/" passHref legacyBehavior>
          <NavLink className="p-2">{dict.featured_nav.dashboard}</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="#" passHref legacyBehavior>
          <NavLink className="p-2">{dict.featured_nav.users}</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="#" passHref legacyBehavior>
          <NavLink className="p-2">{dict.featured_nav.settings}</NavLink>
        </Link>
      </NavItem>
    </Nav>
  )
}
