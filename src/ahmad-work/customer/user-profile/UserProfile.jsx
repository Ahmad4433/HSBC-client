import React from "react";
import styles from "./userprofile.module.css";
import MyAccount from "./my-account/MyAccount";
import UserAdvisor from "./user-advisor/UserAdvisor";
import AccountStatus from "./account-status/AccountStatus";
const UserProfile = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <MyAccount />
        <AccountStatus />
        <UserAdvisor />
      </div>
    </div>
  );
};

export default UserProfile;
