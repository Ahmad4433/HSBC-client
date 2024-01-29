import React from "react";
import DetailItem from "./DetailItem";

const ParkingDetails = (props) => {
  return (
    <>
      <div className="parkingDetail">
        <img src={props.image} alt="car parking" />
        <p>{props.text}</p>
        <div className="parkingDetail-values">
          <DetailItem
            heading="General Information"
            value={props.generalInformation}
          />
          <DetailItem heading="Fund Payment Date" value={props.date} />
          <DetailItem heading="Available For" value={props.availablefor} />
          <DetailItem
            heading="Remitted Amount"
            value={"$" + props.remittedAmount}
          />
          <DetailItem heading="Bonuses" value={props.bonuses} />
          <DetailItem
            heading="Credited Amount"
            value={"$" + props.creditedAmount}
          />
          <DetailItem
            heading="Leverage Effect"
            value={props.leverageEffect + "0"}
          />
          <DetailItem
            heading="Your Investment Is Guarantedd up to"
            value={props.investmentGuaranted}
          />
        </div>
      </div>
    </>
  );
};

export default ParkingDetails;
