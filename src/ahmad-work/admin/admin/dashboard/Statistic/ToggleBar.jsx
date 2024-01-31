import React from "react";
import style from "./toggleBar.module.css";
const ToggleBar = () => {
  return (
    <div className={style.main}>
      <div className={style.section}>
        <div className={style.toggle}>
          <div className={style.step1} >
            <p>Call Diary</p>
          </div>
          <div className={style.step2} >
            <p>General Statistic</p>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default ToggleBar;
