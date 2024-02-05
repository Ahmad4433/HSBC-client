import React from 'react'
import style from './company.module.css'
import Detail from './detail/Detail'
import FollowUp from './customer-follow-up/FollowUp'
import FundsAvail from './funds-available/FundsAvail'
import Taking from './taking-a-stank/Taking'
const Company = () => {
  return (
    <div>
      <Detail/>
      <FollowUp/>
      <FundsAvail/>
      <Taking/>
    </div>
  )
}

export default Company
