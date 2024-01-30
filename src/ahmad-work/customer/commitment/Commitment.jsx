import React from "react";
import "./commitment.css";
import MyAccount from "../../customer/user-profile/my-account/MyAccount";
import CommitHistory from "./CommitHistory";

const Commitment = () => {
  return (
    <div className="commitment-main">
      <div className="commitment">
        <div className="acc-wrapper">
          <MyAccount />
        </div>
        <div className="commit">
          <CommitHistory />
        </div>
      </div>
    </div>
  );
};

export default Commitment;
