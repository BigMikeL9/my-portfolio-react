import React from "react";

import { useNavigate } from "react-router-dom";

import { BackButtonContainer, BackButtonS } from "./Back.style";

const Back = () => {
  const navigate = useNavigate();

  const backButtonHandler = () => {
    navigate(-1, { replace: true });
  };

  return (
    <BackButtonContainer>
      <BackButtonS onClick={backButtonHandler}>Back</BackButtonS>
    </BackButtonContainer>
  );
};

export default Back;
