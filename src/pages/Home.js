import React from "react";
import { motion } from "framer-motion";

import Hero from "../components/Hero/Hero";
import Works from "../components/Works/Works";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

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
