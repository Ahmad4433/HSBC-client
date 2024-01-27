import React from "react";
import { SlCallOut } from "react-icons/sl";
import { FiMail } from "react-icons/fi";
import userPicture from "../../../assets/user-picture.jpg";
import { FaRegNewspaper } from "react-icons/fa";
import "./userAdvisor.css";

const UserAdvisor = () => {
  return (
    <div className="user-advisor-main">
      <p className="user-account-title">your advisor</p>

      <div className="user-advisor">
        <div className="advisor-pic-parent">
          <img src={userPicture} className="advisor-picture" />
        </div>
        <p className="advisor-name">west jackeline</p>
        <div className="advisor-contact">
          <div className="advisor-call-parent">
            <SlCallOut className="call-icon" />
            <p className="advisor-num">4268-2137-2138</p>
          </div>
          <div className="advisor-call-parent">
            <FiMail className="call-icon" />
            <p className="advisor-num">laurent.florida@global.com</p>
          </div>
        </div>
      </div>

      <div className="advisor-bottom">
        <p className="advisor-desp">
          Take advantage of the lastet tecnologies and dedicated support from
          expert. We are at your disposal to repond positifly to all yout
          expectations
        </p>
        <p className="advidor-manag">FUND MANAGEMENT</p>
        <div>
         <div className="advisor-actions" >
         <div className="advisor-action add-action">
            <FaRegNewspaper className="add-icon" />
            <p className="advisor-add">add</p>
          </div>

          <div className="advisor-action">
            <FaRegNewspaper className="add-icon" />
            <p className="advisor-add">withdraw</p>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default UserAdvisor;
