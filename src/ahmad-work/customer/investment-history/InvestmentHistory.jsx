import React from 'react'
import styles from './investmentHis.module.css'
import { BsTicketPerforated } from "react-icons/bs";
const InvestmentHistory = () => {
  return (
    <div className={styles.main} >
        <div className={styles.section} >

    <div className={styles.content} >
        <p className={styles.history} >Investment History</p>
        <p className={styles.goto} >You not buy investment yet, Go buy First</p>
        <div className={styles.btn} >
    <BsTicketPerforated className={styles.ticket} />
    <span className={styles.buy} >Buy Ticket</span>

        </div>
    </div>

        </div>
    </div>
  )
}

export default InvestmentHistory
