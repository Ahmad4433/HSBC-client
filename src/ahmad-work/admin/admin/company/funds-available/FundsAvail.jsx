import React from 'react'
import style from './fundsAvail.module.css'
import { AiOutlineCamera } from "react-icons/ai";
const FundsAvail = () => {
  return (
    <div  className={style.main} >
       <div className={style.card} >
        <p className={style.title} >Funds available</p>
       <div className={style.item1}>
          <label className={style.lbl}>Select plan of user</label>
          <input type="text" placeholder="Find Value..." />
        </div>
         <div className={style.item1}>
          <label className={style.lbl}>Select plan</label>
          <input type="text" placeholder="Find Value..." />
        </div>
         <div className={style.item1}>
          <label className={style.lbl}>Select currency</label>
          <input type="text" placeholder="Find Value..." />
        </div>
         <div className={style.item1}>
          <label className={style.lbl}>Name:</label>
          <input type="text" placeholder="Find Value..." />
        </div>

        <div className={style.mega}>
          <div className={style.mega1}>
            <div className={style.item2}>
              <label className={style.lbl}>Release of funds</label>
              <input type="text" placeholder="Type here..." />
            </div>
            <div className={style.item2}>
              <label className={style.lbl}>Minimum of positions</label>
              <input type="text" placeholder="Type here..." />
            </div>
          </div>
          <div className={style.mega2}>
            <div className={style.item2}>
              <label className={style.lbl}>Guarantee up to</label>
              <input type="text" placeholder='Type Here...' />
            </div>
            <div className={style.item2}>
              <label className={style.lbl}>Commission</label>
              <input type="text" placeholder='Type Here...' />
            </div>
          </div>
        </div>

        <div className={style.item2}>
              <label className={style.lbl}>Order Status</label>
              <input type="text" placeholder="Type here..." />
            </div>

            <div className={style.actions}>
          <button className={style.action1}>Send</button>
          <button className={style.action2}>Close</button>
        </div>

       </div>

    </div>
  )
}

export default FundsAvail
