import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import headerLogo from '../../assests/logo/denticare-logo.png';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './header.css';

const Header = () => {
   const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() =>{}) 
    .then(error => console.error(error))
  }
    return (
        <Navbar bg="" className='navbar-bg fixed-top' expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to='/'>
            <img className='img-fluid w-25' src={headerLogo} alt="" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto fw-semibold">
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/services'>Services</Link></Nav.Link>
              <Nav.Link><Link to='/blogs'>Blogs</Link></Nav.Link>
              <Nav.Link className='ms-5'>
              {
                  user?.uid ? 
                  <>
                  <span>
                  {user?.displayName}</span>
                  <Button className='ms-3 googlebtn' onClick={handleLogOut} variant="light" size="sm">Log Out</Button>
                  </>
                  :
                  <>
                  <div className='nav-links'>
                  <Link className='me-2 googlebtn' to='signin'>Sign In</Link>
                  <Link className='googlebtn' to='signup'>Sign Up</Link>
                  </div>
                  </>
                }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;