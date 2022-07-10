import React from "react";

import Hero from "../components/Hero/Hero";
import Works from "../components/Works/Works";
import AboutMe from "../components/AboutMe/AboutMe";
import ContactMe from "../components/ContactMe/ContactMe";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Works />
      <AboutMe />
      <ContactMe />
    </>
  );
};

export default HomePage;
