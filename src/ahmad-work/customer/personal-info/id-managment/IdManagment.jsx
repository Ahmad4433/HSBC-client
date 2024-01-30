import React,{useState} from 'react'
import style from './idManagment.module.css'
import Idenity from '../idenity&contact/Idenity'
import StepBar from '../../../common/step-bar/StepBar'
import {useLocation,useParams} from 'react-router-dom'
const IdManagment = () => {

  const locaton = useLocation()
  const params = useParams()
  const [id,setId] = useState(locaton.pathname.split('p')[1])
  console.log(locaton.pathname)
  return (
    <div className={style.main} >
      <div className={style.section} >
        <StepBar id={id} />
        <Idenity title='Upload Your Address (Approve)' />
      </div>
  
    </div>
  )
}

export default IdManagment
