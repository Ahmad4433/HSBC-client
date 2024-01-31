import React from "react";
import style from "./bar.module.css";
import { IoMdMore } from "react-icons/io";
const Bar = () => {
  return (
    <div className={style.main}>
      <div className={style.section}>

    <div className={style.bar} >

    <div className={style.left1} >
    Statistics
    </div>
    <div className={style.right1} >
        <span>Now</span>
        <span>Today</span>
        <span>Month</span>
        <IoMdMore className={style.more} />
    </div>

    </div>


        <div className={style.chart}>
          <div className={style.left}>
       
            <p>September</p>
            <p>October</p>
            <p>November</p>
            
            <p>December</p>
          </div>

          <div className={style.right}>
            <span className={style.line1}></span>
            <span className={style.line2}></span>
            <span className={style.line3}></span>
            <span className={style.line4}></span>
          </div>
        </div>
        <div className={style.bottomB} >
            <span>10</span>
            <span>20</span>
            <span>30</span>
            <span>40</span>
            <span>50</span>
            <span>60</span>
            <span>70</span>
            <span>80</span>
            <span>90</span>
        </div>
      </div>
    </div>
  );
};

export default Bar;
