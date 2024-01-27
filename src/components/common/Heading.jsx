import React from "react";

const Heading = (props) => {
  return (
    <div className={`heading_${props.className}`}>
      {props.icon && <img src={props.iconPath} alt="icon" />}
      <h1>{props.children} </h1>
    </div>
  );
};

export default Heading;
