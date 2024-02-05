import React from "react";
import style from "./followUp.module.css";
import companymenber from "../../../../assets/companymember.png";
import { SlCallOut } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { LuLink } from "react-icons/lu";
import Authorize from "./authorize-access/Authorize";
import ValidateStatus from "./validate-new-status/ValidateStatus";
import NewStatus from "./new-status/NewStatus";
import Comment from "./add-comment/Comment";
import History from "./history/History";
const FollowUp = () => {
  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.head}>
          <div className={style.item1}>
            <img src={companymenber} alt="member" />
            <div>
              <p className={style.title}>Customer</p>
              <p className={style.value}>Brand Achille, Paul, Emanuel</p>
            </div>
          </div>
          <div className={style.item2}>
          <SlCallOut className={style.icon} />
            <div>
              <p className={style.title}>Phone</p>
              <p className={style.value}>Brand Achille, Paul, Emanuel</p>
            </div>

          </div>
          <div className={style.item3}>
            <CiMail className={style.icon} />
            <div>
              <p className={style.title}>Mail</p>
              <p className={style.value}>Brand Achille, Paul, Emanuel</p>
            </div>
          </div>
          <div className={style.item4}>
         <LuLink  className={style.icon}/>
            <div>
              <p className={style.title}>Compaign</p>
              <p className={style.value}>Brand Achille, Paul, Emanuel</p>
            </div>
          </div>
        </div>
        <div >

          <div className={style.cards} >
          <Authorize/>
            <ValidateStatus/>
            <NewStatus/>
            <Comment/>
          </div>
            <History/>
        </div>
      </div>

    </div>
  );
};

export default FollowUp;
