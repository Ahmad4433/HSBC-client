import React from "react";

import { summary } from "../../../assets/user/home";
import { Grid, SummaryCard } from "../../features";
import { profile } from "../../../assets/user/navbar";
import { Heading } from "../../common";

const Summary = () => {
  return (
    <>
      <Heading
        icon={true}
        iconPath={summary}
        text="Summary"
        className="primary"
      />

      <div className="summary">
        <div className="summary_container">
          <Grid className="grid-4">
            <SummaryCard heading="Total" value="1,119.01" />
            <SummaryCard heading="Available" value="1,119.01" />
            <SummaryCard heading="Currently" value="0" />
            <div className="summaryCard">
              <div className="summaryCard_container">
                <div className="summaryCard_container-content">
                  <h5>Your Advisor</h5>

                  <div className="summaryCard_container-content-profile">
                    <img src={profile} alt="profile" />
                    <div className="summaryCard_container-content-profile-name">
                      <h6>West Jackeline</h6>
                      <p>01.87.66.19.21</p>
                    </div>
                  </div>

                  <p>Monday, September 22</p>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Summary;
