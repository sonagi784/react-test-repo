import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getUrl } from '@/utils/getUrl';

interface INavInfo {
  name?: string;
  url?: string;
}

interface IProps {
  left?: INavInfo[];
  right?: INavInfo[];
  mid?: INavInfo;
}

export default function Header({ left = [], right = [], mid = {} }: IProps) {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Collapse className="justify-content-start">
          {left &&
            left.slice(0, 2).map(({ name, url }) => (
              <Nav>
                <Nav.Link as={Link} to={getUrl(url || '')}>
                  {name || ''}
                </Nav.Link>
              </Nav>
            ))}
        </Navbar.Collapse>
        <Navbar.Brand as={Link} to={getUrl(mid?.url || '')}>
          {mid?.name || ''}
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {right &&
            right.slice(0, 2).map(({ name, url }) => (
              <Nav>
                <Nav.Link as={Link} to={getUrl(url || '')}>
                  {name || ''}
                </Nav.Link>
              </Nav>
            ))}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
