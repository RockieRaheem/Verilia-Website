import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiCheckShield, BiTrendingUp, BiUser } from "react-icons/bi";

const About = () => {
  const stats = [
    { value: "20+", label: "Team Members", icon: <BiUser size={24} /> },
    { value: "50+", label: "Happy Clients", icon: <BiCheckShield size={24} /> },
    { value: "200%", label: "Growth YoY", icon: <BiTrendingUp size={24} /> },
  ];

  return (
    <section id="about" className="bg-white py-6">
      <Container>
        <Row>
          <Col className="text-center mb-5">
            <h2 className="text-primary">About Verilia</h2>
            <div className="underline mx-auto"></div>
          </Col>
        </Row>

        <Row className="g-5">
          <Col md={6}>
            <div className="pe-md-4">
              <h3 className="mb-4">Our Mission</h3>
              <p className="lead">
                To transform pharmacy operations through intuitive, powerful
                software that empowers healthcare providers to focus on what
                matters most - patient care.
              </p>

              <p>
                Founded in 2023, Verilia emerged from a simple observation:
                pharmacies were struggling with outdated systems while patient
                needs were becoming more complex. Our team of healthcare and
                tech experts came together to build a solution that bridges this
                gap.
              </p>

              <div className="mt-5 bg-light p-4 rounded border">
                <h4>Why Choose Verilia?</h4>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <BiCheckShield className="text-primary me-2 mt-1" />
                    <span>HIPAA-compliant security protocols</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <BiCheckShield className="text-primary me-2 mt-1" />
                    <span>Real-time inventory management</span>
                  </li>
                  <li className="d-flex">
                    <BiCheckShield className="text-primary me-2 mt-1" />
                    <span>Seamless third-party integrations</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069"
              alt="Pharmacy Team"
              className="img-fluid rounded shadow"
            />

            <div className="mt-5">
              <Row>
                {stats.map((stat, index) => (
                  <Col key={index} className="text-center">
                    <div className="d-flex align-items-center justify-content-center mb-2">
                      <span className="text-primary me-2">{stat.icon}</span>
                      <h3 className="mb-0">{stat.value}</h3>
                    </div>
                    <p className="text-secondary">{stat.label}</p>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
