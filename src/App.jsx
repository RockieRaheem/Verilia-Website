import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Team />
    </>
  );
}

export default App;
