import React from 'react'
import style from './total.module.css'
import { AiOutlineDollar } from "react-icons/ai";

const Total = () => {
  return (
    <div className={style.main}  >
        <div className={style.section} >

          <div className={style.card} >
            <div className={style.first} >
              <p  className={style.title1} >Total</p>
               < AiOutlineDollar  className={style.icon1 } />
            </div>
            <div>
              <p className={style.title} >Fund Pe Client</p>
              <p className={style.icon} >$121.121.132</p>
            </div>
            <div>
              <p className={style.title} >Withdraw Amount</p>
              <p className={style.icon} >$121.121.132</p>
            </div>
            <div>
              <p className={style.title} >Invested Amount</p>
              <p className={style.icon} >$0</p>
            </div>
            <div>
              <p className={style.title} >Commission</p>
              <p className={style.icon} >$0</p>
            </div>
            <div>
              <p className={style.title} >Potential Gain</p>
              <p className={style.icon} >$0</p>
            </div>
            <div>
              <p className={style.title} >Potential Gain</p>
              <p className={style.icon} >$0</p>
            </div>
          </div>
        </div>
     
    </div>
  )
}

export default Total
