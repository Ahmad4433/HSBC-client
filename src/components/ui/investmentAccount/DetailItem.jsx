import React from "react";

const DetailItem = (props) => {
  return (
    <div className="detailItem">
      <p>{props.heading}</p>
      <p>{props.value}</p>
    </div>
  );
};

export default DetailItem;
