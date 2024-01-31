import React, { useState } from "react";
import style from "./toggleBar.module.css";
const ToggleBar = () => {

  const [toggle,setToggle] = useState(false)

  const clickHandler = ()=>{

    setToggle(!toggle)
  }

  return (
    <div className={style.main}>
      <div className={style.section}>
        <div className={style.toggle}>
          <div onClick={clickHandler}  className={`${style.step1} ${toggle ? style.click :''} `} >
            <p>Call Diary</p>
          </div>
          <div onClick={clickHandler}  className={`${style.step2} ${!toggle ? style.click:''} ` } >
            <p>General Statistic</p>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default ToggleBar;
