import React from 'react'
import style from './push.module.css'
import {Switch} from '@mui/material'
const Push = () => {
  return (
    <div className={style.main} >

        <div className={style.card} >
        <p className={style.title} >PERSONAL BANNER AND BLOCKS</p>
        <div className={style.bannerS2}>
     
          <div>
            <span>on</span>
            <Switch color="success" />
            <span>off</span>
          </div>
        </div>

        <div className={style.mega}>
          <div className={style.mega1}>
            <div className={style.item2}>
              <label className={style.lbl}>Title</label>
              <input type="text" placeholder="Type here..." />
            </div>
            <div className={style.item2}>
              <label className={style.lbl}>Subtitle</label>
              <input type="text" placeholder="Type here..." />
            </div>
          </div>
          <div className={style.mega2}>
            <div className={style.item2}>
              <label className={style.lbl}>Link Title</label>
              <input type="text" placeholder='Type Here...' />
            </div>
            <div className={style.item2}>
              <label className={style.lbl}>Upload</label>
              <input type="file" />
            </div>
          </div>
        </div>
        <button className={style.action1}>send</button>

        </div>
    
    </div>
  )
}

export default Push
