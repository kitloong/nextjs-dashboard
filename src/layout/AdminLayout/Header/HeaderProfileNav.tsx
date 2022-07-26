import {
  Badge, Dropdown, Nav, NavItem,
} from 'react-bootstrap'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faCreditCard,
  faEnvelopeOpen,
  faFile,
  faMessage,
  faUser,
} from '@fortawesome/free-regular-svg-icons'
import { PropsWithChildren } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faGear, faListCheck, faLock, faPowerOff,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

type NavItemProps = {
  icon: IconDefinition;
} & PropsWithChildren

const ProfileDropdownItem = (props: NavItemProps) => {
  const { icon, children } = props

  return (
    <>
      <FontAwesomeIcon className="me-2" icon={icon} fixedWidth />
      {children}
    </>
  )
}

export default function HeaderProfileNav() {
  return (
    <Nav>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle variant="link" bsPrefix="shadow-none" className="py-0 px-2 rounded-0" id="dropdown-profile">
          <div className="avatar">
            <Image
              width={128}
              height={128}
              className="rounded-circle"
              src="/assets/img/avatars/8.jpg"
              alt="user@email.com"
            />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="pt-0">
          <Dropdown.Header className="bg-light fw-bold rounded-top">Account</Dropdown.Header>
          <Link href="/" passHref>
            <Dropdown.Item>
              <ProfileDropdownItem icon={faBell}>
                Updates
                <Badge bg="info" className="ms-2">42</Badge>
              </ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
          <Link href="/" passHref>
            <Dropdown.Item>
              <ProfileDropdownItem icon={faEnvelopeOpen}>
                Updates
                <Badge bg="success" className="ms-2">42</Badge>
              </ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
          <Link href="/" passHref>
            <Dropdown.Item>
              <ProfileDropdownItem icon={faListCheck}>
                Tasks
                <Badge bg="danger" className="ms-2">42</Badge>
              </ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
          <Link href="/" passHref>
            <Dropdown.Item>
              <ProfileDropdownItem icon={faMessage}>
                Messages
                <Badge bg="warning" className="ms-2">42</Badge>
              </ProfileDropdownItem>
            </Dropdown.Item>
          </Link>

          <Dropdown.Header className="bg-light fw-bold">Settings</Dropdown.Header>
          <Link href="/" passHref>
            <Dropdown.Item>
              <ProfileDropdownItem icon={faUser}>Profile</ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
          <Link href="/" passHref>
            <Dropdown.Item>
              <ProfileDropdownItem icon={faGear}>Settings</ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
          <Link href="/" passHref>
            <Dropdown.Item>
              <ProfileDropdownItem icon={faCreditCard}>Payments</ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
          <Link href="/" passHref>
            <Dropdown.Item>
              <ProfileDropdownItem icon={faFile}>Projects</ProfileDropdownItem>
            </Dropdown.Item>
          </Link>

          <Dropdown.Divider />

          <Link href="/" passHref>
            <Dropdown.Item>
              <ProfileDropdownItem icon={faLock}>Lock Account</ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
          <Link href="/login" passHref>
            <Dropdown.Item>
              <ProfileDropdownItem icon={faPowerOff}>Logout</ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  )
}
