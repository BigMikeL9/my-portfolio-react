import React from "react";

import { MainS } from "./Main.style";

const Main = (props) => {
  return (
    <>
      <MainS>{props.children}</MainS>
    </>
  );
};

export default Main;
