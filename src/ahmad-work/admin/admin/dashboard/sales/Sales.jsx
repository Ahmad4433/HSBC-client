import React from "react";
import WeeklySale from "./weekly-sale/WeeklySale";
import Bar from "../sales/charts/bar-chart/Bar";
import style from "./sales.module.css";
const Sales = () => {
  return (
    <div>
      <div className={style.card}>
        <div className={style.section}>
        
          <WeeklySale title='This week' color={"white"} />
          <WeeklySale title='This month' color="#ccc" />
        </div>
        <Bar />
      </div>
    </div>
  );
};

export default Sales;
