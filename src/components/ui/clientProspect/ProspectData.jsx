import React from "react";

import { FaArrowTrendUp } from "react-icons/fa6";
import { IoArrowUp } from "react-icons/io5";
import { active, members, totalCustomer } from "../../../assets/admin";

const ProspectData = (props) => {
  return (
    <div className="prospectData">
      <div className="prospectData-container">
        <div className="prospectData-container-interset">
          <div>
            <div>
              <p>Interested</p>
              <div>
                <FaArrowTrendUp />
                {props.intersetScale}
              </div>
            </div>
            <h4>{props.intersetValue}</h4>
            <p>Employee</p>
          </div>
          <div>
            <div>
              <p>Customer</p>
              <div>
                <FaArrowTrendUp />
                {props.customerScale}
              </div>
            </div>
            <h4>{props.customerValue}</h4>
            <p>Viewers</p>
          </div>
          <div>
            <div>
              <p>Already Contacted</p>
              <div>
                <FaArrowTrendUp />
                {props.contactedScale}
              </div>
            </div>
            <h4>{props.contactedValue}</h4>
            <p>Applicants</p>
          </div>
          <div>
            <div>
              <p>Not Interested</p>
              <div>
                <FaArrowTrendUp />
                {props.notIntersetScale}
              </div>
            </div>
            <h4>{props.notIntersetValue}</h4>
            <p>Employee</p>
          </div>
        </div>
        <div className="prospectData-container-detail">
          <div>
            <img src={totalCustomer} alt="icon" />
            <div>
              <p>Total Customer</p>
              <h1>{props.totalCustomer}</h1>
              <p>
                <span>
                  <IoArrowUp /> {props.totalCustomerScale}%
                </span>
                this month
              </p>
            </div>
          </div>
          <div>
            <img src={members} alt="icon" />
            <div>
              <p>Members</p>
              <h1>{props.members}</h1>
              <p>
                <span>
                  <IoArrowUp /> {props.memberScale}%
                </span>
                this month
              </p>
            </div>
          </div>
          <div>
            <img src={active} alt="icon" />
            <div>
              <p>Active Now</p>
              <h1>{props.activeNow}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProspectData;
