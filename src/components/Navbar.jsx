import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/verilialogo.jpg";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const location = useLocation();

  const closeNavbar = () => setExpanded(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/team", label: "Team" },
    { to: "/contact", label: "Contact" },
  ];

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
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link verilia-nav-link ${
                  location.pathname === link.to ? "active" : ""
                }`}
                onClick={closeNavbar}
                style={{
                  position: "relative",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: location.pathname === link.to ? "#2563eb" : "#334155",
                  padding: "0.5rem 1.1rem",
                  borderRadius: "1.2rem",
                  transition: "color 0.2s, background 0.2s",
                  background:
                    location.pathname === link.to
                      ? "linear-gradient(90deg, #2563eb11 0%, #60a5fa11 100%)"
                      : "transparent",
                  overflow: "hidden",
                }}
              >
                {link.label}
                <span
                  className="verilia-underline"
                  style={{
                    display: "block",
                    height: "3px",
                    borderRadius: "2px",
                    background:
                      location.pathname === link.to
                        ? "linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)"
                        : "transparent",
                    width: location.pathname === link.to ? "100%" : "0%",
                    transition: "width 0.3s cubic-bezier(.4,2,.6,1)",
                    marginTop: "4px",
                  }}
                />
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
