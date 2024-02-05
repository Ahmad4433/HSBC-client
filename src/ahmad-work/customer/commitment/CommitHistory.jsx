import React from "react";
import styles from "./commitment.module.css";
import Table from "../../tables/Table";
const CommitHistory = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper} ><Table/>
</div>
    </div>
  );
};

export default CommitHistory;
