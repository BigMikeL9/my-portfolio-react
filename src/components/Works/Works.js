import React from "react";

import { H2 } from "../../styles/Typography.style";
import Divider from "../UI/Divider/Divider";
import { WorksSection } from "./Works.style";

import WorksList from "./WorksList/WorksList";

const Works = () => {
  return (
    <WorksSection id="works">
      <H2>Works</H2>
      <Divider />

      <WorksList />
    </WorksSection>
  );
};

export default Works;
