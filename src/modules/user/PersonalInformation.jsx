import React, { useState } from "react";
import { IdentityForm, ResetPassword } from "../../components/ui";
import { Button } from "../../components/common";
import { RiEditLine } from "react-icons/ri";
import { PiArrowFatRightThin } from "react-icons/pi";
import StepBar from "../../ahmad-work/common/step-bar/StepBar";
import {useLocation} from 'react-router-dom'
const PersonalInformation = () => {
  const location = useLocation()
  const [id,setId] = useState(location.pathname.split('p')[1])
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
        <div className="containerManager">





<StepBar id={id} />
        <div className="personalInformation-container">
          <IdentityForm />
          <ResetPassword />
        </div>
      </div>

      </div>
    </>
  );
};

export default PersonalInformation;
