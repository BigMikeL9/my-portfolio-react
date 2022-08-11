import React from "react";

import { BackButtonContainer, BackButtonS } from "./Back.style";

const Back = (props) => {
  return (
    <BackButtonContainer>
      <BackButtonS to="/" currentWorkId={props.currentWorkId}>
        Back
      </BackButtonS>
    </BackButtonContainer>
  );
};

export default Back;
