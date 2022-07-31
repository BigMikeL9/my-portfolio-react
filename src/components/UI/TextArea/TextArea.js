import React from "react";

import { ControlS, LabelS, TextAreaS } from "./TextArea.style";

const TextArea = (props) => {
  return (
    <ControlS isValid={props.isValid}>
      <TextAreaS
        id={props.id}
        name={props.id}
        placeholder={props.placeholder}
        rows={props.rows}
        cols={props.cols}
        value={props.value}
        isValid={props.isValid}
        onChange={props.onChange}
        onBlur={props.onBlur}
      >
        {props.value}
      </TextAreaS>

      <LabelS htmlFor={props.id} />
    </ControlS>
  );
};

export default TextArea;
