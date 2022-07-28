import React from "react";

import { LabelS, InputS } from "./Input.style";

const Input = (props) => {
  return (
    <>
      <InputS
        id={props.id}
        name={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        isValid={props.isValid}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      <LabelS htmlFor={props.id} />
    </>
  );
};

export default Input;