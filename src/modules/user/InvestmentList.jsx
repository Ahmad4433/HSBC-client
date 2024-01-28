import React, { useState } from "react";

const InvestmentList = () => {
  const [toggleActive, setToggleActive] = useState(false);

  return (
    <>
      <div className="investmentlist">
        <div className="investmentlist-header">
          <h2>Financial Investment Until 2023</h2>
          <p>
            There are numerous ways to invest; please choose the type of
            investment you prefer.
          </p>
        </div>
        <div className="investmentlist-container">
          <div className="investmentlist-container-toggle">
            <button
              id={toggleActive && "toggle_active"}
              onClick={() => setToggleActive(true)}
            >
              Saving Funds
            </button>
            <button
              id={toggleActive ? "" : "toggle_active"}
              onClick={() => setToggleActive(false)}
            >
              Car Park
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentList;
