import React from 'react'
import style from './newStatus.module.css'
const NewStatus = () => {
  return (
    <div className={style.main} >
        <div className={style.card} >

<p className={style.title} >Validate The New Status</p>

    <div className={style.section} >
    <div>
        <span className={style.first} >Number of Visit :</span>
        <span>14</span>
    </div>
    <div>
        <span className={style.first} >Last Login :</span>
        <span>11-01-2024 / 14:34</span>
    </div>
    <div>
        <span className={style.first} >Queued Orders :</span>
        <span>(0.01 $)</span>
    </div>
    <div>
        <span className={style.first} >Paid Orders :</span>
        <span>(0.01 $)</span>
    </div>

    </div>

        </div>
    </div>
  )
}

export default NewStatus
