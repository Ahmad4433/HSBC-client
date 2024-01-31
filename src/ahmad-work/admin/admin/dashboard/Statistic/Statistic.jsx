import React from 'react'
import TopLosers from '../General Statistic/TopLosers'
import Total from '../General Statistic/Total'
import TopGainer from '../General Statistic/TopGainer'
import style from './statistc.module.css'
import ToggleBar from './ToggleBar'
const Statistic = () => {
  return (
    <div className={style.main} >
        <ToggleBar/>
        <div className={style.level} >
          <Total/>
          <TopGainer/>
          <TopLosers/>
       
        </div>

    </div>
  )
}

export default Statistic
