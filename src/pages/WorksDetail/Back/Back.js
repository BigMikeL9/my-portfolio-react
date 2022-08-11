import React, { useEffect } from "react";

import { BackButtonContainer, BackButtonS } from "./Back.style";

const Back = (props) => {
  const { currentWorkId } = props;

  let runLater;

  console.log(runLater);

  // TODO: need to take another look at 'clearTimout()' after component is unmounted.

  useEffect(() => {
    return () => {
      clearTimeout(runLater);
    };
  }, [runLater]);

  const backButtonHandler = () => {
    runLater = setTimeout(() => {
      let scrollDiv =
        document.getElementById(`${currentWorkId}`).offsetTop - 100;
      window.scrollTo({ top: scrollDiv, behavior: "instant" });
    }, 1200);
  };

  return (
    <BackButtonContainer>
      <BackButtonS to="/" onClick={backButtonHandler}>
        Back
      </BackButtonS>
    </BackButtonContainer>
  );
};

export default Back;
