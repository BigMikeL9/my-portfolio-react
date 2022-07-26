import React from "react";

import { DescriptionSection } from "./Content.style";
import Info from "../Info/Info";
import Details from "../Details/Details";

const Content = (props) => {
  return (
    <DescriptionSection>
      <Info currentWork={props.currentWork} />
      <Details workDetails={props.workDetails} />
    </DescriptionSection>
  );
};

export default Content;
