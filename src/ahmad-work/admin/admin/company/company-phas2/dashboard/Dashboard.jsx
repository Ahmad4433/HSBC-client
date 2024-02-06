import React from "react";
import style from "./dashboard.module.css";
import { Switch } from "@mui/material";
const Dashboard = () => {
  return (
    <div className={style.main}>
      <div className={style.card}>
        <p className={style.title}>Top Block</p>
        <div className={style.switch}>
          <span>Classic</span>
          <Switch color="success" defaultChecked={true} />
          <span>Customized</span>
        </div>
            <button className={style.action} >Reset</button>
      <div className={style.parent} >
      <div className={style.box}>
          <div className={style.item}>
            <span className={style.total}>Total</span>
            <span>on</span>
            <Switch color="success" />
            <span>off</span>
            <span className={style.amount}>119.0$</span>
          </div>
          <div className={style.item}>
            <span className={style.total}>Total</span>
            <span>on</span>
            <Switch color="success" />
            <span>off</span>
            <span className={style.amount}>119.0$</span>
          </div>
          <div className={style.item}>
            <span className={style.total}>Total</span>
            <span>on</span>
            <Switch color="success" />
            <span>off</span>
            <span className={style.amount}>119.0$</span>
          </div>
          <div className={style.item}>
            <span className={style.total}>Total</span>
            <span>on</span>
            <Switch color="success" />
            <span>off</span>
            <span className={style.amount}>119.0$</span>
          </div>
          <div className={style.item}>
            <span className={style.total}>Total</span>
            <span>on</span>
            <Switch color="success" />
            <span>off</span>
            <span className={style.amount}>119.0$</span>
          </div>

          <div className={style.actions} >
        <button className={style.action1} >Send</button>
        <button className={style.action2} >Close</button>
    </div>
        </div>


        <div className={style.box}>
          <div className={style.item}>
            <span className={style.total}>Total</span>
            <span>on</span>
            <Switch color="success" />
            <span>off</span>
            <span className={style.amount}>119.0$</span>
          </div>
          <div className={style.item}>
            <span className={style.total}>Total</span>
            <span>on</span>
            <Switch color="success" />
            <span>off</span>
            <span className={style.amount}>119.0$</span>
          </div>
          <div className={style.item}>
            <span className={style.total}>Total</span>
            <span>on</span>
            <Switch color="success" />
            <span>off</span>
            <span className={style.amount}>119.0$</span>
          </div>
          <div className={style.item}>
            <span className={style.total}>Total</span>
            <span>on</span>
            <Switch color="success" />
            <span>off</span>
            <span className={style.amount}>119.0$</span>
          </div>
          <div className={style.item}>
            <span className={style.total}>Total</span>
            <span>on</span>
            <Switch color="success" />
            <span>off</span>
            <span className={style.amount}>119.0$</span>
          </div>
    <div className={style.actions} >
        <button className={style.action1} >Send</button>
        <button className={style.action2} >Close</button>
    </div>

        </div>
      </div>

      </div>
    </div>
  );
};

export default Dashboard;
