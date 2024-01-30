import React from 'react'
import Idenity from '../idenity&contact/Idenity'
import StepBar from '../../../common/step-bar/StepBar'
import styles from './info.module.css'
import {useLocation,useParams} from 'react-router-dom'
import {useState} from 'react'
const Info = () => {
  const locaton = useLocation()
  const params = useParams()
  const [id,setId] = useState(locaton.pathname.split('p')[1])
  return (
    <div className={styles.main} >
<div className={styles.section} >
<StepBar id={id} />
      <Idenity title={'Upload Your Identity'} />
</div>
    
    </div>
  )
}

export default Info
