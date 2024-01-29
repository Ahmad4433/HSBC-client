import React from "react";
import { logo } from "../../../assets/user/navbar";
import { banner } from "../../../assets/user/home";

const Banner = () => {
  return (
    <>
      <div className="banner_main">
        <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
          <div className="banner-container">
            <div className="banner-container-content">
              <h3>Welcome Dear HSBC</h3>
              <h6>Globas Asset Management</h6>
            </div>
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
