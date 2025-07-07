import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BiCodeCurly,
  BiBrain,
  BiCloud,
  BiData,
  BiLockAlt,
  BiMobile,
  BiShield,
} from "react-icons/bi";

const Services = () => {
  const services = [
    {
      icon: <BiCodeCurly size={36} className="text-primary" />,
      title: "Custom Software Development",
      description:
        "Tailored applications built with modern stacks to solve your unique business challenges",
      features: [
        "Web & mobile apps",
        "API integration",
        "Microservices architecture",
      ],
    },
    {
      icon: <BiBrain size={36} className="text-primary" />,
      title: "AI & Machine Learning",
      description:
        "Intelligent systems that learn, adapt, and automate complex processes",
      features: [
        "Predictive analytics",
        "Computer vision",
        "Natural language processing",
      ],
    },
    {
      icon: <BiCloud size={36} className="text-primary" />,
      title: "Cloud Solutions",
      description:
        "Scalable and secure cloud infrastructure for growing businesses",
      features: [
        "Cloud migration",
        "Serverless architecture",
        "Hybrid cloud solutions",
      ],
    },
    {
      icon: <BiData size={36} className="text-primary" />,
      title: "Data Engineering",
      description:
        "Transforming raw data into actionable business intelligence",
      features: [
        "Data pipelines",
        "Warehousing solutions",
        "Real-time analytics",
      ],
    },
    {
      icon: <BiLockAlt size={36} className="text-primary" />,
      title: "Blockchain Solutions",
      description:
        "Secure decentralized applications for transparent operations",
      features: ["Smart contracts", "NFT platforms", "Supply chain tracking"],
    },
    {
      icon: <BiShield size={36} className="text-primary" />,
      title: "Cybersecurity",
      description:
        "Protecting your digital assets with enterprise-grade security",
      features: [
        "Threat detection",
        "Compliance frameworks",
        "Penetration testing",
      ],
    },
  ];

  return (
    <section id="solutions" className="py-6">
      <Container>
        <Row className="justify-content-center mb-6">
          <Col md={10} className="text-center">
            <h2 className="text-primary">Technology Solutions</h2>
            <div className="underline mx-auto"></div>
            <p className="lead mt-4">
              We deliver cutting-edge solutions across multiple domains,
              leveraging the latest technologies to solve complex business
              challenges
            </p>
          </Col>
        </Row>

        <Row className="g-5">
          {services.map((solution, index) => (
            <Col lg={4} md={6} key={index}>
              <div className="h-100 p-5 bg-light rounded-4 shadow-sm border-start border-3 border-primary">
                <div className="mb-4">{solution.icon}</div>
                <h3 className="mb-3">{solution.title}</h3>
                <p className="text-secondary mb-4">{solution.description}</p>
                <ul className="list-unstyled">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="mb-2 d-flex">
                      <span className="text-primary me-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-6">
          <Col className="bg-primary text-white p-6 rounded-4 text-center">
            <Row className="align-items-center">
              <Col md={8} className="text-md-start mb-4 mb-md-0">
                <h3 className="mb-3">Ready to Transform Your Business?</h3>
                <p className="mb-0">
                  Our team of experts is ready to collaborate on your next
                  technology initiative
                </p>
              </Col>
              <Col md={4} className="text-md-end">
                <button className="btn btn-light btn-lg px-4 py-3 fw-bold">
                  Schedule Consultation
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
