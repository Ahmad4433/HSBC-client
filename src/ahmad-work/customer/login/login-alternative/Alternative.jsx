import React from 'react'
import style from './alternative.module.css'
import google1 from '../../../assets/google 1.png'
import face1 from '../../../assets/facebook 1.png'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';


const Alternative = () => {
  return (
    <div className={style.main} >
      
      <div className={style.actions} >
        <div className={style.image1}  >
    <GoogleIcon color='secondary' fontSize='large' />
     
        <p>Google</p>
        </div>
      <div className={style.image2}  >
  
        <FacebookRoundedIcon fontSize='large' color='primary' />
      <p>Facebook</p>
      </div>
      </div>
    </div>
  )
}

export default Alternative
