import React from 'react'
import {Link} from 'react-router-dom'
const FormNavigator = () => {
  return (
    <div className={style.navigate}>
    <p>Already have an account?</p>
    <Link to={"/signup"}>Sign up!</Link>
  </div>
  )
}

export default FormNavigator
