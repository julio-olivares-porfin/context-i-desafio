import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/fontAwesome.js';

const Navigation = () => {
  return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/" as={Link}>Tus Fotos Favoritas <FontAwesomeIcon className='color-brandicon' icon={['fas','heart']} />
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link to="/" as={Link}>Inicio</Nav.Link>
              <Nav.Link to="/favoritos" as={Link}>Favoritas</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Navigation
