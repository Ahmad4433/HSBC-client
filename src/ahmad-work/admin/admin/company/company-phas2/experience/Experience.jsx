import React from "react";
import style from "./exprience.module.css";
const Experience = () => {
  return (
    <div className={style.main}>
      <div className={style.card}>
        <p className={style.title}>Dashboard</p>

        <div className={style.item}>
          <p className={style.lbl}>
            Which experience level do you have with derivatives or leveraged
            products such as CFDs?
          </p>
         <div>
         <div className={style.inner}>
            <input type="radio" />
            <span>1-2 years</span>
          </div>
          <div className={style.inner}>
            <input type="radio" />
            <span>Less than a year</span>
          </div>
          <div className={style.inner}>
            <input type="radio" />
            <span>I've never traded</span>
          </div>
         </div>
        </div>
        <div className={style.item}>
          <p className={style.lbl}>
            Which experience level do you have with derivatives or leveraged
            products such as CFDs?
          </p>
         <div>
         <div className={style.inner}>
            <input type="radio" />
            <span>1-2 years</span>
          </div>
          <div className={style.inner}>
            <input type="radio" />
            <span>Less than a year</span>
          </div>
          <div className={style.inner}>
            <input type="radio" />
            <span>I've never traded</span>
          </div>
         </div>
        </div>
        <div className={style.item}>
          <p className={style.lbl}>
            Which experience level do you have with derivatives or leveraged
            products such as CFDs?
          </p>
         <div>
         <div className={style.inner}>
            <input type="radio" />
            <span>1-2 years</span>
          </div>
          <div className={style.inner}>
            <input type="radio" />
            <span>Less than a year</span>
          </div>
          <div className={style.inner}>
            <input type="radio" />
            <span>I've never traded</span>
          </div>
         </div>
        </div>


        <div className={style.item2}>
          <label className={style.lbl}>What is your main source of income?</label>
          <input type="text" placeholder="Type here..." />
        </div>
        <div className={style.item2}>
          <label className={style.lbl}>What is your main source of income?</label>
          <input type="text" placeholder="Type here..." />
        </div>

        <div className={style.actions} >
        <button className={style.action1} >Send</button>
        <button className={style.action2} >Close</button>
    </div>

      </div>
    </div>
  );
};

export default Experience;
