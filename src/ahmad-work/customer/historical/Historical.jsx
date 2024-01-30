import React from "react";
import { useState } from "react";
import styles from "./historical.module.css";
import Switch from "@mui/material/Switch";
import MyAccount from "../user-profile/my-account/MyAccount";
const Historical = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={styles.main}>
      <div className={styles.historicalMain}>
        <MyAccount />

        <div className={styles.tab}>
          <div className={styles.table}>
            <div className={styles.tHead}>
              <p>history</p>
              <div>
                <span>Gain / Loss</span>
                <span>Normal</span>
                <span className={styles.tgl}>
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </span>
                <span>All Movement^</span>
              </div>
            </div>
            <div className={styles.row}>
              <span className={styles.rCf}>Edward</span>
              <span>7261-1124-211</span>
              <span>23-03-2022</span>
              <span>1596</span>
              <span>haehyc@hotmail</span>
              <span className={styles.rCl}>+$121.01</span>
            </div>
            <div className={styles.row}>
              <span className={styles.rCf}>Edward</span>
              <span>7261-1124-211</span>
              <span>23-03-2022</span>
              <span>1596</span>
              <span>haehyc@hotmail</span>
              <span className={styles.rCl}>+$121.01</span>
            </div>
            <div className={styles.row}>
              <span className={styles.rCf}>Edward</span>
              <span>7261-1124-211</span>
              <span>23-03-2022</span>
              <span>1596</span>
              <span>haehyc@hotmail</span>
              <span className={styles.rCl}>+$121.01</span>
            </div>
            <div className={styles.row}>
              <span className={styles.rCf}>Edward</span>
              <span>7261-1124-211</span>
              <span>23-03-2022</span>
              <span>1596</span>
              <span>haehyc@hotmail</span>
              <span className={styles.rCl}>+$121.01</span>
            </div>
            <div className={styles.row}>
              <span className={styles.rCf}>Edward</span>
              <span>7261-1124-211</span>
              <span>23-03-2022</span>
              <span>1596</span>
              <span>haehyc@hotmail</span>
              <span className={styles.rCl}>+$121.01</span>
            </div>
            {/* <div className={styles.row}>
              <span className={styles.rCf}>Edward</span>
              <span>7261-1124-211</span>
              <span>23-03-2022</span>
              <span>1596</span>
              <span>haehyc@hotmail</span>
              <span className={styles.rCl}>+$121.01</span>
            </div> */}
            {/* <div className={styles.row}>
            <span className={styles.rCf}>Edward</span>
            <span>7261-1124-211</span>
            <span>23-03-2022</span>
            <span>1596</span>
            <span>haehyc@hotmail</span>
            <span className={styles.rCl}>+$121.01</span>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historical;
