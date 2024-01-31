import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-container">
          <div className="sidebar-container-mainMenus">
            <div>
              <div>icon</div>
              <p>Dashboard</p>
              <RiArrowRightSLine />
            </div>
          </div>
          <div className="sidebar-container-subMenus"></div>
          <div className="sidebar-container-profile"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
