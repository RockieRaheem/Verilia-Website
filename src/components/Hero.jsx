import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BiCodeCurly, BiBrain, BiCloud, BiRocket } from "react-icons/bi";

const Hero = () => {
  const techDomains = [
    {
      icon: <BiCodeCurly size={36} className="text-primary" />,
      name: "Software Development",
      description: "Building scalable solutions for complex problems",
    },
    {
      icon: <BiBrain size={36} className="text-primary" />,
      name: "AI & Machine Learning",
      description: "Intelligent systems transforming industries",
    },
    {
      icon: <BiCloud size={36} className="text-primary" />,
      name: "Cloud Solutions",
      description: "Scalable infrastructure for growing needs",
    },
    {
      icon: <BiRocket size={36} className="text-primary" />,
      name: "Emerging Tech",
      description: "Exploring blockchain, IoT, and quantum computing",
    },
  ];

  return (
    <section
      id="home"
      className="d-flex align-items-center py-6"
      style={{
        background: "linear-gradient(135deg, #f0f9ff 0%, #e6f7ff 100%)",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Row className="align-items-center g-5">
          {/* Left Column - Text Content */}
          <Col lg={6} className="order-lg-1 order-2">
            <div className="mb-4">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 fs-6">
                <BiRocket className="me-2" /> Innovating Since 2023
              </span>
            </div>

            <h1 className="display-4 fw-bold mb-4">
              <span className="text-primary">Technology Solutions</span>
              <br />
              For Real-World Challenges
            </h1>

            <p className="lead text-secondary mb-5">
              At Verilia, we bring together brilliant minds from diverse
              disciplines to build transformative technology solutions. We're
              pioneering advancements across multiple domains to solve
              tomorrow's problems today.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-5">
              <Button
                variant="primary"
                size="lg"
                className="px-4 py-3 fw-medium"
              >
                Explore Our Work
              </Button>
              <Button
                variant="outline-dark"
                size="lg"
                className="px-4 py-3 fw-medium"
              >
                Join Our Team
              </Button>
            </div>
          </Col>

          {/* Right Column - Tech Domains */}
          <Col lg={6} className="order-lg-2 order-1 text-center">
            <div className="position-relative">
              {/* Background Elements */}
              <div
                className="position-absolute top-50 start-50 translate-middle"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  aspectRatio: "1/1",
                  background:
                    "radial-gradient(rgba(37, 99, 235, 0.1) 0%, transparent 70%)",
                  borderRadius: "50%",
                  zIndex: 0,
                }}
              ></div>

              {/* Tech Domains Grid */}
              <div className="position-relative z-1">
                <div className="bg-white p-5 rounded-4 shadow-lg">
                  <h3 className="mb-4">
                    Interdisciplinary{" "}
                    <span className="text-primary">Tech Innovation</span>
                  </h3>

                  <Row className="g-4">
                    {techDomains.map((domain, index) => (
                      <Col md={6} key={index}>
                        <div className="h-100 p-4 bg-light rounded-3 border-start border-3 border-primary">
                          <div className="mb-3">{domain.icon}</div>
                          <h5 className="mb-2">{domain.name}</h5>
                          <p className="text-secondary mb-0 fs-6">
                            {domain.description}
                          </p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
