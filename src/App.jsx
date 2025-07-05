import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Solutions from "./components/Solutions";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Solutions />
    </>
  );
}

export default App;
