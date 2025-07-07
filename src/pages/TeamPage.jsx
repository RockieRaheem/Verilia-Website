import React from "react";

const teamMembers = [
  {
    name: "Verilian 1",
    role: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Visionary leader passionate about innovation and people.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 2",
    role: "Lead Designer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Designing delightful digital experiences.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 3",
    role: "Lead Engineer",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Turning ideas into robust, scalable code.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 4",
    role: "Developer",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Creative, passionate, and always learning.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 5",
    role: "QA Engineer",
    img: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Ensuring quality in every line of code.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 6",
    role: "DevOps",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Automating and optimizing workflows.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 7",
    role: "Designer",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Bringing ideas to life through design.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 8",
    role: "Analyst",
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Turning data into actionable insights.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 9",
    role: "Developer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Building robust and scalable solutions.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 10",
    role: "QA Engineer",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Quality is my top priority.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 11",
    role: "DevOps",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Optimizing systems for performance.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 12",
    role: "Designer",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Designing with empathy and creativity.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 13",
    role: "Analyst",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Data-driven decision making.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 14",
    role: "Developer",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Coding with passion and precision.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 15",
    role: "QA Engineer",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Testing for perfection.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 16",
    role: "DevOps",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Streamlining deployment pipelines.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 17",
    role: "Designer",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Visual storytelling through design.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 18",
    role: "Analyst",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Making sense of complex data.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 19",
    role: "Developer",
    img: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Innovating with every line of code.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Verilian 20",
    role: "QA Engineer",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=facearea&w=400&h=400&facepad=2",
    bio: "Ensuring flawless user experiences.",
    socials: { linkedin: "#", twitter: "#" },
  },
];

const TeamHero = () => (
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
        Meet the <span style={{ color: "#fff176" }}>Verilia Team</span>
      </h1>
      <p className="lead mx-auto" style={{ maxWidth: 700, fontSize: "1.3rem" }}>
        20 creative minds, one vision: building the future of technology
        together. Get to know the people who make Verilia extraordinary!
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

const TeamGrid = () => (
  <section
    style={{
      background: "#f1f5f9",
      padding: "5rem 0 4rem 0",
      position: "relative",
    }}
  >
    <div className="container">
      <div className="row g-4 justify-content-center">
        {teamMembers.map((member, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              className="p-4 rounded-4 shadow-lg h-100 text-center team-card"
              style={{
                background: "#fff",
                minHeight: "320px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                border: "2px solid #e0e7ef",
                transition: "transform 0.3s, box-shadow 0.3s",
                willChange: "transform",
                cursor: "pointer",
              }}
              tabIndex={0}
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
                src={member.img}
                alt={member.name}
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
                {member.name}
              </h5>
              <div className="mb-2" style={{ color: "#64748b" }}>
                {member.role}
              </div>
              <p
                className="mb-2"
                style={{ color: "#334155", fontSize: "0.97rem" }}
              >
                {member.bio}
              </p>
              <div>
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2563eb", marginRight: 12 }}
                >
                  <i
                    className="bi bi-linkedin"
                    style={{ fontSize: "1.3rem" }}
                  ></i>
                </a>
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  <i
                    className="bi bi-twitter-x"
                    style={{ fontSize: "1.3rem" }}
                  ></i>
                </a>
              </div>
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
          Want to Join Our Team?
        </h2>
        <p className="lead mb-4" style={{ color: "#e0e7ef" }}>
          We’re always looking for passionate, creative people. Reach out and
          let’s build the future together!
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

const TeamPage = () => {
  return (
    <>
      <TeamHero />
      <TeamGrid />
      <GlassCTA />
    </>
  );
};

export default TeamPage;
