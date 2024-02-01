import React from 'react'
import style from './payment.module.css'
import SalerPayment from './payment-by-salers/SalerPayment'
import {Routes,Route} from 'react-router-dom'
// import ReminderOfDay from '../Call Diary/reminder-of-the-day/ReminerOfDay'
const Payment = () => {
  return (
 <div>
    <SalerPayment/>
    {/* <ReminderOfDay/> */}
 </div>
  )
}

export default Payment
