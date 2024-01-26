import React from "react";

const NavbarItem = (props) => {
  return (
    <>
      <div className="navitem">
        <img src={props.icon} alt="icon" />
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default NavbarItem;
