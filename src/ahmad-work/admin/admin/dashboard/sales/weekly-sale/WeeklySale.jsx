import React from 'react'
import style from './weeklySale.module.css'
import Pi from '../charts/pi-chart/Pi'
const WeeklySale = ({color,title}) => {



  return (
    <div>
      <div style={{backgroundColor:color}} className={style.section} >
   <div >     <p className={style.fiT} >{title} ?</p>
        <p  className={style.seT} >This Month</p>
        <p className={style.thT} >$4055.56</p>
        <p className={style.frT} >68.2% more earnings than last month.</p></div>
        <Pi/>
      </div>
      
     

    </div>
  )
}

export default WeeklySale







