// src/components/TeamPreview.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-router-dom";

const TeamPreview = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    },
    {
      name: "Priya Sharma",
      role: "Lead AI Researcher",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976",
    },
    {
      name: "Arjun Patel",
      role: "Head of Engineering",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974",
    },
    {
      name: "Ananya Singh",
      role: "UX Design Director",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976",
    },
  ];

  return (
    <section className="py-6 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h2 className="text-primary">Our Team</h2>
            <div className="underline mx-auto"></div>
            <p className="lead mt-4">
              Meet the experts driving our technological innovation
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {teamMembers.map((member, index) => (
            <Col lg={3} md={6} key={index}>
              <div className="bg-white p-4 rounded-3 text-center h-100">
                <img
                  src={member.img}
                  alt={member.name}
                  className="img-fluid rounded-circle mb-3"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h4 className="mb-1">{member.name}</h4>
                <p className="text-primary fw-bold mb-0">{member.role}</p>
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Link to="/team" className="btn btn-outline-primary btn-lg px-4 py-3">
            Meet Our Full Team
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default TeamPreview;
