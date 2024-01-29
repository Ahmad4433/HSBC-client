import React from "react";
import { Heading } from "../../common";
import { trading } from "../../../assets/user/home";
import { Grid, TradeValues } from "../../features";

const Trading = () => {
  return (
    <>
      <Heading icon={true} iconPath={trading} className="primary">
        Trading
      </Heading>

      <div className="trade_section">
        <div className="trade_section-container">
          <h1>Trading</h1>

          <div className="trade_section-container">
            <Grid className="grid-5">
              <TradeValues day="Today" value="16" />
              <TradeValues day="Yesterday" value="12" />
              <TradeValues day="7 days" value="1.6" />
              <TradeValues day="30 days" value="1.6" />
              <TradeValues day="3 months" value="1.6" />
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trading;
