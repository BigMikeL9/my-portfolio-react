import React from "react";
import ReactDOM from "react-dom";

import {
  CurtainMainContainer,
  CurtainS,
  TypeWriterText,
} from "./Curtain.style";
import BongoCat from "../BongoCat/BongoCat";

const CurtainComp = (props) => {
  // console.log(props);

  return (
    <CurtainS {...props}>
      {props.main && (
        <CurtainMainContainer>
          <TypeWriterText>Hello, Stranger.</TypeWriterText>
          <BongoCat />
        </CurtainMainContainer>
      )}
    </CurtainS>
  );
};

const Curtain = (props) => {
  // console.log(props);

  return (
    <>
      {ReactDOM.createPortal(
        <CurtainComp {...props} />,
        document.getElementById("curtain-root")
      )}
    </>
  );
};

export default Curtain;
