import React from "react";
import Grid from "./Grid";
import { invest, loan, ticket, buyBtn } from "../../assets/user/investmentList";
import { LinkBtn } from "../common";

const InvestmentCard = (props) => {
  return (
    <div className="investmentCard">
      <div className="investmentCard-container">
        <div className="investmentCard-container-img">
          <img src={props.image} alt="cardProfile" />
        </div>
        <div className="investmentCard-container-content">
          <div className="investmentCard-container-content-section">
            <div className="investmentCard-container-content-section-header">
              <h3>{props.heading}</h3>
              <p>{props.date}</p>
            </div>
            <div className="investmentCard-container-content-section-values">
              <Grid className="grid-3">
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
              </Grid>
            </div>
            <div className="investmentCard-container-content-section-menus">
              <Grid className="grid-4">
                <div>
                  <p>Interest</p>
                  <p> {props.interest}% Annualy</p>
                </div>
                <div>
                  <p>Period</p>
                  <p> {props.period}Month</p>
                </div>
                <div>
                  <p>Guarented</p>
                  <p> {props.guarented}% Annualy</p>
                </div>
                <div>
                  <p>End of Subscription</p>
                  <p> {props.subscription}% Annualy</p>
                </div>
              </Grid>
            </div>

            <LinkBtn
              icon={true}
              iconPath={buyBtn}
              to={props.to}
              className="secondry"
              id="color_white"
            >
              Buy Ticket
            </LinkBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
