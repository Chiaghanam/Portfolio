import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarComponent = ({ activeSection }) => {
  return (
    <Navbar expand="lg" className="bg-body-transparent fixed-top">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="/assets/image/mepic.jpg" alt="Profile" className="img-fluid rounded" style={{maxWidth: "50px", height: "50px", boxShadow: "0px  -1px 8px #198754"}}/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
            activeKey={activeSection}
          >
            <Nav.Link href="#home" eventKey="#home">Home</Nav.Link>
            <Nav.Link href="#about" eventKey="#about">About</Nav.Link>
            <Nav.Link href="#projects" eventKey="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact" eventKey="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;