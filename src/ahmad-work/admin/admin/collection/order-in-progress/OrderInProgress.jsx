import React from 'react'
import twowayarrow from '../../../../assets/2wayarrow.png'
import style from './orderInProgress.module.css'
import PaymentTable from '../../dashboard/payments/payment-by-salers/PaymentTable'
const OrderInProgress = () => {
  return (
    <div className={style.main} >
      <PaymentTable title='Order in Progress'  />
    </div>
  )
}

export default OrderInProgress
