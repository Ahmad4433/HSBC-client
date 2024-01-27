import React from "react";
import { compeleted, parkingImage } from "../../../assets/user/home";
import { Heading, LinkBtn } from "../../common";
import { PiSealCheck } from "react-icons/pi";
import { btnicon } from "../../../assets/user/blogs";

const News = () => {
  return (
    <>
      <Heading icon={true} iconPath={btnicon} className="primary">
        News
      </Heading>

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
              <Heading icon={false} className="main center">
                PARKING - BERLIN - VINCI
              </Heading>

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
                <div>
                  <p>
                    <PiSealCheck />
                    Infest Rates :
                  </p>
                  <p>1.1 %</p>
                </div>
                <div>
                  <p>
                    <PiSealCheck />
                    Period
                  </p>
                  <p>quartely</p>
                </div>
                <div>
                  <p>
                    <PiSealCheck />
                    Duration
                  </p>
                  <p>12 Month</p>
                </div>
                <div>
                  <p>
                    <PiSealCheck />
                    Amount per Share
                  </p>
                  <p>$112.120</p>
                </div>
              </div>

              <LinkBtn icon={true} iconPath={btnicon} className="primary">
                Learn More
              </LinkBtn>
            </div>
            <div className="newSection-container-parking-image">
              <img src={parkingImage} alt="parking" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
