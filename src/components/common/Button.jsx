import React from "react";

const Button = (props) => {
  return (
    <div className={`button button_${props.className}`}>
      <button {...props}>{props.children}</button>
    </div>
  );
};

export default Button;
