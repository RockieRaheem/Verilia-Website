# Verilia Website

A modern, visually engaging website for Verilia, built with **React**, **Vite**, and **Bootstrap 5**. This project showcases Verilia’s services, team, and vision with interactive, animated, and responsive UI components.

---

## 🚀 Features

- **React + Vite**: Fast development and build tooling.
- **Bootstrap 5**: Responsive layout and components.
- **React Router**: Client-side routing for a multi-page SPA feel.
- **Interactive UI**: Animated hero, carousels, counters, and hover effects.
- **Glassmorphism & Gradients**: Modern design trends throughout.
- **Fully Responsive**: Looks great on all devices.
- **Easy Customization**: Modular components and clear structure.

---

## 📁 Project Structure

```
src/
  assets/           # Images and static assets
  components/       # Reusable UI components (Navbar, Hero, Footer, etc.)
  pages/            # Main pages (Home, About, Services, Team, Contact)
  App.jsx           # Main app component with routing
  index.jsx         # Entry point
  index.css         # Global styles
public/
  vite.svg          # Favicon
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/verilia-website.git
   cd verilia-website
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:5173
   ```

---

## 🏗️ Building for Production

To build the optimized production version:

```sh
npm run build
# or
yarn build
```

The output will be in the `dist/` directory.

---

## 🧪 Linting

To check code quality and lint errors:

```sh
npm run lint
# or
yarn lint
```

---

## 📦 Deployment

This project is ready for deployment on [Vercel](https://vercel.com/) or any static hosting provider. See [`vercel.json`](vercel.json) for configuration.

---

## ✨ Customization

- **Branding:** Replace images in `src/assets/images/` and update text in components/pages.
- **Colors & Styles:** Edit `src/index.css` and component styles.
- **Navigation:** Update routes and links in `src/components/Navbar.jsx` and `src/App.jsx`.

---

## 🤝 Contributing

Pull requests and suggestions are welcome! Please open an issue or submit a PR.

---

## 📄 License

This project is for demonstration and educational purposes. For commercial use, please contact the author.

---

import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/verilialogo.jpg";
import "../styles/Navigation.css"; // Import the CSS file for navbar styles

const Navigation = () => {
const [expanded, setExpanded] = useState(false);
const [logoHovered, setLogoHovered] = useState(false);
const location = useLocation();

const closeNavbar = () => setExpanded(false);

const navLinks = [
{ to: "/", label: "Home" },
{ to: "/about", label: "About" },
{ to: "/services", label: "Services" },
{ to: "/team", label: "Team" },
{ to: "/contact", label: "Contact" },
];

return (
<Navbar
expand="lg"
fixed="top"
expanded={expanded}
className="verilia-navbar"
style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        border: "1.5px solid #e0e7ef",
        borderRadius: "1.5rem",
        margin: "1rem auto",
        maxWidth: "1200px",
        boxShadow: "0 8px 32px rgba(37,99,235,0.10)",
        transition: "box-shadow 0.3s, background 0.3s",
        zIndex: 1000,
      }} >
<Container>
<Link to="/" className="navbar-brand" onClick={closeNavbar}>
<div
className="d-flex align-items-center"
onMouseEnter={() => setLogoHovered(true)}
onMouseLeave={() => setLogoHovered(false)}
style={{ cursor: "pointer", userSelect: "none" }} >
<img
src={logo}
alt="Verilia Logo"
style={{
                height: "44px",
                marginRight: "16px",
                borderRadius: "50%",
                boxShadow: logoHovered
                  ? "0 4px 16px rgba(37,99,235,0.18)"
                  : "0 2px 8px rgba(37,99,235,0.10)",
                transform: logoHovered
                  ? "scale(1.08) rotate(-6deg)"
                  : "scale(1)",
                transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                border: logoHovered ? "2px solid #2563eb" : "2px solid #fff",
                background: "#fff",
              }}
/>
<span
className="text-primary fw-bold"
style={{
                fontSize: "2rem",
                letterSpacing: "2px",
                marginBottom: "0",
                paddingTop: "2px",
                textShadow: logoHovered
                  ? "0 2px 8px #60a5fa"
                  : "0 1px 2px #e0e7ef",
                transition: "text-shadow 0.3s",
              }} >
VERILIA
</span>
</div>
</Link>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
          style={{
            border: "none",
            background: "rgba(96,165,250,0.08)",
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(37,99,235,0.10)",
          }}
        >
          <BiMenu size={28} color="#2563eb" />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link verilia-nav-link ${
                  location.pathname === link.to ? "active" : ""
                }`}
                onClick={closeNavbar}
                style={{
                  position: "relative",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: location.pathname === link.to ? "#2563eb" : "#334155",
                  padding: "0.5rem 1.1rem",
                  borderRadius: "1.2rem",
                  transition: "color 0.2s, background 0.2s",
                  background:
                    location.pathname === link.to
                      ? "linear-gradient(90deg, #2563eb11 0%, #60a5fa11 100%)"
                      : "transparent",
                  overflow: "hidden",
                }}
              >
                {link.label}
                <span
                  className="verilia-underline"
                  style={{
                    display: "block",
                    height: "3px",
                    borderRadius: "2px",
                    background:
                      location.pathname === link.to
                        ? "linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)"
                        : "transparent",
                    width: location.pathname === link.to ? "100%" : "0%",
                    transition: "width 0.3s cubic-bezier(.4,2,.6,1)",
                    marginTop: "4px",
                  }}
                />
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

);
};

export default Navigation;

## 🙏 Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Unsplash & Pixabay for demo images

---

## 📬 Contact

For questions or collaboration, reach out at [verilia@gmail.com](mailto:verilia@gmail.com).
