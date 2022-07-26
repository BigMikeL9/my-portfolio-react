import React from "react";
import { motion } from "framer-motion";

import Hero from "./Hero/Hero";
import Works from "./Works/Works";
import About from "./About/About";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Works />
      <About />
      <Contact />
    </>
  );
};

export default Home;
