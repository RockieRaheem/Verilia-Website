import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiLogoLinkedin, BiLinkExternal } from "react-icons/bi";

const Team = () => {
  const teamMembers = [
    {
      name: "Verily",
      role: "Founder & CEO",
      bio: "Former tech executive with 15+ years experience in software and AI",
      expertise: ["AI Strategy", "Cloud Architecture"],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWhoWbi0PJe_UWAGxkBeuMwarjRg6A8x8JJQ&s",
    },
    {
      name: "AI Verilian",
      role: "Lead AI Researcher",
      bio: "PhD in Machine Learning and natural language processing",
      expertise: ["Deep Learning", "NLP"],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWhoWbi0PJe_UWAGxkBeuMwarjRg6A8x8JJQ&",
    },
    {
      name: "Eng Verilian",
      role: "Head of Engineering",
      bio: "Specializes in scalable cloud architectures and distributed systems",
      expertise: ["Cloud Infrastructure", "DevOps"],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWhoWbi0PJe_UWAGxkBeuMwarjRg6A8x8JJQ&s",
    },
    {
      name: "UX Verilian",
      role: "UX Design Director",
      bio: "Creating intuitive experiences for complex applications",
      expertise: ["Design Systems", "User Research"],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWhoWbi0PJe_UWAGxkBeuMwarjRg6A8x8JJQ&s",
    },
  ];

  return (
    <section id="team" className="py-6 bg-light">
      <Container>
        <Row className="justify-content-center mb-6">
          <Col md={8} className="text-center">
            <h2 className="text-primary">Our Interdisciplinary Team</h2>
            <div className="underline mx-auto"></div>
            <p className="lead mt-4">
              Diverse experts collaborating across technology domains to drive
              innovation
            </p>
          </Col>
        </Row>

        <Row className="g-5">
          {teamMembers.map((member, index) => (
            <Col lg={3} md={6} key={index}>
              <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                <div className="position-relative mb-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="img-fluid rounded-3 mb-3"
                  />
                  <a
                    href="#"
                    className="position-absolute top-0 end-0 bg-primary text-white p-2 rounded-circle"
                  >
                    <BiLogoLinkedin size={20} />
                  </a>
                </div>
                <h4 className="mb-1">{member.name}</h4>
                <p className="text-primary fw-bold mb-3">{member.role}</p>
                <p className="text-secondary mb-4">{member.bio}</p>
                <div>
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="badge bg-primary bg-opacity-10 text-primary me-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-6 justify-content-center">
          <Col md={10} className="bg-white p-5 rounded-4 shadow-sm text-center">
            <h3 className="mb-4">Grow Your Career With Us</h3>
            <p className="lead mb-4">
              We're hiring talented individuals across engineering, design, and
              research roles. Join our collaborative environment where you'll
              work on cutting-edge technologies.
            </p>
            <button className="btn btn-outline-primary btn-lg px-4 py-3">
              View Open Positions <BiLinkExternal className="ms-2" />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Team;
