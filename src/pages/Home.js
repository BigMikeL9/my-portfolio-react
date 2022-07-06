import React from "react";

import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/AboutMe/AboutMe";
import ContactMe from "../components/ContactMe/ContactMe";

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <AboutMe />
      <ContactMe />
    </>
  );
};

export default Home;
