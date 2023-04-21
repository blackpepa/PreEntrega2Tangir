import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 navColor">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">Kawaii Store</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                  <Nav.Link href="#action2">Somos Kawaii</Nav.Link>
                  <NavDropdown
                    title="Productos"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={Link} to="/productos/remeras">Remeras</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/productos/accesorios">
                    Accesorios
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/productos/lapiceras">
                      Lapiceras
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#">Mi cuenta</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          <Link to='/cart'><CartWidget/></Link>
        </Navbar>
      ))}
    </>
  );
}

