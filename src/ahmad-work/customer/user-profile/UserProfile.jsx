import React from "react";
import "./UserProfile.css";
import MyAccount from "./my-account/MyAccount";
import AccountStatus from "./account-status/AccountStatus";
import UserAdvisor from "./user-advisor/UserAdvisor";
const UserProfile = () => {
  return (
    <div className="bg" >
      <div className="user-profile-main">
        <MyAccount />
        <AccountStatus />
        <UserAdvisor />
   
      </div>
    </div>
  );
};

export default UserProfile;
