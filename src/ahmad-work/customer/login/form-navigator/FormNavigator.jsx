import React from 'react'
import {Link} from 'react-router-dom'
import style from './formNavigator.module.css'
const FormNavigator = ({link,title,title2}) => {
  return (
    <div className={style.navigate}>
    <p>{title2}?</p>
    <Link to={`/${link}`}>{title}!</Link>
  </div>
  )
}

export default FormNavigator
