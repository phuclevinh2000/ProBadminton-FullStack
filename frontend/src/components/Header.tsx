import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          {/* <Link to="/"> */}
          <Navbar.Brand href="/">Probadminton</Navbar.Brand>
          {/* </Link> */}
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {/* change from ml-auto to ms-auto */}
            <Nav className='ms-auto'>
              {/* Using font awesome for icons */}
              {/* <Link to="/cart"> */}
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              {/* </Link> */}
              {/* <Link to="/login"> */}
              <Nav.Link href='/login'>
                <i className='fas fa-user'></i> Sign In
              </Nav.Link>
              {/* </Link>  */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
