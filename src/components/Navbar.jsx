import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="white"
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="shadow-sm py-3"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3 text-primary">
          VERILIA
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          <BiMenu size={28} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link href="#services" onClick={() => setExpanded(false)}>
              Services
            </Nav.Link>
            <Nav.Link href="#team" onClick={() => setExpanded(false)}>
              Team
            </Nav.Link>
            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
