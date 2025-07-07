import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiCodeCurly, BiBrain, BiCloud, BiRocket } from "react-icons/bi";
import { Link } from "react-router-dom";

const ServicesPreview = () => {
  const services = [
    {
      icon: <BiCodeCurly size={36} className="text-primary" />,
      title: "Software Development",
      description: "Building scalable solutions for complex problems",
    },
    {
      icon: <BiBrain size={36} className="text-primary" />,
      title: "AI & Machine Learning",
      description: "Intelligent systems transforming industries",
    },
    {
      icon: <BiCloud size={36} className="text-primary" />,
      title: "Cloud Solutions",
      description: "Scalable infrastructure for growing needs",
    },
    {
      icon: <BiRocket size={36} className="text-primary" />,
      title: "Emerging Tech",
      description: "Exploring blockchain, IoT, and quantum computing",
    },
  ];

  return (
    <section className="py-6 bg-white">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h2 className="text-primary">Our Technology Services</h2>
            <div className="underline mx-auto"></div>
            <p className="lead mt-4">
              Comprehensive solutions across multiple technology domains
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col lg={3} md={6} key={index}>
              <div className="h-100 p-4 bg-light rounded-3 text-center">
                <div className="mb-3">{service.icon}</div>
                <h4 className="mb-3">{service.title}</h4>
                <p className="text-secondary mb-4">{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Link to="/services" className="btn btn-primary btn-lg px-4 py-3">
            View All Services
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServicesPreview;
