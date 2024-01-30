import React from "react";
import styles from "./movement.module.css";
import { IoMdArrowDown } from "react-icons/io";
import MyAccount from "../user-profile/my-account/MyAccount";
import UserAdvisor from "../user-profile/user-advisor/UserAdvisor";
const Movement = () => {
  return (
    <div className={styles.moveMain}>

      <div className={styles.movement}>
    <MyAccount/>

        <div className={styles.card} >
          <span className={styles.fundT} >Movement Of Funds</span>
          <span className={styles.fundT} >Send From</span>
          <select className={styles.select1} >
            <option>HSBC Free Booklet 1 119.91 EUR</option>
            <option>select</option>
            <option>select</option>
          </select>
          <span className={styles.fundT} >AVAILABLE </span>
          <span className={styles.sendF} >119.998.100</span>
          <IoMdArrowDown className={styles.arrow} />
          <span className={styles.fundT} >Send From</span>
          <select  className={styles.select1}  >
          <option>HSBC Free Booklet 1 119.91 EUR</option>
            <option>select</option>
            <option>select</option>
          </select>
          <span className={styles.validate} >Validate</span>
        </div>
        <UserAdvisor/>
      </div>
    </div>
  );
};

export default Movement;
