import React from "react";

import { ControlS, LabelS, InputS } from "./Input.style";

const Input = (props) => {
  return (
    <ControlS isValid={props.isValid}>
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
    </ControlS>
  );
};

export default Input;
