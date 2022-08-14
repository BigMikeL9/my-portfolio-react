import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet prioritizeSeoTags>
        <title>Mikel Kamel</title>
        <meta
          name="description"
          content="Portfolio of Mikel Kamel. A Front-End Web-Developer."
        />

        <meta property="og:title" content="Mikel Kamel" />

        <meta
          property="og:description"
          content="Portfolio of Mikel Kamel. A Front-End Web-Developer."
        />
        <meta property="og:url" content="https://mikelkamel.com/" />
        <meta property="og:type" content="profile:mikel " />
      </Helmet>

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
    </>
  );
};

export default Home;
