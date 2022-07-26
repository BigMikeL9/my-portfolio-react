import React from "react";
import ReactDOM from "react-dom";

import { CurtainS, TypeWriterText } from "./Curtain.style";

const CurtainComp = (props) => {
  console.log(props);
  return (
    <CurtainS {...props}>
      {props.main && (
        <>
          <TypeWriterText>Hello, my name is Mikel.</TypeWriterText>
        </>
      )}
    </CurtainS>
  );
};

const Curtain = (props) => {
  console.log(props);

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
