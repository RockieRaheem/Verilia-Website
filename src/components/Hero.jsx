import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BiArrowToRight } from "react-icons/bi";

const Hero = () => {
  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #e0f2fe 0%, #f0f9ff 100%)",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4">
              <span className="text-primary">Elith Pharmacy</span>
              <br />
              Management System
            </h1>
            <p className="lead text-secondary mb-5">
              Cutting-edge software solutions for Elith pharmacy. Streamline
              operations, enhance patient care, and boost profitability.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button variant="primary" size="lg" className="px-4 py-3">
                View Demo <BiArrowToRight className="ms-2" />
              </Button>
              <Button variant="outline-dark" size="lg" className="px-4 py-3">
                Contact Sales
              </Button>
            </div>
          </Col>
          <Col lg={6} className="text-center">
            <div className="position-relative">
              <div
                className="bg-primary rounded-circle position-absolute"
                style={{
                  width: "500px",
                  height: "500px",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0.1,
                }}
              ></div>
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070"
                alt="Elith Pharmacy Management System"
                className="img-fluid rounded shadow-lg"
                style={{ position: "relative", maxHeight: "500px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
