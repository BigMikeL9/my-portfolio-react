import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { H1 } from "../styles/Typography.style";
import { CurtainPage } from "../components/Curtain/Curtain.style";
import { GridLayoutS } from "../layout/GridLayout/GridLayout.style";

const WorkDetail = () => {
  const params = useParams();

  return (
    <GridLayoutS
      initial={{ x: "100vw" }}
      animate={{ x: "0" }}
      exit={{ x: "0", delay: 2 }}
      transition={{ ease: [0.65, 0, 0.35, 1], duration: 1 }}
    >
      <CurtainPage />
      <H1>Work Detail page</H1>

      <p>{params.workId}</p>
    </GridLayoutS>
  );
};

export default WorkDetail;
