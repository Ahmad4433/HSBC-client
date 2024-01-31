import React from 'react'
import styles from './data.module.css'
import { AiOutlineStock } from "react-icons/ai";
const Data = ({title,num,cat}) => {
  return (
    <div className={styles.main} >
      <div className={styles.section} >
        <div className={styles.card} >
           <div className={styles.stCard} >
           <p className={styles.title} >{title}</p>
            <div  className={styles.inner} ><AiOutlineStock className={styles.stock} />
                <p className={styles.variation} >10.0%</p>
            </div>
           </div>
           <p className={styles.num} >{num}</p>
           <p className={styles.cate} >{cat}</p>
        </div>
      </div>
    </div>
  )
}

export default Data
