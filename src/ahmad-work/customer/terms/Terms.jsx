import React from "react";
import styles from "./terms.module.css";
import MyAccount from "../user-profile/my-account/MyAccount";
import UserAdvisor from "../user-profile/user-advisor/UserAdvisor";
const Terms = () => {
  return (
    <div className={styles.main}>
      <div className={styles.terms}>
        <MyAccount/>
        <div className={styles.card}>
            <p className={styles.gTitle} >General Information</p>
          <div>
            <span className={styles.title}>General Information</span>
            <span className={styles.value}>EUR/USD</span>
          </div>
          <div>
            <span className={styles.title}>Fund Payment Date</span>
            <span className={styles.value}>2023-12-12 / 18:24</span>
          </div>
          <div>
            <span className={styles.title}>Available For</span>
            <span className={styles.value}>Invested / Trading</span>
          </div>
          <div>
            <span className={styles.title}>Remitted Amount</span>
            <span className={styles.value}>$1.100</span>
          </div>
          <div>
            <span className={styles.title}>Bonuses</span>
            <span className={styles.value}>0.0%</span>
          </div>
          <div>
            <span className={styles.title}>Credited Amount</span>
            <span className={styles.value}>$1.245</span>
          </div>
          <div>
            <span className={styles.title}>Leverage Effect</span>
            <span className={styles.value}>10</span>
          </div>
          <div>
            <span className={styles.title}>Leverage Effect</span>
            <span className={styles.value}>0 Month</span>
          </div>
          <div>
            <span className={styles.title}>
              Your Investment Is <br/> <span>
              Guarantedd up to
              </span>
            </span>
            <span className={styles.value}>10</span>
          </div>
        </div>
        <UserAdvisor/>
      </div>
    </div>
  );
};

export default Terms;
