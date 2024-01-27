import React from "react";
import { compeleted } from "../../../assets/user/home";
import { Heading } from "../../common";

const News = () => {
  return (
    <>
      <div className="newSection">
        <div className="newSection-container">
          <div className="newSection-container-header">
            <div className="newSection-container-header-green">
              <img src={compeleted} alt="icon" />
              <div>
                <h5>100% Guaranteed Capital</h5>
                <p>Ultra save & Zero Risk</p>
              </div>
            </div>
            <div className="newSection-container-header-red">
              <p>
                Take Advantage of the latest generation of high-performance,
                secure and high value-added invesment
              </p>
            </div>
          </div>

          <div className="newSection-container-parking">
            <div className="newSection-container-parking-content">
              <Heading icon={false}>PARKING - BERLIN - VINCI</Heading>

              <div className="newSection-container-parking-content-performance">
                <p>Guarranteed Performance </p>
                <p>69% ↑</p>
              </div>

              <p>
                VINCI Park has just acquired the company NETPARK GnbH, Based in
                Hildsheim which manages more than 12.000 parking spaces and 25
                car parks, mainly in lower saxony and north rhine-westphalia
              </p>


              <div className="newSection-container-parking-content-menu">




<p>

</p>
<p>
    
</p>

              </div>




            </div>
            <div className="newSection-container-parking-image"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
