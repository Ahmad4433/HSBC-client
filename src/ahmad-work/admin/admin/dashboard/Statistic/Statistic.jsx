import React, { useState } from "react";
import TopLosers from "../General Statistic/TopLosers";
import Total from "../General Statistic/Total";
import TopGainer from "../General Statistic/TopGainer";
import style from "./statistc.module.css";
import ReminderOfDay from "../Call Diary/reminder-of-the-day/ReminerOfDay";
import ToggleBar from "./ToggleBar";
import Online from "../Call Diary/online/Online";
import AdvanceSrd from "../Call Diary/advance-of-srd-fund/AdvanceSrc";
const Statistic = () => {
  const [toggle,setToggle] = useState(false)


  const toggleHandler  = (value)=>{
    setToggle(value)
  }

  return (
    <div className={style.main}>
      <ToggleBar onSave = {toggleHandler} />
      {toggle ? <div className={style.level}>
        <Total />
        <TopGainer />
        <TopLosers />
      </div>: <div className={style.reminder} >
        <ReminderOfDay />
        <Online />
        <AdvanceSrd />
      </div>}

      
    </div>
  );
};

export default Statistic;
