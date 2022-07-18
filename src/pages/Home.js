import React from "react";
import { motion } from "framer-motion";

import { CurtainPage } from "../components/Curtain/Curtain.style";
import Hero from "../components/Hero/Hero";
import Works from "../components/Works/Works";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import { GridLayoutS } from "../layout/GridLayout/GridLayout.style";

const Home = () => {
  return (
    <GridLayoutS
      initial={{ opacity: "0" }}
      animate={{ opacity: "1" }}
      exit={{ opacity: "0", delay: 2 }}
      transition={{ ease: [0.65, 0, 0.35, 1], duration: 1 }}
    >
      <CurtainPage />
      <Hero />
      <Works />
      <About />
      <Contact />
    </GridLayoutS>
  );
};

export default Home;
