import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { H1 } from "../styles/Typography.style";
import { CurtainPage } from "../components/Curtain/Curtain.style";

const WorkDetail = () => {
  const params = useParams();

  return (
    <>
      <H1>Work Detail page</H1>

      <p>{params.workId}</p>
    </>
  );
};

export default WorkDetail;
