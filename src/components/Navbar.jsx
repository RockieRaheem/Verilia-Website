import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../assets/images/verilialogo.jpg"; // Import your logo

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
        <Link to="/" className="navbar-brand" onClick={closeNavbar}>
          <div className="d-flex align-items-center">
            <img
              src={logo}
              alt="Verilia Logo"
              style={{ height: "40px", marginRight: "14px" }} // Add right margin to logo
            />
            <span
              className="text-primary fw-bold"
              style={{
                fontSize: "1.8rem",
                letterSpacing: "2px",
                marginBottom: "0",
                paddingTop: "2px", // Adjust vertical alignment if needed
              }}
            >
              VERILIA
            </span>
          </div>
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
