// src/pages/ContactPage.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { BiEnvelope, BiPhone, BiMap } from "react-icons/bi";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(120deg, #e0e7ef 0%, #f1f5f9 100%)",
        minHeight: "100vh",
        padding: "0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative SVG Top */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 0,
        }}
        height="120"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#2563eb"
          fillOpacity="0.13"
          d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,117.3C960,128,1056,128,1152,117.3C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <Container style={{ position: "relative", zIndex: 1, paddingTop: "7rem", paddingBottom: "4rem" }}>
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h2 className="display-4 fw-bold" style={{ color: "#2563eb", letterSpacing: "1px" }}>
              Get in <span style={{ color: "#60a5fa" }}>Touch</span>
            </h2>
            <div style={{
              width: 60,
              height: 5,
              background: "linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)",
              borderRadius: 3,
              margin: "1rem auto 0 auto"
            }}></div>
            <p className="lead mt-4" style={{ color: "#334155" }}>
              Have questions or want to collaborate? Reach out to our team and we’ll get back to you as soon as possible.
            </p>
          </Col>
        </Row>

        <Row className="g-5 align-items-stretch">
          <Col lg={6}>
            <div
              className="p-5 rounded-4 shadow-lg h-100"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(6px)",
                border: "1.5px solid #e0e7ef",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <h3 className="mb-4 fw-bold" style={{ color: "#2563eb" }}>
                Send Us a Message
              </h3>
              {submitted && (
                <div className="alert alert-success text-center fw-bold" role="alert">
                  Thank you for your message! We will get back to you soon.
                </div>
              )}
              <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Jane Doe"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. you@email.com"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message here..."
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-3 fw-bold"
                  style={{
                    background: "linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)",
                    border: "none",
                    fontSize: "1.15rem",
                    letterSpacing: "1px",
                  }}
                >
                  Send Message
                </Button>
              </Form>
              {/* Decorative floating shapes */}
              <div style={{
                position: "absolute", top: 10, right: 10, opacity: 0.13, fontSize: 60, pointerEvents: "none"
              }}>✉️</div>
              <div style={{
                position: "absolute", bottom: 10, left: 10, opacity: 0.10, fontSize: 48, pointerEvents: "none"
              }}>💬</div>
            </div>
          </Col>

          <Col lg={6}>
            <div
              className="p-5 rounded-4 shadow-lg h-100"
              style={{
                background: "linear-gradient(120deg, #2563eb11 0%, #60a5fa11 100%)",
                border: "1.5px solid #e0e7ef",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <h3 className="mb-4 fw-bold" style={{ color: "#2563eb" }}>
                Our Information
              </h3>

              <div className="mb-5">
                <h4 className="mb-3" style={{ color: "#60a5fa" }}>Office Location</h4>
                <div className="d-flex align-items-start mb-3">
                  <BiMap className="text-primary mt-1 me-3" size={24} />
                  <div>
                    <p className="mb-0 fw-bold">Verilia</p>
                    <p className="mb-0">Kampala, Uganda</p>
                  </div>
                </div>
                <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.99937386352!2d32.52801029999999!3d0.3475964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0a30c7e2db%3A0x7d4b0f86a3c0d3b6!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1718032198482!5m2!1sen!2sus"
                    style={{ border: 0, minHeight: 180, width: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="mb-3" style={{ color: "#60a5fa" }}>Contact Details</h4>
                <div className="d-flex align-items-start mb-3">
                  <BiEnvelope className="text-primary mt-1 me-3" size={24} />
                  <div>
                    <p className="mb-0">Email</p>
                    <p className="mb-0 fw-medium">verilia@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <BiPhone className="text-primary mt-1 me-3" size={24} />
                  <div>
                    <p className="mb-0">Phone</p>
                    <p className="mb-0 fw-medium">+256761238019</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-3" style={{ color: "#60a5fa" }}>Business Hours</h4>
                <p className="mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="mb-0">Saturday: 10:00 AM - 2:00 PM</p>
              </div>
              {/* Decorative floating icons */}
              <div style={{
                position: "absolute", top: 10, left: 10, opacity: 0.10, fontSize: 54, pointerEvents: "none"
              }}>📍</div>
              <div style={{
                position: "absolute", bottom: 10, right: 10, opacity: 0.10, fontSize: 48, pointerEvents: "none"
              }}>📞</div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Decorative SVG Bottom */}
      <svg
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 0,
        }}
        height="120"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#2563eb"
          fillOpacity="0.13"
          d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,117.3C960,128,1056,128,1152,117.3C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        ></path>
      </svg>
    </section>
  );
};

export default ContactPage;
