import React from 'react'
import style from './payment.module.css'
import SalerPayment from './payment-by-salers/SalerPayment'
import {Routes,Route} from 'react-router-dom'
const Payment = () => {
  return (
 <div>
    <SalerPayment/>
 </div>
  )
}

export default Payment
