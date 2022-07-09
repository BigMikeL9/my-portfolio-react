import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={props.className}
      aria-label={props["aria-label"]}
    >
      {props.children}
    </button>
  );
};

export default Button;
