import React from 'react'
import style from './alternative.module.css'
import google1 from '../../../assets/google 1.png'
import face1 from '../../../assets/facebook 1.png'
const Alternative = () => {
  return (
    <div className={style.main} >
      
      <div className={style.actions} >
        <div className={style.image1}  >
        <img src={google1} />
        <p>Google</p>
        </div>
      <div className={style.image2}  >
      <img src={face1} />
      <p>Facebook</p>
      </div>
      </div>
    </div>
  )
}

export default Alternative
