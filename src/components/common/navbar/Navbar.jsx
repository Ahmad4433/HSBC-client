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

const Navbar = () => {
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
                <NavbarItem icon={news} text="News" />
                <NavbarItem icon={accounts} text="Accounts" />
                <NavbarItem icon={investment} text="Investments" />
                <NavbarItem icon={stock} text="Stock Exchange" />
              </div>
              <div className="navbar-container-profile">
                <img src={bell} alt="icon" />
                <img src={mail} alt="icon" />
                <Link to="/user-profile">
                  <img src={profile} alt="icon" />
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
