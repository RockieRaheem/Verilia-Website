import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { BiRocket, BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      title: "AI & Machine Learning",
      description: "Intelligent systems transforming industries",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable infrastructure for growing needs",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Software Development",
      description: "Building scalable solutions for complex problems",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Emerging Technologies",
      description: "Exploring blockchain, IoT, and quantum computing",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        color: "white",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Animated background elements */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233b82f6' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <Container className="position-relative z-1">
        <Row className="align-items-center g-5">
          {/* Left Column - Text Content */}
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="mb-4">
              <span className="badge bg-blue-500 bg-opacity-20 text-blue-300 px-3 py-2 fs-6">
                <BiRocket className="me-2" /> Innovating Since 2025
              </span>
            </div>

            <h1 className="display-3 fw-bold mb-4 text-white">
              <span className="text-blue-400">Technology Solutions</span>
              <br />
              For Tomorrow's Challenges
            </h1>

            <p className="lead text-blue-100 mb-5">
              At Verilia, we bring together brilliant minds from diverse
              disciplines to build transformative technology solutions. We're
              pioneering advancements across multiple domains to solve
              tomorrow's problems today.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <Button
                variant="primary"
                size="lg"
                className="px-4 py-3 fw-medium"
              >
                Explore Our Work
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                className="px-4 py-3 fw-medium"
              >
                Join Our Team
              </Button>
            </div>
          </Col>

          {/* Right Column - Image Slider */}
          <Col lg={6} className="ps-lg-5">
            <div
              className="position-relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                indicators={false}
                fade
              >
                {slides.map((slide, idx) => (
                  <Carousel.Item key={idx} interval={5000}>
                    <div className="position-relative rounded-4 overflow-hidden shadow-lg">
                      <img
                        className="d-block w-100"
                        src={slide.img}
                        alt={slide.title}
                        style={{ height: "500px", objectFit: "cover" }}
                      />
                      <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-dark bg-opacity-75">
                        <h3 className="text-white mb-1">{slide.title}</h3>
                        <p className="text-blue-200 mb-0">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>

              {/* Custom Controls */}
              <button
                className="position-absolute top-50 start-0 translate-middle-y bg-dark bg-opacity-50 text-white p-3 rounded-circle border-0"
                style={{ zIndex: 10, left: "10px" }}
                onClick={() =>
                  setIndex((index - 1 + slides.length) % slides.length)
                }
              >
                <BiLeftArrow size={24} />
              </button>

              <button
                className="position-absolute top-50 end-0 translate-middle-y bg-dark bg-opacity-50 text-white p-3 rounded-circle border-0"
                style={{ zIndex: 10, right: "10px" }}
                onClick={() => setIndex((index + 1) % slides.length)}
              >
                <BiRightArrow size={24} />
              </button>

              {/* Indicators */}
              <div className="d-flex justify-content-center mt-4">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`mx-1 p-0 border-0 bg-transparent`}
                    onClick={() => setIndex(idx)}
                  >
                    <div
                      className={`rounded-circle ${
                        index === idx ? "bg-primary" : "bg-white bg-opacity-25"
                      }`}
                      style={{ width: "10px", height: "10px" }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
