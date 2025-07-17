import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/verilialogo.jpg";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const location = useLocation();

  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="verilia-navbar"
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        border: "1.5px solid #e0e7ef",
        borderRadius: "1.5rem",
        margin: "1rem auto",
        maxWidth: "1200px",
        boxShadow: "0 8px 32px rgba(37,99,235,0.10)",
        transition: "box-shadow 0.3s, background 0.3s",
        zIndex: 1000,
      }}
    >
      <Container>
        <Link to="/" className="navbar-brand" onClick={closeNavbar}>
          <div
            className="d-flex align-items-center"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            <img
              src={logo}
              alt="Verilia Logo"
              style={{
                height: "44px",
                marginRight: "16px",
                borderRadius: "50%",
                boxShadow: logoHovered
                  ? "0 4px 16px rgba(37,99,235,0.18)"
                  : "0 2px 8px rgba(37,99,235,0.10)",
                transform: logoHovered
                  ? "scale(1.08) rotate(-6deg)"
                  : "scale(1)",
                transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                border: logoHovered ? "2px solid #2563eb" : "2px solid #fff",
                background: "#fff",
              }}
            />
            <span
              className="text-primary fw-bold"
              style={{
                fontSize: "2rem",
                letterSpacing: "2px",
                marginBottom: "0",
                paddingTop: "2px",
                textShadow: logoHovered
                  ? "0 2px 8px #60a5fa"
                  : "0 1px 2px #e0e7ef",
                transition: "text-shadow 0.3s",
              }}
            >
              VERILIA
            </span>
          </div>
        </Link>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
          style={{
            border: "none",
            background: "rgba(96,165,250,0.08)",
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(37,99,235,0.10)",
          }}
        >
          <BiMenu size={28} color="#2563eb" />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            <Link
              to="/"
              className={`nav-link verilia-nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              onClick={closeNavbar}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link verilia-nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
              onClick={closeNavbar}
            >
              About
            </Link>
            <NavDropdown
              title="Solutions"
              id="solutions-dropdown"
              className="verilia-nav-link"
            >
              <NavDropdown.Item
                as={Link}
                to="/solutions/web"
                onClick={closeNavbar}
              >
                Web Solutions
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/solutions/mobile"
                onClick={closeNavbar}
              >
                Mobile Solutions
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/solutions/enterprise"
                onClick={closeNavbar}
              >
                Enterprise Solutions
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Technologies"
              id="technologies-dropdown"
              className="verilia-nav-link"
            >
              <NavDropdown.Item
                as={Link}
                to="/technologies/react"
                onClick={closeNavbar}
              >
                React
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/technologies/node"
                onClick={closeNavbar}
              >
                Node.js
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/technologies/aws"
                onClick={closeNavbar}
              >
                AWS
              </NavDropdown.Item>
            </NavDropdown>
            <Link
              to="/services"
              className={`nav-link verilia-nav-link ${
                location.pathname === "/services" ? "active" : ""
              }`}
              onClick={closeNavbar}
            >
              Services
            </Link>
            <Link
              to="/team"
              className={`nav-link verilia-nav-link ${
                location.pathname === "/team" ? "active" : ""
              }`}
              onClick={closeNavbar}
            >
              Team
            </Link>
            <Link
              to="/contact"
              className={`nav-link verilia-nav-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
              onClick={closeNavbar}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
