import React from "react";
import { IdentityForm, ResetPassword } from "../../components/ui";
import { Button } from "../../components/common";
import { RiEditLine } from "react-icons/ri";
import { PiArrowFatRightThin } from "react-icons/pi";

const PersonalInformation = () => {
  return (
    <>
      <div className="personalInformation">
        <div className="personalInformation-header">
          <div>
            <h1>Personal Data</h1>
            <p>Complete the information Request in the block blow</p>
          </div>
          <div>
            <Button className="secondry">
              Edit
              <RiEditLine />
            </Button>
            <Button className="secondry--light">
              Next
              <PiArrowFatRightThin />
            </Button>
          </div>
        </div>

        {/* Other Components */}
        <div className="personalInformation-container">
          <IdentityForm />
          <ResetPassword />
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
