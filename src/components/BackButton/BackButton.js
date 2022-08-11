import React, { useEffect } from "react";

import { Link } from "react-router-dom";

const BackButton = (props) => {
  let runLater;

  // TODO: need to take another look at 'clearTimout()' after component is unmounted.

  useEffect(() => {
    return () => {
      clearTimeout(runLater);
    };
  }, [runLater]);

  const backButtonHandler = () => {
    runLater = setTimeout(() => {
      let scrollDiv =
        document.getElementById(`${props.currentWorkId}`).offsetTop - 100;
      window.scrollTo({ top: scrollDiv, behavior: "instant" });
    }, 1200);
  };

  return (
    <Link className={props.className} to={props.to} onClick={backButtonHandler}>
      {props.children}
    </Link>
  );
};

export default BackButton;
