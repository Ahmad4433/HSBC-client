import React from 'react'
import style from './history.module.css'
const History = () => {
  return (
    <div className={style.main} >
 <div className={style.card}>

    <div className={style.actions} >
        <button className={style.btn1} >Show Status History</button>
        <button className={style.btn2} >Show Comment History</button>
    </div>
    <textarea className={style.his} cols={30} rows={10} />
 </div>

    </div>
  )
}

export default History
