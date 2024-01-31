import React from "react";
import styles from "./clientProspect.module.css";
import Detail from "./customer-detail/Detail";
import Data from "./Data";
const ClientProspect = () => {
  return (
    <div>
      <div className={styles.section}>
        <Data title="Interested" cat="Employee" num="856" />
        <Data title="Customer" cat="Views" num="3342" />
        <Data title="Already Contacted" cat="Applicants" num="77" />
        <Data title="Not Interested" cat="Employee" num="17" />
      </div>
  <div className={styles.sec2} >
  <Detail title='Total Customers' num='5,423' />
      <Detail title='Total Customers' num='5,423' />
      <Detail title='Total Customers' num='5,423' />
      <Detail title='Total Customers' num='5,423' />
  </div>
    </div>
  );
};

export default ClientProspect;
