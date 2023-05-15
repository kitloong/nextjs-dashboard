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
  Badge, Dropdown, Nav, NavLink, ProgressBar,
} from 'react-bootstrap'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import Image from 'next/image'

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

export default function HeaderNotificationNav() {
  return (
    <Nav>
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle as={NavLink} bsPrefix="hide-caret" id="dropdown-notification">
            <FontAwesomeIcon icon={faBell} size="lg" />
            <Badge pill bg="danger" className="position-absolute top-0 right-0">
              5
            </Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu className="pt-0" align="end">
            <Dropdown.Header className="bg-light fw-bold rounded-top">You have 5 notifications</Dropdown.Header>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <ItemWithIcon icon={faUserPlus}>
                  New user registered
                </ItemWithIcon>
              </Dropdown.Item>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <ItemWithIcon icon={faUserMinus}>
                  User deleted
                </ItemWithIcon>
              </Dropdown.Item>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <ItemWithIcon icon={faChartBar}>
                  Sales report is ready
                </ItemWithIcon>
              </Dropdown.Item>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <ItemWithIcon icon={faBasketShopping}>
                  New client
                </ItemWithIcon>
              </Dropdown.Item>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <ItemWithIcon icon={faGaugeHigh}>
                  Server overloaded
                </ItemWithIcon>
              </Dropdown.Item>
            </Link>

            <Dropdown.Header className="bg-light fw-bold">Server</Dropdown.Header>

            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <small><div className="text-uppercase"><b>CPU Usage</b></div></small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="primary"
                  now={25}
                />
                <small>
                  <div className="text-muted">348 Processes. 1/4 Cores.</div>
                </small>
              </Dropdown.Item>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <small><div className="text-uppercase"><b>Memory Usage</b></div></small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="warning"
                  now={75}
                />
                <small>
                  <div className="text-muted">11,444GB / 16,384MB</div>
                </small>
              </Dropdown.Item>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <small><div className="text-uppercase"><b>SSD 1 Usage</b></div></small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="danger"
                  now={90}
                />
                <small>
                  <div className="text-muted">243GB / 256GB</div>
                </small>
              </Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle as={NavLink} bsPrefix="hide-caret" id="dropdown-task">
            <FontAwesomeIcon icon={faList} size="lg" />
            <Badge pill bg="warning" className="position-absolute top-0 right-0">
              5
            </Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu className="pt-0" align="end">
            <Dropdown.Header className="bg-light fw-bold rounded-top">You have 5 pending tasks</Dropdown.Header>

            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <small className="d-flex">
                  <div>Upgrade Next.JS</div>
                  <div className="ms-auto">0%</div>
                </small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="primary"
                  now={0}
                />
              </Dropdown.Item>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <small className="d-flex">
                  <div>Train Pokemons</div>
                  <div className="ms-auto">25%</div>
                </small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="danger"
                  now={25}
                />
              </Dropdown.Item>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <small className="d-flex">
                  <div>Complete Pokedex</div>
                  <div className="ms-auto">50%</div>
                </small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="warning"
                  now={50}
                />
              </Dropdown.Item>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <small className="d-flex">
                  <div>Catch all shiny</div>
                  <div className="ms-auto">75%</div>
                </small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="primary"
                  now={75}
                />
              </Dropdown.Item>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <small className="d-flex">
                  <div>Beat all gyms</div>
                  <div className="ms-auto">100%</div>
                </small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="success"
                  now={100}
                />
              </Dropdown.Item>
            </Link>

            <Dropdown.Divider />

            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item className="text-center fw-bold">View all tasks</Dropdown.Item>
            </Link>

          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle as={NavLink} bsPrefix="hide-caret" id="dropdown-mail">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <Badge pill bg="primary" className="position-absolute top-0 right-0">
              7
            </Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu className="pt-0" align="end">
            <Dropdown.Header className="bg-light fw-bold rounded-top">You have 4 messages</Dropdown.Header>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
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
                    <small className="text-muted">John Doe</small>
                    <small className="text-muted float-end mt-1">Just now</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    <span className="text-danger">!</span>
                    {' '}
                    Pet Pikachu
                  </div>
                  <div className="small text-truncate text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt
                  </div>
                </div>
              </Dropdown.Item>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
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
                    <small className="text-muted">John Doe</small>
                    <small className="text-muted float-end mt-1">5 mins ago</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    Dress Eevee
                  </div>
                  <div className="small text-truncate text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt
                  </div>
                </div>
              </Dropdown.Item>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
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
                    <small className="text-muted">John Doe</small>
                    <small className="text-muted float-end mt-1">1:52 PM</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    Team up training
                  </div>
                  <div className="small text-truncate text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt
                  </div>
                </div>
              </Dropdown.Item>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
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
                    <small className="text-muted">John Doe</small>
                    <small className="text-muted float-end mt-1">4:03 PM</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    Go to Safari Zone
                  </div>
                  <div className="small text-truncate text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt
                  </div>
                </div>
              </Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    </Nav>
  )
}
