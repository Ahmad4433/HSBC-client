import React from "react";
import { ProspectData, ProspectClientData } from "../../components/ui";
// import ProspectData from "../../components/ui/clientProspect/ProspectData";

const ClientAndProspect = () => {
  return (
    <>
      <div className="clientProspect">
        <div className="clientProspect-container">
          <div className="clientProspect-container-data">
            <ProspectData
              intersetScale="12"
              intersetValue="856"
              customerScale="32"
              customerValue="3,342"
              contactedScale="43"
              contactedValue="434"
              notIntersetScale="7"
              notIntersetValue="42"
              totalCustomer="543"
              totalCustomerScale="16"
              members="54"
              memberScale="32"
              activeNow="43"
            />

            <ProspectClientData />
          </div>
          <div className="clientProspect-container-clientData"></div>
        </div>
      </div>
    </>
  );
};

export default ClientAndProspect;
