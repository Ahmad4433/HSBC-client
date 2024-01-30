import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarDropDown from "./NavbarDropDown";

const NavbarItem = (props) => {
  const [subRoutes, setSubRoutes] = useState();

  function handleMouseEnter() {
    setSubRoutes([...props.moreRoutes]);
    console.log(subRoutes);
  }
  function handleMouseLeave() {
    setSubRoutes([]);
    console.log(subRoutes);
  }
  return (
    <>
      <div
        className="navitem"
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <div>
          <Link to={props.to}>
            {<props.icon />}
            <p>{props.text}</p>
          </Link>

          {subRoutes && (
            <NavbarDropDown mouseEnter={handleMouseEnter} routes={subRoutes} />
          )}
        </div>
      </div>
    </>
  );
};

export default NavbarItem;
