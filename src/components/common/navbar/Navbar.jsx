import React from "react";
import {
  accounts,
  bell,
  investment,
  logo,
  mail,
  news,
  profile,
  stock,
} from "../../../assets/user/navbar";

import NavbarItem from "./NavbarItem";
import { Container } from "../../features";
import { Link } from "react-router-dom";
import { navbarRoutes } from "../../../data/routes";

// UUID for Random Ids

import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  // Handle hover

  return (
    <>
      <Container className="main">
        <Container className="margins">
          <div className="navbar">
            <div className="navbar-container">
              <div className="navbar-container-logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="navbar-container-menus">
                {navbarRoutes.map((element) => (
                  <NavbarItem
                    key={uuidv4()}
                    icon={element.icon}
                    text={element.text}
                    to={element.to}
                    moreRoutes={element.subRoutes}
                  />
                ))}
              </div>
              <div className="navbar-container-profile">
                <img src={bell} alt="icon" />
                <img src={mail} alt="icon" />
                <Link to="/account/step1">
                  <img   src={profile} alt="icon" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Navbar;
