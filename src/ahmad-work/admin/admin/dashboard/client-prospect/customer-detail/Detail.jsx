import React from 'react'
import style from './detail.module.css'
import { RiGroupLine } from "react-icons/ri";
import { FiMonitor } from "react-icons/fi";
const Detail = ({title,num,icon}) => {
  return (
    <div className={style.main} >
      
    <div className={style.section} >
        <div className={style.card} >
            <span  className={style.bg} >
            < RiGroupLine className={style.icon} />
            </span>
    <div className={style.right} >
        <p className={style.title} >{title}</p>
        <p className={style.num} >{num}</p>
        <p className={style.month} >16% this month</p>
    </div>
        </div>
    </div>

    </div>
  )
}

export default Detail
