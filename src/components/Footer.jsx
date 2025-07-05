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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="pt-6 pb-4 bg-dark text-white">
      <Container>
        <Row className="g-5 mb-5">
          <Col lg={4}>
            <h3 className="text-primary mb-4">VERILIA</h3>
            <p className="mb-4">
              We innovate at the intersection of technology and real-world
              challenges, building solutions that make an impact.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5">
                <BiLogoLinkedin />
              </a>
              <a href="#" className="text-white fs-5">
                <BiLogoTwitter />
              </a>
              <a href="#" className="text-white fs-5">
                <BiLogoGithub />
              </a>
              <a href="#" className="text-white fs-5">
                <BiLogoInstagram />
              </a>
            </div>
          </Col>

          <Col lg={2} md={4}>
            <h4 className="mb-4">Company</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#solutions"
                  className="text-white text-decoration-none"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a href="#team" className="text-white text-decoration-none">
                  Team
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={4}>
            <h4 className="mb-4">Solutions</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Software Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  AI & Machine Learning
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Blockchain Technology
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={4}>
            <h4 className="mb-4">Contact</h4>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <BiMap className="text-primary mt-1 me-3" size={20} />
                <span>1Kampala Uganda</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <BiEnvelope className="text-primary mt-1 me-3" size={20} />
                <span>verilia@gmail.com</span>
              </li>
              <li className="d-flex align-items-start">
                <BiPhone className="text-primary mt-1 me-3" size={20} />
                <span>+256761238019</span>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="pt-4 mt-4 border-top border-secondary">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {currentYear} Verilia Technologies. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
