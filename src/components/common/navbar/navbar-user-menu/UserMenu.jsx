import React from "react";
import style from "./userMenu.module.css";
import userprofile from "../../../../ahmad-work/assets/adminprofile.png";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import {useNavigate} from 'react-router-dom'
const UserMenu = () => {
const navigate = useNavigate()

const logoutHandler = ()=>{
    localStorage.removeItem('userCode')
    navigate('/login')

}

const navigateToPersonalInfo = ()=>{
    navigate('/account/step1')

}

  return (
    <div className={style.main}>
      <div className={style.profile}>
        <img src={userprofile} alt="user" className={style.image} />
        <p className={style.name}>West Jackeline</p>
      </div>
      <div className={style.other}>
        <div onClick={navigateToPersonalInfo}  className={style.item}>
          <IoMdInformationCircleOutline className={style.icon} />
          <span>Personal Info..</span>
        </div>
        <div onClick={logoutHandler} className={style.item}>
          <CiLogout className={style.icon} />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
