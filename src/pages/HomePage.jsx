// src/pages/HomePage.jsx
import React from "react";
import Hero from "../components/Hero";

// Decorative Feature Section 1: Animated Stats
const StatsSection = () => {
  React.useEffect(() => {
    const animateCounters = () => {
      document.querySelectorAll(".counter").forEach((el) => {
        const target = +el.getAttribute("data-target");
        let count = 0;
        const increment = Math.ceil(target / 60);
        const update = () => {
          count += increment;
          if (count > target) count = target;
          el.textContent = count;
          if (count < target) requestAnimationFrame(update);
        };
        update();
      });
    };
    window.addEventListener("scroll", animateCounters, { once: true });
    return () => window.removeEventListener("scroll", animateCounters);
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(90deg, #2563eb 0%, #1e293b 100%)",
        color: "white",
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4" style={{ letterSpacing: "1px" }}>
          <span style={{ color: "#60a5fa" }}>Verilia</span> in Numbers
        </h2>
        <div className="row justify-content-center g-5">
          <div className="col-6 col-md-3">
            <div className="fs-1 fw-bold" style={{ color: "#fff" }}>
              <span className="counter" data-target="50">
                0
              </span>
              +
            </div>
            <div className="fs-5 text-blue-200">Projects Delivered</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="fs-1 fw-bold" style={{ color: "#fff" }}>
              <span className="counter" data-target="20">
                0
              </span>
              +
            </div>
            <div className="fs-5 text-blue-200">Industries Served</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="fs-1 fw-bold" style={{ color: "#fff" }}>
              <span className="counter" data-target="100">
                0
              </span>
              %
            </div>
            <div className="fs-5 text-blue-200">Client Satisfaction</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="fs-1 fw-bold" style={{ color: "#fff" }}>
              <span className="counter" data-target="10">
                0
              </span>
              +
            </div>
            <div className="fs-5 text-blue-200">Awards Won</div>
          </div>
        </div>
      </div>
      {/* Decorative SVG */}
      <svg
        style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}
        height="80"
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,69.3C672,64,768,96,864,117.3C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"
        ></path>
      </svg>
    </section>
  );
};

// Decorative Feature Section 2: Parallax Showcase
const ParallaxShowcase = () => (
  <section
    style={{
      background:
        "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80') center/cover fixed",
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    }}
  >
    <div
      style={{
        background: "rgba(30,41,59,0.75)",
        borderRadius: "2rem",
        padding: "3rem 2rem",
        maxWidth: "700px",
        textAlign: "center",
        color: "#fff",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      }}
    >
      <h2 className="display-6 fw-bold mb-3" style={{ color: "#60a5fa" }}>
        Experience the Future
      </h2>
      <p className="lead mb-4">
        Our solutions blend <span style={{ color: "#93c5fd" }}>AI</span>,{" "}
        <span style={{ color: "#93c5fd" }}>Cloud</span>, and{" "}
        <span style={{ color: "#93c5fd" }}>Emerging Tech</span> to create
        seamless digital experiences.
      </p>
      <a
        href="#contact"
        className="btn btn-primary btn-lg px-5 py-3 fw-bold shadow"
        style={{ fontSize: "1.2rem", borderRadius: "2rem" }}
      >
        Get Started
      </a>
    </div>
  </section>
);

// Decorative Feature Section 3: Animated Testimonials Carousel
const testimonials = [
  {
    quote:
      "Verilia transformed our business with their innovative AI solutions. Their team is truly world-class!",
    name: "Verilian L.",
    company: "Elith Pharmacy",
    img: "https://media.istockphoto.com/id/2173327283/photo/happy-son-hugging-his-mom-during-a-family-breakfast-in-a-brazilian-home.jpg?s=612x612&w=is&k=20&c=UEB5CIFW4h2wRH_xt04dhkBEitdRRJ_aJodRNpHPhFY=",
  },
  {
    quote:
      "The cloud migration was seamless and efficient. We saw immediate improvements in performance.",
    name: "Verilian M.",
    company: "Verilia Website",
    img: "https://cdn.pixabay.com/photo/2021/01/04/07/33/man-5886719_640.jpg",
  },
  {
    quote:
      "Their creativity and technical expertise are unmatched. Highly recommended for any tech project.",
    name: "Verilian L.",
    company: "FinTech",
    img: "https://cdn.pixabay.com/photo/2018/03/18/21/09/people-3238357_640.jpg",
  },
];

const TestimonialsCarousel = () => {
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(
      () => setIdx((i) => (i + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f1f5f9 0%, #e0e7ef 100%)",
        padding: "5rem 0",
      }}
    >
      <div className="container">
        <h2
          className="display-6 fw-bold text-center mb-5"
          style={{ color: "#2563eb" }}
        >
          What Our Clients Say
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div
              className="p-5 rounded-4 shadow text-center position-relative"
              style={{
                background: "#fff",
                minHeight: "320px",
                transition: "box-shadow 0.3s",
              }}
            >
              <img
                src={testimonials[idx].img}
                alt={testimonials[idx].name}
                className="rounded-circle mb-3"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  border: "4px solid #2563eb",
                  boxShadow: "0 4px 16px rgba(37,99,235,0.15)",
                }}
              />
              <blockquote className="blockquote mb-4">
                <p className="mb-0 fs-4" style={{ color: "#334155" }}>
                  “{testimonials[idx].quote}”
                </p>
              </blockquote>
              <footer className="blockquote-footer">
                <span className="fw-bold">{testimonials[idx].name}</span>,{" "}
                {testimonials[idx].company}
              </footer>
              {/* Carousel Controls */}
              <div className="d-flex justify-content-center gap-2 mt-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`rounded-circle border-0 ${
                      i === idx ? "bg-primary" : "bg-secondary bg-opacity-25"
                    }`}
                    style={{ width: "12px", height: "12px" }}
                    onClick={() => setIdx(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Decorative Feature Section 4: Call to Action with Glassmorphism
const GlassCTA = () => (
  <section
    style={{
      background: "linear-gradient(120deg, #2563eb 0%, #60a5fa 100%)",
      padding: "5rem 0",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div className="container text-center">
      <div
        className="mx-auto p-5 rounded-4 shadow-lg"
        style={{
          maxWidth: "600px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          border: "1.5px solid #fff3",
        }}
      >
        <h2 className="display-6 fw-bold mb-3" style={{ color: "#fff" }}>
          Ready to Elevate Your Business?
        </h2>
        <p className="lead mb-4" style={{ color: "#e0e7ef" }}>
          Let’s build something extraordinary together. Reach out to our experts
          and start your journey with Verilia today.
        </p>
        <a
          href="#contact"
          className="btn btn-light btn-lg px-5 py-3 fw-bold shadow"
          style={{ fontSize: "1.2rem", borderRadius: "2rem", color: "#2563eb" }}
        >
          Contact Us
        </a>
      </div>
    </div>
    {/* Decorative SVG */}
    <svg
      style={{ position: "absolute", top: 0, right: 0, width: "100%" }}
      height="80"
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#fff"
        fillOpacity="0.15"
        d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,69.3C672,64,768,96,864,117.3C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"
      ></path>
    </svg>
  </section>
);

const HomePage = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <ParallaxShowcase />
      <TestimonialsCarousel />
      <GlassCTA />
    </>
  );
};

export default HomePage;
