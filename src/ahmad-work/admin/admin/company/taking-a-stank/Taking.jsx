import React from "react";
import style from "./taking.module.css";
const Taking = () => {
  return (
    <div className={style.main}>
      <div className={style.card}>
        <p className={style.title}>Taking a Stand</p>

        <div className={style.item1}>
          <label className={style.lbl}>Choose the Type of Transaction</label>
          <input type="text" placeholder="Find Value..." />
        </div>
        <p className={style.longD} >
          The "Investment" mode offers negotiated prices on certain values.These
          negotiations can be set in the tab "ADDING A NEGOTIATION ON THE
          COURSE" in the "Settings" page available in the menu.This mode does
          not give access to leverage or stop limits up or down.“Trading” mode
          offers current cryptocurrencies prices with all trading options.
        </p>
        <div className={style.option}>
          <select>
            <option>Trading</option>
          </select>
        </div>
        <div className={style.option}>
          <select>
            <option>Purchase Without Leverage</option>
          </select>
        </div>

        <div className={style.item1}>
          <label className={style.lbl}>Enter the name here...</label>
          <input type="text" placeholder="Find Value..." />
        </div>
        <div className={style.item1}>
          <label className={style.lbl}>Product</label>
          <input type="text" placeholder="Find Value..." />
        </div>

        <div className={style.option}>
          <select>
            <option>SELECT CUSTOMER'S ACCOUNT FROM WHICH </option>
          </select>
        </div>

        <div className={style.item1}>
          <label className={style.lbl}>Available funds</label>
          <input type="text" placeholder="Find Value..." />
        </div>
        <div className={style.item1}>
          <label className={style.lbl}>
            SELECT DATE AND TIME OF TRANSACTION
          </label>
          <input type="text" placeholder="Find Value..." />
        </div>
        <div className={style.item1}>
          <label className={style.lbl}>Currency</label>
          <input type="text" placeholder="Find Value..." />
        </div>
        <div className={style.item1}>
          <label className={style.lbl}>
            INDICATE THE COURSE AT WHICH YOU PASS THIS TRANSACTION
          </label>
          <input type="text" placeholder="Find Value..." />
        </div>
        <div className={style.item1}>
          <label className={style.lbl}>relevant quantity</label>
          <input type="text" placeholder="Find Value..." />
        </div>

        <div className={style.option}>
          <select>
            <option>LEVERAGE EFFECT FOR THIS TRANSACTION</option>
          </select>
        </div>

        <div className={style.check} >
       
          <input type="checkbox" />
          <span>PLACE STOP LIMIT</span>
        </div>
        <div className={style.actions}>
          <button className={style.action1}>Send</button>
          <button className={style.action2}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Taking;
