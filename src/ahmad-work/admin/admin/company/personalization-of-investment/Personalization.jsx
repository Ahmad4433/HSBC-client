import React from 'react'
import style from './personalization.module.css'
import SavingFunds from './saving-funds/SavingFunds'
const Personalization = () => {
  return (

    <div className={style.main} >
         <p className={style.title} >Personalization of Investment</p>
         <div className={style.main2} >
       
       <SavingFunds title='Savings Fund' />
       <SavingFunds title='CAR PARK' />
       <SavingFunds title='FINANCIAL INVESTMENTS' />
       <SavingFunds title='HOTELS' />
       </div>
    </div>

  )
}

export default Personalization
