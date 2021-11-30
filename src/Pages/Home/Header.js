import React from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../Styles/Header.css'
import ThemeSwitcher from "react-theme-switcher";
const Header = () => {
  return (
    <>
      <Navbar bg="transparent" variant='dark' expand={false} className='pt-4'>
        <Container>
          <Navbar.Brand href="#">{"<"} D I P <span>{"/>"}</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 canvas-menu">
                <Nav.Link href="#action1" as={Link} to='/'>Home</Nav.Link>
                <Nav.Link href="#action2" as={Link} to='/about'>About</Nav.Link>
                <Nav.Link href="#action2" as={Link} to='/blog'>Blog</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
          {/* <ThemeSwitcher /> */}
      </Navbar>
    </>
  );
};

export default Header;
