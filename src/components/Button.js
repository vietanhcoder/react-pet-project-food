import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.handleClick}
      className={`btn ${props.bgColor} ${props.newAttributes}`}
    >
      {props.nameBtn}
    </button>
  );
};

export default Button;
