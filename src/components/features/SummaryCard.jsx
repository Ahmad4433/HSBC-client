import React from "react";

const SummaryCard = (props) => {
  return (
    <div className="summaryCard">
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
