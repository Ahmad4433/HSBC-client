import React from "react";
import styles from "./history.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoIosWallet } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import variaction from "../../../assets/variation.jpg";
const Hitory = () => {
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <div className={styles.container}>
          <table className={styles.table}>
            <tr>
              <th>Customer</th>
              <th>
                <div className={styles.thIcon}>
                  <span>Currency Name</span>
                  <img src={variaction} alt="" />
                </div>
              </th>
              <th>Commission</th>
              <th>
                <div className={styles.thIcon}>
                  <span>Funds</span>
                  <img src={variaction} alt="" />
                </div>
              </th>
              <th>
                <div className={styles.thIcon}>
                  <span>Amount Transaction</span>
                  <img src={variaction} alt="" />
                </div>
              </th>
              <th>
                <div className={styles.thIcon}>
                  <span>Attribution</span>
                  <img src={variaction} alt="" />
                </div>
              </th>
              <th>
                <div className={styles.thIcon}>
                  <span>Date</span>
                  <img src={variaction} alt="" />
                </div>
              </th>
              <th>Trash</th>
            </tr>

            <tr>
              <tr className={styles.tr} >Brandt Paul</tr>
              <tr>Emmanuelb@gmail.com</tr>
              <tr>06.45.19.88.08</tr>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Hitory;
