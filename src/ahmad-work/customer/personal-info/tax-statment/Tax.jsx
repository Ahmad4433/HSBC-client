import React,{useState} from 'react'
import Idenity from '../idenity&contact/Idenity'
import styles from './tax.module.css'
import StepBar from '../../../common/step-bar/StepBar'
import { useLocation} from 'react-router-dom'
const Tax = () => {
const location = useLocation()
  const [id,setId] = useState(location.pathname.split('p')[1])
  return (
    <div className={styles.main} >

    <div className={styles.section} >
      <StepBar id={id} />
      <Idenity title='Upload Tax Statment' />

    </div>
    </div> 
  )
}

export default Tax
