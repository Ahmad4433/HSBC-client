import React from "react";
import { summaryMap } from "../../assets/user/home";

const SummaryCard = (props) => {
  return (
    <div
      className="summaryCard"
      style={{ backgroundImage: `url(${summaryMap})` }}
    >
      <div className="summaryCard_container">
        <div className="summaryCard_container-content">
          <h5>{props.heading}</h5>
          <h3> $ {props.value}</h3>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
