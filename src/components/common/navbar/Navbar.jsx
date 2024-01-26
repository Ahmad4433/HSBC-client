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

const Navbar = () => {
  return (
    <>
      <Container className="main">
        <div className="navbar">
          <div className="navbar-container">
            <div className="navbar-container-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="navbar-container-menus">
              <NavbarItem icon={news} text="News" />
              <NavbarItem icon={accounts} text="Accounts" />
              <NavbarItem icon={investment} text="Investments" />
              <NavbarItem icon={stock} text="Stock Exchange" />
            </div>
            <div className="navbar-container-profile">
              <img src={bell} alt="icon" />
              <img src={mail} alt="icon" />
              <img src={profile} alt="icon" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
