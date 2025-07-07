// src/pages/AboutPage.jsx
import React from "react";

// Hero About Section
const AboutHero = () => (
  <section
    style={{
      background: "linear-gradient(120deg, #2563eb 0%, #60a5fa 100%)",
      color: "#fff",
      padding: "7rem 0 5rem 0",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div className="container text-center">
      <h1 className="display-2 fw-bold mb-3" style={{ letterSpacing: "2px" }}>
        Meet <span style={{ color: "#fff176" }}>Verilia</span>
      </h1>
      <p className="lead mx-auto" style={{ maxWidth: 700, fontSize: "1.4rem" }}>
        We are a new breed of tech creators—fearless, inventive, and passionate
        about building the future. At Verilia, we believe technology should feel
        magical, human, and empowering.
      </p>
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
        fillOpacity="0.18"
        d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,69.3C672,64,768,96,864,117.3C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"
      ></path>
    </svg>
  </section>
);

// Decorative Feature: Animated "Why Choose Us" Cards
const WhyChooseUs = () => (
  <section
    style={{
      background: "#f1f5f9",
      padding: "5rem 0 4rem 0",
      position: "relative",
    }}
  >
    <div className="container">
      <h2
        className="display-6 fw-bold text-center mb-5"
        style={{ color: "#2563eb" }}
      >
        Why <span style={{ color: "#60a5fa" }}>Choose Verilia?</span>
      </h2>
      <div className="row g-4 justify-content-center">
        {[
          {
            icon: "✨",
            title: "Fresh Perspective",
            desc: "We bring bold, original thinking to every project—no copy-paste solutions.",
          },
          {
            icon: "🤖",
            title: "Tech Wizards",
            desc: "From AI to cloud, we turn complex tech into simple, delightful experiences.",
          },
          {
            icon: "💬",
            title: "Human Touch",
            desc: "We listen, we care, and we build lasting partnerships with every client.",
          },
          {
            icon: "⚡",
            title: "Agile & Fast",
            desc: "We move quickly, adapt easily, and deliver results that wow.",
          },
        ].map((item, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-3">
            <div
              className="p-4 rounded-4 shadow-lg h-100"
              style={{
                background: "#fff",
                minHeight: "220px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #e0e7ef",
                transition: "transform 0.3s, box-shadow 0.3s",
                willChange: "transform",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px) scale(1.04)";
                e.currentTarget.style.boxShadow =
                  "0 16px 32px rgba(37,99,235,0.13)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                {item.icon}
              </div>
              <h5 className="fw-bold mb-2" style={{ color: "#2563eb" }}>
                {item.title}
              </h5>
              <p className="mb-0" style={{ color: "#334155" }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Decorative Feature: Glassmorphism Call to Action
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
          Let’s Build Something{" "}
          <span style={{ color: "#fff176" }}>Amazing</span>
        </h2>
        <p className="lead mb-4" style={{ color: "#e0e7ef" }}>
          Whether you’re a startup or an enterprise, we’re ready to help you
          shape the future. Let’s connect and create something extraordinary
          together.
        </p>
        <a
          href="/contact"
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

// Decorative Feature: Animated "Meet Verilia" Avatars
const MeetVerilia = () => (
  <section
    style={{
      background: "#fff",
      padding: "5rem 0 4rem 0",
      position: "relative",
    }}
  >
    <div className="container text-center">
      <h2 className="display-6 fw-bold mb-5" style={{ color: "#2563eb" }}>
        The <span style={{ color: "#60a5fa" }}>People</span> Behind Verilia
      </h2>
      <div className="row g-4 justify-content-center">
        {[
          {
            name: "Verilian",
            role: "Founder & Visionary",
            img: "https://cdn.pixabay.com/photo/2023/02/06/01/29/man-7770930_640.jpg",
            quote: "I believe in building tech that feels like magic.",
          },
          {
            name: "Verilian",
            role: "Lead Engineer",
            img: "https://cdn.pixabay.com/photo/2020/05/30/03/15/girl-5237508_640.jpg",
            quote: "Turning ideas into reality is my superpower.",
          },
          {
            name: "Verilian",
            role: "Creative Designer",
            img: "https://cdn.pixabay.com/photo/2023/06/21/06/12/man-8078578_640.jpg",
            quote: "Design is intelligence made visible.",
          },
        ].map((person, i) => (
          <div key={i} className="col-12 col-md-4">
            <div
              className="p-4 rounded-4 shadow-lg h-100"
              style={{
                background: "#f1f5f9",
                minHeight: "260px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #e0e7ef",
                transition: "transform 0.3s, box-shadow 0.3s",
                willChange: "transform",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px) scale(1.04)";
                e.currentTarget.style.boxShadow =
                  "0 16px 32px rgba(37,99,235,0.13)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <img
                src={person.img}
                alt={person.name}
                className="rounded-circle mb-3"
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "cover",
                  border: "4px solid #2563eb",
                  boxShadow: "0 4px 16px rgba(37,99,235,0.10)",
                }}
              />
              <h5 className="fw-bold mb-1" style={{ color: "#2563eb" }}>
                {person.name}
              </h5>
              <div className="mb-2" style={{ color: "#64748b" }}>
                {person.role}
              </div>
              <p className="fst-italic mb-0" style={{ color: "#334155" }}>
                "{person.quote}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <WhyChooseUs />
      <MeetVerilia />
      <GlassCTA />
    </>
  );
};

export default AboutPage;
