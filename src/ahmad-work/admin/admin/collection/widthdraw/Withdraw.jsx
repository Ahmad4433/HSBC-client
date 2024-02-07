import React from 'react'
import style from './withdraw.module.css'
import WithdrawTable from './withdraw-table/WithdrawTable'
const Withdraw = () => {
  return (
    <div className={style.main} >
        <p className={style.title} >FUNDS PER CLIENT: €495,678.47</p>
        <div className={style.card} >

            <div className={style.view} >
                <div className={style.head} >
                    <p>Seller</p>
                    <p>Fund Per Client</p>
                </div>
                <div className={style.table} >
                    <p>Julien Chauveau (Manager)</p>
                    <p>€50.00</p>
                </div>
            </div>
            <WithdrawTable/>
        </div>

    </div>
  )
}

export default Withdraw
