import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { logo } from "../../../assets/user/navbar";
import {
  sidebarMoreRoutes,
  sidebarRoutes,
} from "../../../data/routes/sidebarRoutes";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-container">
          <div className="sidebar-container-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="sidebar-container-mainMenus">
            {sidebarRoutes.map((item, index) => (
              <>
                <Link to={item.to} key={index}>
                  <div>
                    <img src={item.icon} alt="icon" />
                    <p>{item.text}</p>
                  </div>
                  <RiArrowRightSLine />
                </Link>
              </>
            ))}
          </div>
          <div className="sidebar-container-subMenus">
            {sidebarMoreRoutes.map((item) => (
              <>
                <Link to={item.to}>
                  <div>
                    <img src={item.icon} alt="icon" />
                    <p>{item.text}</p>
                  </div>
                  <RiArrowRightSLine />
                </Link>
              </>
            ))}
          </div>
          <div className="sidebar-container-profile"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
