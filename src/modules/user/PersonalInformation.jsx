import React from "react";
import { IdentityForm } from "../../components/ui";
import { Button } from "../../components/common";
import { CiEdit } from "react-icons/ci";
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
            <Button>
              Edit
              <CiEdit />
            </Button>
            <Button>
              Next
              <PiArrowFatRightThin />
            </Button>
          </div>
        </div>

        
        {/* Other Components */}
        <div className="personalInformation-container">
          <IdentityForm />
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
