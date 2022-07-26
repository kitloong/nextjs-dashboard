import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { Nav } from 'react-bootstrap'

export default function HeaderNotificationNav() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link className="p-2">
          <FontAwesomeIcon icon={faBell} size="lg" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="p-2">
          <FontAwesomeIcon icon={faList} size="lg" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="p-2">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
