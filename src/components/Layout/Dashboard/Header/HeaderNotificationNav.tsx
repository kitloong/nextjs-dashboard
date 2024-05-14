import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope, IconDefinition } from '@fortawesome/free-regular-svg-icons'
import {
  faBasketShopping,
  faChartBar,
  faGaugeHigh,
  faList,
  faUserMinus,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import {
  Badge,
  Dropdown, DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  ProgressBar,
} from 'react-bootstrap'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import Image from 'next/image'
import HeaderLocale from '@/components/Layout/Dashboard/Header/HeaderLocale'
import { getDictionary, getLocale } from '@/locales/dictionary'
import HeaderTheme from '@/components/Layout/Dashboard/Header/HeaderTheme'
import { getPreferredTheme } from '@/themes/theme'

type ItemWithIconProps = {
  icon: IconDefinition;
} & PropsWithChildren

const ItemWithIcon = (props: ItemWithIconProps) => {
  const { icon, children } = props

  return (
    <>
      <FontAwesomeIcon className="me-2" icon={icon} fixedWidth />
      {children}
    </>
  )
}

export default async function HeaderNotificationNav() {
  const dict = await getDictionary()
  return (
    <Nav>
      <NavItem className="d-none d-sm-block">
        <Dropdown>
          <DropdownToggle className="px-2 mx-1 px-sm-3 mx-sm-0" as={NavLink} bsPrefix="hide-caret" id="dropdown-notification">
            <FontAwesomeIcon icon={faBell} size="lg" />
            <Badge pill bg="danger" className="position-absolute top-0 end-0 px-1 px-sm-2">
              5
            </Badge>
          </DropdownToggle>
          <DropdownMenu className="pt-0" align="end">
            <DropdownHeader className="fw-bold rounded-top">{dict.notification.message.replace('{{total}}', '5')}</DropdownHeader>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <ItemWithIcon icon={faUserPlus}>
                  {dict.notification.items.new_user}
                </ItemWithIcon>
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <ItemWithIcon icon={faUserMinus}>
                  {dict.notification.items.deleted_user}
                </ItemWithIcon>
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <ItemWithIcon icon={faChartBar}>
                  {dict.notification.items.sales_report}
                </ItemWithIcon>
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <ItemWithIcon icon={faBasketShopping}>
                  {dict.notification.items.new_client}
                </ItemWithIcon>
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <ItemWithIcon icon={faGaugeHigh}>
                  {dict.notification.items.server_overloaded}
                </ItemWithIcon>
              </DropdownItem>
            </Link>

            <DropdownHeader className="fw-bold">{dict.notification.server.title}</DropdownHeader>

            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <small><div className="text-uppercase"><b>{dict.notification.server.items.cpu}</b></div></small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="primary"
                  now={25}
                />
                <small>
                  <div className="text-muted">
                    348
                    {dict.notification.server.processes}
                    . 1/4
                    {dict.notification.server.cores}
                    .
                  </div>
                </small>
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <small><div className="text-uppercase"><b>{dict.notification.server.items.memory}</b></div></small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="warning"
                  now={75}
                />
                <small>
                  <div className="text-muted">11,444GB / 16,384MB</div>
                </small>
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <small><div className="text-uppercase"><b>{dict.notification.server.items.ssd1}</b></div></small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="danger"
                  now={90}
                />
                <small>
                  <div className="text-muted">243GB / 256GB</div>
                </small>
              </DropdownItem>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </NavItem>
      <NavItem className="d-none d-sm-block">
        <Dropdown>
          <DropdownToggle className="px-2 mx-1 px-sm-3 mx-sm-0" as={NavLink} bsPrefix="hide-caret" id="dropdown-task">
            <FontAwesomeIcon icon={faList} size="lg" />
            <Badge pill bg="warning" className="position-absolute top-0 end-0 px-1 px-sm-2">
              5
            </Badge>
          </DropdownToggle>
          <DropdownMenu className="pt-0" align="end">
            <DropdownHeader className="fw-bold rounded-top">{dict.task.message.replace('{{total}}', '5')}</DropdownHeader>

            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <small className="d-flex">
                  <div>{dict.task.items.task1}</div>
                  <div className="ms-auto">0%</div>
                </small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="primary"
                  now={0}
                />
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <small className="d-flex">
                  <div>{dict.task.items.task2}</div>
                  <div className="ms-auto">25%</div>
                </small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="danger"
                  now={25}
                />
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <small className="d-flex">
                  <div>{dict.task.items.task3}</div>
                  <div className="ms-auto">50%</div>
                </small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="warning"
                  now={50}
                />
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <small className="d-flex">
                  <div>{dict.task.items.task4}</div>
                  <div className="ms-auto">75%</div>
                </small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="primary"
                  now={75}
                />
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <small className="d-flex">
                  <div>{dict.task.items.task5}</div>
                  <div className="ms-auto">100%</div>
                </small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="success"
                  now={100}
                />
              </DropdownItem>
            </Link>

            <DropdownDivider />

            <Link href="#" passHref legacyBehavior>
              <DropdownItem className="text-center fw-bold">{dict.task.view_all}</DropdownItem>
            </Link>

          </DropdownMenu>
        </Dropdown>
      </NavItem>
      <NavItem className="d-none d-sm-block">
        <Dropdown>
          <DropdownToggle className="px-2 mx-1 px-sm-3 mx-sm-0" as={NavLink} bsPrefix="hide-caret" id="dropdown-mail">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <Badge pill bg="primary" className="position-absolute top-0 end-0 px-1 px-sm-2">
              7
            </Badge>
          </DropdownToggle>
          <DropdownMenu className="pt-0" align="end">
            <DropdownHeader className="fw-bold rounded-top">{dict.messages.message.replace('{{total}}', '4')}</DropdownHeader>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <div className="message">
                  <div className="py-3 me-3 float-start">
                    <div className="avatar d-inline-flex position-relative">
                      <Image
                        fill
                        className="rounded-circle"
                        src="/assets/img/avatars/1.jpg"
                        alt="user@email.com"
                      />
                      <span
                        className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                      />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted">{dict.messages.items.item1.user}</small>
                    <small className="text-muted float-end mt-1">{dict.messages.items.item1.time}</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    <span className="text-danger">!</span>
                    {' '}
                    {dict.messages.items.item1.title}
                  </div>
                  <div className="small text-truncate text-muted">
                    {dict.messages.items.item1.description}
                  </div>
                </div>
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <div className="message">
                  <div className="py-3 me-3 float-start">
                    <div className="avatar d-inline-flex position-relative">
                      <Image
                        fill
                        className="rounded-circle"
                        src="/assets/img/avatars/2.jpg"
                        alt="user@email.com"
                      />
                      <span
                        className="avatar-status position-absolute d-block bottom-0 end-0 bg-warning rounded-circle border border-white"
                      />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted">{dict.messages.items.item2.user}</small>
                    <small className="text-muted float-end mt-1">{dict.messages.items.item2.time}</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    {dict.messages.items.item2.title}
                  </div>
                  <div className="small text-truncate text-muted">
                    {dict.messages.items.item2.description}
                  </div>
                </div>
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <div className="message">
                  <div className="py-3 me-3 float-start">
                    <div className="avatar d-inline-flex position-relative">
                      <Image
                        fill
                        className="rounded-circle"
                        src="/assets/img/avatars/3.jpg"
                        alt="user@email.com"
                      />
                      <span
                        className="avatar-status position-absolute d-block bottom-0 end-0 bg-danger rounded-circle border border-white"
                      />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted">{dict.messages.items.item3.user}</small>
                    <small className="text-muted float-end mt-1">{dict.messages.items.item3.time}</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    {dict.messages.items.item3.title}
                  </div>
                  <div className="small text-truncate text-muted">
                    {dict.messages.items.item3.description}
                  </div>
                </div>
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <div className="message">
                  <div className="py-3 me-3 float-start">
                    <div className="avatar d-inline-flex position-relative">
                      <Image
                        fill
                        className="rounded-circle"
                        src="/assets/img/avatars/4.jpg"
                        alt="user@email.com"
                      />
                      <span
                        className="avatar-status position-absolute d-block bottom-0 end-0 bg-primary rounded-circle border border-white"
                      />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted">{dict.messages.items.item4.user}</small>
                    <small className="text-muted float-end mt-1">{dict.messages.items.item4.time}</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    {dict.messages.items.item4.title}
                  </div>
                  <div className="small text-truncate text-muted">
                    {dict.messages.items.item4.description}
                  </div>
                </div>
              </DropdownItem>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </NavItem>
      <NavItem>
        <HeaderLocale currentLocale={getLocale()} />
      </NavItem>
      <NavItem>
        <HeaderTheme currentPreferredTheme={getPreferredTheme()} />
      </NavItem>
    </Nav>
  )
}
