import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiChip, BiCodeBlock, BiBrain, BiRocket } from "react-icons/bi";

const About = () => {
  const disciplines = [
    {
      icon: <BiChip size={36} className="text-primary" />,
      title: "Software Engineering",
      description: "Building robust, scalable solutions for complex problems",
    },
    {
      icon: <BiBrain size={36} className="text-primary" />,
      title: "AI & Machine Learning",
      description: "Creating intelligent systems that learn and adapt",
    },
    {
      icon: <BiCodeBlock size={36} className="text-primary" />,
      title: "Cloud Computing",
      description: "Leveraging cloud infrastructure for maximum efficiency",
    },
    {
      icon: <BiRocket size={36} className="text-primary" />,
      title: "Emerging Technologies",
      description: "Exploring blockchain, IoT, and quantum computing",
    },
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
          <Col lg={6}>
            <div className="pe-md-4">
              <h3 className="mb-4">Where Innovation Meets Impact</h3>
              <p className="lead">
                Verilia is a collective of brilliant minds from diverse
                disciplines, united by a common mission: to solve real-world
                problems through technology innovation.
              </p>

              <p>
                We're not just building software - we're creating solutions that
                transform industries, empower communities, and push the
                boundaries of what's possible. Our interdisciplinary approach
                combines expertise from computer science, engineering, data
                science, business, leadership and design to tackle complex
                challenges.
              </p>

              <div className="mt-5 bg-light p-4 rounded border">
                <h4>Our Growth Philosophy</h4>
                <p>
                  At Verilia, we believe in growing together. As we evolve into
                  a leading tech organization, every team member grows with us
                  through:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <div className="bg-primary rounded-circle p-2 me-3">
                      <BiRocket className="text-white" />
                    </div>
                    <span>
                      <strong>Continuous Learning:</strong> Weekly tech
                      workshops and sponsored certifications
                    </span>
                  </li>
                  <li className="mb-3 d-flex">
                    <div className="bg-primary rounded-circle p-2 me-3">
                      <BiRocket className="text-white" />
                    </div>
                    <span>
                      <strong>Cross-Disciplinary Projects:</strong> Rotate
                      between AI, cloud, backend and frontend teams
                    </span>
                  </li>
                  <li className="d-flex">
                    <div className="bg-primary rounded-circle p-2 me-3">
                      <BiRocket className="text-white" />
                    </div>
                    <span>
                      <strong>Impact Ownership:</strong> Lead projects that
                      align with your passions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="mb-5">
              <h4 className="mb-4">Our Disciplines</h4>
              <Row className="g-4">
                {disciplines.map((discipline, index) => (
                  <Col md={6} key={index}>
                    <div className="d-flex align-items-start">
                      <div className="me-3">{discipline.icon}</div>
                      <div>
                        <h5 className="mb-1">{discipline.title}</h5>
                        <p className="text-secondary mb-0">
                          {discipline.description}
                        </p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>

            <div className="bg-primary text-white p-5 rounded">
              <h3 className="mb-3">Join Our Tech Revolution</h3>
              <p>
                We're building more than products - we're cultivating an
                ecosystem where Enterpreneurs, Leaders, Engineers, Developers,
                Data scientists and Analysts, and designers collaborate to
                create meaningful technological advancements.
              </p>
              <p className="fw-bold">
                Currently developing solutions in healthcare, education, and
                sustainable technology
              </p>
              <button className="btn btn-light btn-lg mt-3 px-4 py-3 fw-bold">
                Explore Career Paths
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
