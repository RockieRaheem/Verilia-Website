// src/components/Navbar.jsx
import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar
      bg="white"
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="shadow-sm py-3"
    >
      <Container>
        <Link
          to="/"
          className="navbar-brand fw-bold fs-3 text-primary"
          onClick={closeNavbar}
        >
          VERILIA
        </Link>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          <BiMenu size={28} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link" onClick={closeNavbar}>
              Home
            </Link>
            <Link to="/about" className="nav-link" onClick={closeNavbar}>
              About
            </Link>
            <Link to="/services" className="nav-link" onClick={closeNavbar}>
              Services
            </Link>
            <Link to="/team" className="nav-link" onClick={closeNavbar}>
              Team
            </Link>
            <Link to="/contact" className="nav-link" onClick={closeNavbar}>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
