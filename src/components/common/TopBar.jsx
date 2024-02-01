import React from "react";
import { RiSideBarFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";

const TopBar = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar-container">
          <div className="topbar-container-left">
            <div>
              <RiSideBarFill />
              <FaRegStar />
            </div>
            <p>Dashboards</p>
            <p>/</p>
            <p>Client / Prospect</p>
          </div>
          <div className="topbar-container-right"></div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
