import React from "react";
import { Link } from "react-router-dom";

const LinkBtn = (props) => {
  return (
    <>
      <div className={`link link_${props.className}`}>
        <Link to={`${props.to}`} id={props.id}>
          {props.icon && <img src={props.iconPath} alt="icon" />}
          {props.children}
        </Link>
      </div>
    </>
  );
};

export default LinkBtn;
