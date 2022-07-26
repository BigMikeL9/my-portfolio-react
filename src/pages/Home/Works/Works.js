import React from "react";

import { H2 } from "../../../styles/Typography.style";
import Divider from "../../../components/UI/Divider/Divider";
import { SectionInner } from "../../../layout/Section/Section.style";

import WorksList from "./WorksList/WorksList";

import { WorksSection } from "./Works.style";

const Works = () => {
  return (
    <WorksSection id="works">
      <SectionInner>
        <H2>Works</H2>
        <Divider />

        <WorksList />
      </SectionInner>
    </WorksSection>
  );
};

export default Works;
