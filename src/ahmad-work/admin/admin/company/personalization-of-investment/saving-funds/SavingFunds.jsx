import React from "react";
import style from "./savngFunds.module.css";
import { Switch } from "@mui/material";
const SavingFunds = ({ title }) => {
  const array = "number";

  return (
    <div className={style.main}>
      <div className={style.card}>
        <p className={style.title}>{title}</p>
        {Array.from(array).map((item, index) => {
          return (
            <div key={index} className={style.item}>
              <div className={style.left}>
                <span className={style.detail1}>
                  Standard Housing Perspective Fund
                </span>
                <span className={style.detail2}>End of subscription</span>
              </div>
              <div className={style.right}>
                <span>on</span>
                <Switch size="large" color="success" defaultChecked={true} />
                <span>off</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavingFunds;
