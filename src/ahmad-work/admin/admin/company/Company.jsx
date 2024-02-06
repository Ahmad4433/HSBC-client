import React, { useEffect, useState } from "react";
import style from "./company.module.css";
import Detail from "./detail/Detail";
import FollowUp from "./customer-follow-up/FollowUp";
import FundsAvail from "./funds-available/FundsAvail";
import Taking from "./taking-a-stank/Taking";
import Personalization from "./personalization-of-investment/Personalization";
import Banner from "./banner-blocks/Banner";
import Push from "./customer-push/Push";
import PersonalDoc from "./company-phas2/personal-doc/PersonalDoc";
import Dashboard from "./company-phas2/dashboard/Dashboard";
import Experience from "./company-phas2/experience/Experience";
const Company = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [track, setTrack] = useState(0);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  const clickHandler = (id) => {
    setTrack(id);
  };

  return (
    <div>
      <div className={style.model}>
        <div className={style.tabs}>
          <span className={track ===0 && style.active} onClick={() => clickHandler(0)}>Detail</span>
          <span className={track ===1 && style.active} onClick={() => clickHandler(1)}>Customer Follow Up</span>
          <span className={track ===2 && style.active} onClick={() => clickHandler(2)}>Fund Available</span>
          <span className={track ===3 && style.active} onClick={() => clickHandler(3)}>Taking a Stand</span>
          <span className={track ===4 && style.active} onClick={() => clickHandler(4)}>
            Personalization of Investment
          </span>
          <span className={track ===5 && style.active} onClick={() => clickHandler(5)}>Banner & Blocks</span>
          <span className={track ===6 && style.active} onClick={() => clickHandler(6)}>Customer Push</span>
          <span className={track ===7 && style.active} onClick={() => clickHandler(7)}>Personal Doc</span>
          <span className={track ===8 && style.active} onClick={() => clickHandler(8)}>Dashboard</span>
          <span className={track ===9 && style.active} onClick={() => clickHandler(9)}>Experience</span>
        </div>

        {track === 0 && (
          <div>
            <Detail />
          </div>
        )}
        {track === 1 && (
          <div>
            <FollowUp />
          </div>
        )}
        {track === 2 && (
          <div>
            <FundsAvail />
          </div>
        )}
        {track === 3 && (
          <div>
             <Taking />
          </div>
        )}
        {track === 4 && (
          <div>
             <Personalization />
          </div>
        )}
        {track === 5 && (
          <div>
    <Banner />
          </div>
        )}
        {track === 6 && (
          <div>
            <Push />
          </div>
        )}
        {track === 7 && (
          <div>
           <PersonalDoc />
          </div>
        )}
        {track === 8 && (
          <div>
        <Dashboard />
          </div>
        )}
        {track === 9 && (
          <div>
          <Experience />
          </div>
        )}
      </div>

      <div>
        {/* <Detail />
        <FollowUp />
        <FundsAvail />
        <Taking />
        <Personalization />
        <Banner />
        <Push />
        <PersonalDoc />
        <Dashboard />
        <Experience /> */}
      </div>
    </div>
  );
};

export default Company;
