import React from "react";
import { Heading } from "../../common";
import { trading } from "../../../assets/user/home";

const Trading = () => {
  return (
    <>
      <Heading
        icon={true}
        iconPath={trading}
        text="Trading"
        className="primary"
      />
    </>
  );
};

export default Trading;
