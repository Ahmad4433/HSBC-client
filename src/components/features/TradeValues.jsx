import React from "react";
import { arrowUpRight } from "../../assets/user/home";

const TradeValues = (props) => {
  return (
    <>
      <div className="tradeValue_item">
        <div className="tradeValue_item-days">
          <p>{props.day}</p>
          <img src={arrowUpRight} alt="icon" />
        </div>
        <h6>$ {props.value}</h6>
      </div>
    </>
  );
};

export default TradeValues;
