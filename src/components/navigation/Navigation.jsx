import React from 'react'
import './navigation.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
  return (
    <div className='navigation'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home" className="m-auto" >Home</Nav.Link>
              <Nav.Link href="#about" className="m-auto">About us</Nav.Link>
              <Nav.Link href="#portfolio" className="m-auto">Portfolio</Nav.Link>
              <Nav.Link href="#skills" className="m-auto">Skills</Nav.Link>
              <Nav.Link href="#experience" className="m-auto">Experience</Nav.Link>
              <Nav.Link href="#education" className="m-auto">Education</Nav.Link>
              <Nav.Link href="#testimonials" className="m-auto">Testimonials</Nav.Link>
              <Nav.Link href="#blog" className="m-auto">Blog</Nav.Link>
              <Nav.Link href="#contact" className="m-auto">Contact me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}

export default Navigation;
