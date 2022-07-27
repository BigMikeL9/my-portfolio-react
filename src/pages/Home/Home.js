import React, { useEffect } from "react";
import { motion, useIsPresent } from "framer-motion";

import Hero from "./Hero/Hero";
import Works from "./Works/Works";
import About from "./About/About";
import Contact from "./Contact/Contact";

const transition = {
  duration: 0.6,
  delay: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const Home = (props) => {
  const isPresent = useIsPresent();

  const { onPageTransition } = props;

  // 'isPresent' equal to 'false' -> if page is about to unmount
  useEffect(() => {
    onPageTransition(isPresent);
  }, [onPageTransition, isPresent]);

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
      <Hero />
      <Works />
      <About />
      <Contact />
    </motion.div>
  );
};

export default Home;
