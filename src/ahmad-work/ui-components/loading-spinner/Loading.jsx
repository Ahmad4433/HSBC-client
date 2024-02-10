import React from 'react'
import {CircularProgress} from '@mui/material'
import style from './loading.module.css'
const Loading = () => {
  return (
    <div className={style.model}>
    <CircularProgress color="secondary" />
  </div>
  )
}

export default Loading
