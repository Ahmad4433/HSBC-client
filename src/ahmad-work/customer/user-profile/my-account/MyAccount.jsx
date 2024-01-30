import React from "react";
import "./MyAccount.css";
import { FaChartPie } from "react-icons/fa6";
import { FaTicket } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { BiSolidGroup } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'

const MyAccount = () => {
const navigate = useNavigate()
const navigaToHitorical = ()=>{
  navigate('/user/profile/historical')
}
const navigateToMovement = ()=>{
  navigate('/user/profile/movement')
}

const navigateToTerms = ()=>{
  navigate('/user/profile/terms')
}

const navigateToAccount = ()=>{
  navigate('/user-profile')
}

const navigateToCommitment = ()=>{
  navigate('/user/profile/commitment')
}

  return (
    <div className="user-myaccount-main">
      <p className="user-account-title">my account</p>
      <div className="user-account-booklet">
        <p className="user-bootlet-title">HBSC free booklet</p>
        <div onClick={navigateToAccount}  className="user-booklet-commitment">
          <FaChartPie className="user-account-icon" />
          <p>sitation</p>
       
        </div>

        <div onClick={navigateToCommitment} className="user-bottlet-historical">
          <FaTicket className="user-account-icon" />
          <p>commetment</p>

        </div>
        <div  onClick={navigateToMovement}  className="user-booklet-movement">
          <BiSolidGroup className="user-account-icon" />
          <p>movement</p>

        </div>
        <div onClick={navigaToHitorical} >
          <FaLightbulb className="user-account-icon" />
          <p>historical</p>

        </div>
        <div onClick={navigateToTerms} className="user-booklet-terms">
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
