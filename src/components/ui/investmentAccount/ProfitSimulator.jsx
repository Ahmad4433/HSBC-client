import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const ProfitSimulator = () => {
  return (
    <>
      <div className="profitSimulator">
        <h1>Profit Simulators</h1>
        <p>Select the amount to invest</p>
        <div className="profitSimulator-dropdown">
          <p>HSCB Free Booklet </p>
          <IoIosArrowDown />
        </div>
      </div>
    </>
  );
};

export default ProfitSimulator;
