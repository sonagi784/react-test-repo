import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getUrl } from '@/utils/getUrl';

interface IHeaderItem {
  name?: string;
  type?: string;
}

interface IProps {
  left?: IHeaderItem[];
  right?: IHeaderItem[];
  mid?: IHeaderItem;
}

const MAX_ITEM_COUNT = 2;

function HeaderItem({ name, type }: IHeaderItem) {
  return (
    <Nav>
      <Nav.Link as={Link} to={getUrl(type)}>
        {name}
      </Nav.Link>
    </Nav>
  );
}

function Header({ left = [], right = [], mid = {} }: IProps) {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Collapse className="justify-content-start">
          {left.slice(0, MAX_ITEM_COUNT).map((item, index) => (
            <HeaderItem {...item} key={`header_left_${index}`} />
          ))}
        </Navbar.Collapse>
        <Navbar.Brand>
          <HeaderItem {...mid} />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {right.slice(0, MAX_ITEM_COUNT).map((item, index) => (
            <HeaderItem {...item} key={`header_right_${index}`} />
          ))}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Header.Item = HeaderItem;

export default Header;
