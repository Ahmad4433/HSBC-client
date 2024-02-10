import React from "react";
import usercircular from "../../../assets/user-circle.png";
import duplicate from "../../../assets/duplicate.png";
import calendar from "../../../assets/calendar.png";
import { RiDashboardFill } from "react-icons/ri";
import style from './formHeader.module.css'

const FormHeader = () => {
  return (
   <div className={style.main} >
    <div className={style.mobileH} >
    <h2 className={style.mblogoT}>HSBC</h2>
    <p className={style.Mbdownload}>FREE DOWNLOAD</p>

    </div>
<div className={style.header}>
      <div>
        <h2 className={style.logoT}>HSBC</h2>
      </div>
      <div className={style.headerInner}>
        <div>
          <RiDashboardFill className={style.dashIcon} />
          <p className={style.tt}>Dashboard</p>
        </div>
        <div>
          <img src={usercircular} className={style.iconImg} />
          <p className={style.tt}>Profile</p>
        </div>
        <div>
          <img src={duplicate} className={style.iconImg} />
          <p className={style.tt}>Sign Up</p>
        </div>
        <div>
          <img src={calendar} className={style.iconImg} />
          <p className={style.tt}>Login</p>
        </div>
      </div>
      <div>
        <p className={style.download}>FREE DOWNLOAD</p>
      </div>
    </div>

   </div>
  );
};

export default FormHeader;
