import React from "react";
import styles from "./commitment.module.css";
const CommitHistory = () => {
  return (
    <div className={styles.main}>
      <div className={styles.warpper}>
        <div className={styles.table}>
          <div className={styles.card}>
            <div className={styles.header}>
              <span className={styles.headCol1}>Investation</span>
              <div>
                <span>Variation</span>
                <span>Profit/Loss</span>
                <span>Num Postitions</span>
                <span className={styles.headCol2}>Comintment</span>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.colF}>
                <span>Stock Market</span>
              </div>
              <div className={styles.colS}>
                <div className={styles.r1}>
                  <span>Open</span>
                  <span>0,0%</span>
                  <span>$0</span>
                  <span>0 Positions</span>
                </div>
                <div className={styles.r2}>
                  <span>Finised</span>
                  <span>0,13%</span>
                  <span>$19.12</span>
                  <span>14 Positions</span>
                </div>
              </div>
              <div className={styles.colT}>
                <span>$190 </span>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.colF}>
                <span>Stock Market</span>
              </div>
              <div className={styles.colS}>
                <div className={styles.r1}>
                  <span>Open</span>
                  <span>0,0%</span>
                  <span>$0</span>
                  <span>0 Positions</span>
                </div>
                <div className={styles.r2}>
                  <span>Finised</span>
                  <span>0,13%</span>
                  <span>$19.12</span>
                  <span>14 Positions</span>
                </div>
              </div>
              <div className={styles.colT}>
                <span>$190 </span>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.colF}>
                <span>Stock Market</span>
              </div>
              <div className={styles.colS}>
                <div className={styles.r1}>
                  <span>Open</span>
                  <span>0,0%</span>
                  <span>$0</span>
                  <span>0 Positions</span>
                </div>
                <div className={styles.r2}>
                  <span>Finised</span>
                  <span>0,13%</span>
                  <span>$19.12</span>
                  <span>14 Positions</span>
                </div>
              </div>
              <div className={styles.colT}>
                <span>$190 </span>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.colF}>
                <span>Stock Market</span>
              </div>
              <div className={styles.colS}>
                <div className={styles.r1}>
                  <span>Open</span>
                  <span>0,0%</span>
                  <span>$0</span>
                  <span>0 Positions</span>
                </div>
                <div className={styles.r2}>
                  <span>Finised</span>
                  <span>0,13%</span>
                  <span>$19.12</span>
                  <span>14 Positions</span>
                </div>
              </div>
              <div className={styles.colT}>
                <span>$190 </span>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.colF}>
                <span>Stock Market</span>
              </div>
              <div className={styles.colS}>
                <div className={styles.r1}>
                  <span>Open</span>
                  <span>0,0%</span>
                  <span>$0</span>
                  <span>0 Positions</span>
                </div>
                <div className={styles.r2}>
                  <span>Finised</span>
                  <span>0,13%</span>
                  <span>$19.12</span>
                  <span>14 Positions</span>
                </div>
              </div>
              <div className={styles.colT}>
                <span>$190 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitHistory;
