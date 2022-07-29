import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useIsPresent } from "framer-motion";

import worksData from "../../data/worksData";

import Hero from "./Hero/Hero";
import Content from "./Content/Content";
import Back from "./Back/Back";

const transition = {
  duration: 0.6,
  delay: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const WorkDetail = (props) => {
  const location = useLocation();
  const params = useParams();
  const isPresent = useIsPresent();

  const { onPageTransition } = props;

  // 'isPresent' equal to 'false' -> if page is about to unmount
  useEffect(() => {
    onPageTransition(isPresent);
  }, [onPageTransition, isPresent]);

  // --------------------------------------------------------------
  // -- Scroll to top of page as Work detail page mounts.
  useEffect(() => {
    const runLater = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, 1000);

    return () => {
      clearTimeout(runLater);
    };
  }, []);
  // --------------------------------------------------------------

  // --------------------------------------------------------------
  // -- Find current work object
  const currentWork = worksData.find(
    (currentWork) => currentWork.id === params.workId
  );

  const workDetails = Object.entries(currentWork.details).map((detail) => {
    return {
      id: currentWork.title,
      title: detail[0],
      content: detail[1],
      image: currentWork.images[detail[0]],
    };
  });
  // --------------------------------------------------------------

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{`Mikel Kamel |  ${currentWork.title}`}</title>
        <meta name="description" content={`${currentWork.overview}`} />

        <meta property="og:title" content={`${currentWork.title}`} />
        <meta property="og:type" content={`${currentWork.type}`} />
        <meta
          property="og:url"
          content={`https://mikelkamel.com${location.pathname}`}
        />
        <meta property="og:description" content={`${currentWork.overview}`} />
      </Helmet>

      <motion.div
        key="detail"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
      >
        <Hero
          currentWork={currentWork}
          onDetailPageHeroExitView={props.onDetailPageHeroExitView}
        />

        <Content currentWork={currentWork} workDetails={workDetails} />

        <Back />
      </motion.div>
    </>
  );
};

export default WorkDetail;
