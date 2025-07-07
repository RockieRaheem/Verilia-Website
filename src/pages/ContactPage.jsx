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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-6 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h2 className="text-primary">Contact Us</h2>
            <div className="underline mx-auto"></div>
            <p className="lead mt-4">
              Have questions or want to collaborate? Reach out to our team
            </p>
          </Col>
        </Row>

        <Row className="g-5">
          <Col lg={6}>
            <div className="bg-white p-5 rounded-4 shadow-sm h-100">
              <h3 className="mb-4">Get in Touch</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
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
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 py-3">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

          <Col lg={6}>
            <div className="bg-white p-5 rounded-4 shadow-sm h-100">
              <h3 className="mb-4">Our Information</h3>

              <div className="mb-5">
                <h4 className="mb-3">Office Location</h4>
                <div className="d-flex align-items-start mb-3">
                  <BiMap className="text-primary mt-1 me-3" size={24} />
                  <div>
                    <p className="mb-0">Verilia</p>
                    <p className="mb-0">Kampala, Uganda</p>
                  </div>
                </div>

                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.99937386352!2d32.52801029999999!3d0.3475964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0a30c7e2db%3A0x7d4b0f86a3c0d3b6!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1718032198482!5m2!1sen!2sus"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="mb-3">Contact Details</h4>
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
                <h4 className="mb-3">Business Hours</h4>
                <p className="mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="mb-0">Saturday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
