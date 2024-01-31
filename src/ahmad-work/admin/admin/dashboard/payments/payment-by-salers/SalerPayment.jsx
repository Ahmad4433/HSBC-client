import React from 'react'
import PaymentTable from './PaymentTable'
const SalerPayment = () => {
  return (
    <div>
     <PaymentTable title='PAYMENTS BY SELLERS / ADMINISTRATOR/ MANAGERS' />
    <div  >
    <PaymentTable title='PAYMENTS BY CAMPAIGNS'/>
     <PaymentTable title='EVALUATIONS' />
     <PaymentTable title='CAMPAIGNS' />
    </div>
    </div>
  )
}

export default SalerPayment
