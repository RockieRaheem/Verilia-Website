// src/pages/HomePage.jsx
import React from "react";
import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import TeamPreview from "../components/TeamPreview";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <TeamPreview />
    </>
  );
};

export default HomePage;
