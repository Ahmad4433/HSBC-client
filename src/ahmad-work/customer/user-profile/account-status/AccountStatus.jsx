import React from "react";
import "./AccountStatus.css";
import { MdEmojiTransportation } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { SiMastercard } from "react-icons/si";
import cardArrow from "../../../assets/card-arrow-icon.png";
import transport from '../../../assets/transport.png'
import food from '../../../assets/food.png'
const AccountStatus = () => {
  return (
    <div className="account-status-main">
      <div className="account-status">
        <div className="account-status-bank-info">
          <div className="account-funds-avail">
            <p className="chl-1">funds available</p>
            <p className="chl-2">$240,399</p>
          </div>
          <div className="bank-card-info">
            <div className="card-info-left">
              <span className="type-title">account type</span>
              <span className="card-title">debit card</span>
              <span className="number-title">********2598</span>
            </div>
            <div className="card-info-right">
              <SiMastercard className="master-card-icon" />
              <div>
                <span className="card-amount" >$25000</span>
                <img src={cardArrow} alt="" />
              </div>
            </div>
          </div>
        </div>

<div className="account-status-invest" >

<div className="invest-chl-1" >
    <div className="invest-right" >
       <img src={transport} alt="" /> 
       <div className="invest-cont-1" >
        <p className="invest-total-title" >total amount invested</p>
        <p className="invest-amount-title" >$0</p>
       </div>
    </div>
    <IoMdMore className="more-icon" />
   
</div>
<div className="invest-chl-1" >
    <div className="invest-right" >
       <img src={food} alt="" /> 
       <div className="invest-cont-1" >
        <p className="invest-total-title" >total performance</p>
        <p className="invest-amount-title" >$0</p>
       </div>
    </div>
    <IoMdMore className="more-icon" />
   
</div>


</div>

      </div>
    </div>
  );
};

export default AccountStatus;
