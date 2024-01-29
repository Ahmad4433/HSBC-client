import React from "react";
import {
  GetSupport,
  InvestAmount,
  MediaSection,
  ParkingDetails,
  ProfitSimulator,
} from "../../components/ui";
import { parkingImage } from "../../assets/user/home";

const InvestmentAccount = () => {
  return (
    <>
      <div className="investmentAccount">
        <div className="investmentAccount-parking">
          <h1>Parking Center Brussels</h1>
          <div className="investmentAccount-parking-container">
            <h1>Environment</h1>

            <div className="investmentAccount-parking-container-flex">
              <div>
                <ParkingDetails
                  image={parkingImage}
                  text="You want to establish financial security and plan for possible future hauls. This fund allows you yo save money will be compltely safe and to benefit. You want to establish financial security and plan for possible future hauls. This fund allows you yo save money will be compltely safe and to benefit"
                  generalInformation="EUR/USD"
                  date="2023-12-12 / 18:24"
                  availablefor="Invested / Trading"
                  remittedAmount="1.100"
                  bonuses="1.0"
                  creditedAmount="1.22"
                  leverageEffect="10"
                  investmentGuaranted="2"
                />
              </div>

              {/* Right Side */}
              <div>
                <InvestAmount invest={6.96} loan={6.96} ticket={6.96} />
                <ProfitSimulator />
              </div>
            </div>
          </div>
        </div>

        {/* Media Section */}
        <MediaSection />
        {/* Get Support Section with Form */}
        <GetSupport />
      </div>
    </>
  );
};

export default InvestmentAccount;
