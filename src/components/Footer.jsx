import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BiEnvelope,
  BiPhone,
  BiMap,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoGithub,
  BiLogoInstagram,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../assets/images/verilialogo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="pt-6 pb-4 text-white"
      style={{
        background: "linear-gradient(120deg, #0f172a 0%, #1e293b 100%)", // darker blue/black
        position: "relative",
        overflow: "hidden",
      }}
    >
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 0,
        }}
        height="60"
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          fillOpacity="0.07"
          d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,43,864,53.3C960,64,1056,64,1152,53.3C1248,43,1344,32,1392,26.7L1440,21L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <Container style={{ position: "relative", zIndex: 1 }}>
        <Row className="g-5 mb-5 align-items-center">
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
              <img
                src={logo}
                alt="Verilia Logo"
                style={{
                  width: 48,
                  height: 48,
                  marginRight: 12,
                  borderRadius: "50%",
                  boxShadow: "0 4px 16px rgba(37,99,235,0.15)",
                  background: "#fff",
                  objectFit: "cover",
                }}
              />
              <h3
                className="mb-0 fw-bold"
                style={{ color: "#fff176", letterSpacing: "2px" }}
              >
                VERILIA
              </h3>
            </div>
            <p className="mb-4" style={{ color: "#e0e7ef" }}>
              We innovate at the intersection of technology and real-world
              challenges, building solutions that make an impact.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-4" aria-label="LinkedIn">
                <BiLogoLinkedin />
              </a>
              <a href="#" className="text-white fs-4" aria-label="Twitter">
                <BiLogoTwitter />
              </a>
              <a href="#" className="text-white fs-4" aria-label="GitHub">
                <BiLogoGithub />
              </a>
              <a href="#" className="text-white fs-4" aria-label="Instagram">
                <BiLogoInstagram />
              </a>
            </div>
          </Col>

          <Col lg={2} md={4} className="mb-4 mb-md-0">
            <h5 className="mb-4" style={{ color: "#60a5fa" }}>
              Company
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white text-decoration-none"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-white text-decoration-none"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white text-decoration-none"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-white text-decoration-none"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Team
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={4} className="mb-4 mb-md-0">
            <h5 className="mb-4" style={{ color: "#60a5fa" }}>
              Services
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white text-decoration-none"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Software Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white text-decoration-none"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  AI & Machine Learning
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white text-decoration-none"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white text-decoration-none"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Blockchain Technology
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={4}>
            <h5 className="mb-4" style={{ color: "#60a5fa" }}>
              Contact
            </h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <BiMap className="text-primary mt-1 me-3" size={22} />
                <span>Kampala, Uganda</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <BiEnvelope className="text-primary mt-1 me-3" size={22} />
                <span>verilia@gmail.com</span>
              </li>
              <li className="d-flex align-items-start">
                <BiPhone className="text-primary mt-1 me-3" size={22} />
                <span>+256761238019</span>
              </li>
            </ul>
            <div className="mt-4">
              <span
                className="badge rounded-pill bg-primary px-3 py-2"
                style={{
                  fontSize: "1rem",
                  background:
                    "linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)",
                }}
              >
                Let’s Connect!
              </span>
            </div>
          </Col>
        </Row>

        <Row
          className="pt-4 mt-4 border-top border-secondary"
          style={{ borderColor: "#334155 !important" }}
        >
          <Col className="text-center">
            <p
              className="mb-0"
              style={{ color: "#e0e7ef", letterSpacing: "1px" }}
            >
              &copy; {currentYear}{" "}
              <span style={{ color: "#fff176" }}>Verilia Technologies</span>.
              All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>

      <div
        style={{
          position: "absolute",
          bottom: 24,
          right: 32,
          opacity: 0.1,
          fontSize: 60,
          pointerEvents: "none",
        }}
      >
        ✨
      </div>
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 32,
          opacity: 0.08,
          fontSize: 48,
          pointerEvents: "none",
        }}
      >
        💡
      </div>
    </footer>
  );
};

export default Footer;
