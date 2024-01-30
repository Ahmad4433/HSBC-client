import React, { useState } from 'react'
import Idenity from '../idenity&contact/Idenity'
import style from './address.module.css'
import {useParams,useLocation} from 'react-router-dom'
import StepBar from '../../../common/step-bar/StepBar'
const Address = () => {
  const locaton = useLocation()
  const params = useParams()
  const [id,setId] = useState(locaton.pathname.split('p')[1])



  return (
    <div className={style.main} >
      <div className={style.section} >
      <StepBar id={id} />
      <Idenity title='Upload Selfie' />
      </div>

    </div>
  )
}

export default Address
