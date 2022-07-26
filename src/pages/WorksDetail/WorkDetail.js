import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import worksData from "../../data/worksData";

import { CurtainPage } from "../../components/Curtain/Curtain.style";

import Hero from "./Hero/Hero";
import Content from "./Content/Content";
import Back from "./Back/Back";

const WorkDetail = (props) => {
  const params = useParams();

  // --------------------------------------------------------------
  // -- Scroll to top of page as Work detail page mounts.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
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
      <Hero
        currentWork={currentWork}
        onDetailPageHeroExitView={props.onDetailPageHeroExitView}
      />

      <Content currentWork={currentWork} workDetails={workDetails} />

      <Back />
    </>
  );
};

export default WorkDetail;
