import React from "react";

const ServicesHero = () => (
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
        Our <span style={{ color: "#fff176" }}>Services</span>
      </h1>
      <p className="lead mx-auto" style={{ maxWidth: 700, fontSize: "1.3rem" }}>
        From AI-powered solutions to cloud transformation and custom software,
        Verilia delivers future-ready technology that drives real business
        results.
      </p>
    </div>

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

const services = [
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    desc: "Unlock insights and automate processes with custom AI models, chatbots, and intelligent analytics.",
    bg: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    desc: "Scale your business with secure, flexible cloud infrastructure, migration, and DevOps services.",
    bg: "linear-gradient(135deg, #a5b4fc 0%, #2563eb 100%)",
  },
  {
    icon: "🛠️",
    title: "Custom Software",
    desc: "From web apps to mobile, we build robust, scalable software tailored to your unique needs.",
    bg: "linear-gradient(135deg, #f472b6 0%, #2563eb 100%)",
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    desc: "Protect your data and reputation with next-gen security audits, monitoring, and defense.",
    bg: "linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)",
  },
  {
    icon: "🌐",
    title: "Digital Transformation",
    desc: "Reimagine your business with automation, process redesign, and digital-first strategies.",
    bg: "linear-gradient(135deg, #fbbf24 0%, #2563eb 100%)",
  },
  {
    icon: "🚀",
    title: "Tech Consulting",
    desc: "Get expert guidance on tech strategy, architecture, and innovation for your next big leap.",
    bg: "linear-gradient(135deg, #34d399 0%, #2563eb 100%)",
  },
];

const ServicesGrid = () => (
  <section
    style={{
      background: "#f1f5f9",
      padding: "5rem 0 4rem 0",
      position: "relative",
    }}
  >
    <div className="container">
      <div className="row g-4 justify-content-center">
        {services.map((service, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4">
            <div
              className="p-4 rounded-4 shadow-lg h-100"
              style={{
                background: service.bg,
                color: "#fff",
                minHeight: "240px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                transition: "transform 0.3s, box-shadow 0.3s",
                willChange: "transform",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px) scale(1.04)";
                e.currentTarget.style.boxShadow =
                  "0 16px 32px rgba(37,99,235,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div style={{ fontSize: "2.7rem", marginBottom: "1rem" }}>
                {service.icon}
              </div>
              <h5 className="fw-bold mb-2">{service.title}</h5>
              <p className="mb-0" style={{ color: "#f1f5f9" }}>
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

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
          Ready to Transform Your Business?
        </h2>
        <p className="lead mb-4" style={{ color: "#e0e7ef" }}>
          Let’s talk about how Verilia can help you innovate, grow, and succeed
          with technology.
        </p>
        <a
          href="/contact"
          className="btn btn-light btn-lg px-5 py-3 fw-bold shadow"
          style={{ fontSize: "1.2rem", borderRadius: "2rem", color: "#2563eb" }}
        >
          Get Started
        </a>
      </div>
    </div>

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

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <GlassCTA />
    </>
  );
};

export default ServicesPage;
