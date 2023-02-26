import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Navbar
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/search">
            search
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
