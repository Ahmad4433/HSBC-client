import React from 'react'
import style from './topGainer.module.css'
import { AiOutlineDollar } from "react-icons/ai";

const TopGainer = () => {
  return (
    <div className={style.main}  >
    <div className={style.section} >

      <div className={style.card} >
        <div className={style.first} >
          <p className={style.title} >Top 3 Gainers</p>
           < AiOutlineDollar  className={style.icon1 } />
        </div>
        <div className={style.second} >
          <p className={style.title} >Fund Pe Client</p>
          <p className={style.icon} >$121.121.132</p>
        </div>
        <div>
        
          <p className={style.icon} >$121.121.132</p>
        </div>
        <div>
         
          <p className={style.icon} >$0</p>
        </div>
        <div>
        
          <p className={style.icon} >$0</p>
        </div>
        <div>
        
          <p className={style.icon} >$0</p>
        </div>
        <div>
        
          <p className={style.icon} >$0</p>
        </div>
      </div>
    </div>
 
</div>
  )
}

export default TopGainer
