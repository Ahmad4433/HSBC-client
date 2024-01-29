import React from "react";
import { invest, loan, ticket } from "../../../assets/user/investmentList";

const InvestAmount = (props) => {
  return (
    <>
      <div className="investAmount">
        <h1>I Want Invest amount of</h1>

        <div className="investAmount-container">
          <div>
            <div>
              <img src={invest} alt="icon" />
              <p>Already Invest</p>
            </div>
            <h1>${props.invest}</h1>
          </div>
          <div>
            <div>
              <img src={loan} alt="icon" />
              <p>Term of Loan</p>
            </div>
            <h1>${props.loan}</h1>
          </div>
          <div>
            <div>
              <img src={ticket} alt="icon" />
              <p>Minimum Entry Ticket</p>
            </div>
            <h1>${props.ticket}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestAmount;
