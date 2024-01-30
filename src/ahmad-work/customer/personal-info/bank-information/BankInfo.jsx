import React,{useState} from 'react'
import style from './bankInfo.module.css'
import Idenity from '../idenity&contact/Idenity'
import StepBar from '../../../common/step-bar/StepBar'
import {useLocation} from 'react-router-dom'
const BankInfo = () => {
   const location = useLocation()

   const [id,setId] = useState(location.pathname.split('p')[1])
   
  return (
    <div className={style.main} >
        <div className={style.section} >

        <StepBar id={id} />
        <Idenity title='Bank Information'/>

        </div>

    </div>
  )
}

export default BankInfo
