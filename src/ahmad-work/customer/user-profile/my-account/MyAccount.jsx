import React from "react";
import "./MyAccount.css";
import { FaChartPie } from "react-icons/fa6";
import { FaTicket } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { BiSolidGroup } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";

const MyAccount = () => {
  return (
    <div className="user-myaccount-main">
      <p className="user-account-title">my account</p>
      <div className="user-account-booklet">
        <p className="user-bootlet-title">HBSC free booklet</p>
        <div className="user-booklet-commitment">
          <FaChartPie className="user-account-icon" />
          <p>sitation</p>
       
        </div>

        <div className="user-bottlet-historical">
          <FaTicket className="user-account-icon" />
          <p>commetment</p>

        </div>
        <div className="user-booklet-movement">
          <BiSolidGroup className="user-account-icon" />
          <p>movement</p>

        </div>
        <div>
          <FaLightbulb className="user-account-icon" />
          <p>historical</p>

        </div>
        <div className="user-booklet-terms">
          <MdGroups className="user-account-icon" />
          <p>terms</p>

        </div>
      </div>

      <div className="user-create-account-action">
        <span className="user-create-new-account">create new account</span>
        <FaPlus className="plus-icon" />
      </div>
    </div>
  );
};

export default MyAccount;
