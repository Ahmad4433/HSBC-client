import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { logo } from "../../../assets/user/navbar";
import adminprofile from "../../../ahmad-work/assets/adminprofile.png";
import adminprofilearrow from "../../../ahmad-work/assets/adminprofilearrow.png";
import { CiLogout } from "react-icons/ci";
import {useNavigate} from 'react-router-dom'

import {
  sidebarMoreRoutes,
  sidebarRoutes,
} from "../../../data/routes/sidebarRoutes";

const Sidebar = () => {
  const navigate = useNavigate()

const [isLogout,setIsLogout] = useState(false)

const clickHandler = ()=>{
  setIsLogout(!isLogout)
}


const logoutHandler = ()=>{
  localStorage.removeItem('userCode')
  navigate('/')
  
}


  return (
    <>
      <div className="sidebar">
        <div className="sidebar-container">
          <div className="sidebar-container-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="sidebar-container-mainMenus">
            {sidebarRoutes.map((item, index) => (
              <Link to={item.to} key={index}>
                <div>
                  <img src={item.icon} alt="icon" />
                  <p>{item.text}</p>
                </div>
                <RiArrowRightSLine />
              </Link>
            ))}
          </div>
          <div className="sidebar-container-subMenus">
            {sidebarMoreRoutes.map((item, index) => (
              <Link to={item.to} index={index}>
                <div>
                  <img src={item.icon} alt="icon" />
                  <p>{item.text}</p>
                </div>
                <RiArrowRightSLine />
              </Link>
            ))}
          </div>
          <div className="sidebar-container-profile">
            <div   className={` admin-profile-sec ${isLogout ? 'click':''}`} >
              <div onClick={clickHandler} className="admin-profile">
                <img
                  src={adminprofile}
                  alt="admin"
                  className="admin-profile-image"
                />
                <p className="admin-name">Veronica Sisilia</p>
                <img src={adminprofilearrow}  className="admin-profile-opener" />
              </div>
              <div onClick={logoutHandler} className="admin-profile-logout-section" >
          
                <p className="admin-logout-title" >logout</p>
                <CiLogout className="admin-logout-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
