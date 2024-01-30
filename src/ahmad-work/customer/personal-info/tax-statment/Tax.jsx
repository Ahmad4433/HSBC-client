import React from 'react'
import Idenity from '../idenity&contact/Idenity'
import styles from './tax.module.css'
import StepBar from '../../../common/step-bar/StepBar'
const Tax = () => {
  return (
    <div className={styles.main} >

    <div className={styles.section} >
      <StepBar/>
      <Idenity title='Upload Tax Statment' />

    </div>
    </div> 
  )
}

export default Tax
