import React from "react";
import NavbarItem from "./NavbarItem";
import { v4 as uuidv4 } from "uuid";

const NavbarDropDown = (props) => {
  return (
    <>
      <div className="navbarDropDown">
        <div
          className="navbarDropDown-container"
    
        >
          {props.routes.map((element) => (
            <NavbarItem
              key={uuidv4()}
              icon={element.icon}
              text={element.text}
              to={element.to}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NavbarDropDown;
