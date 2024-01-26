import React from "react";
import { logo } from "../../../assets/user/navbar";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-container">
          <div className="banner-container-content">
            <h3>Welcome Dear HSBC</h3>
            <h6>Globas Asset Management</h6>
          </div>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Banner;
