import React from 'react'
import {CircularProgress} from '@mui/material'
const Loading = () => {
  return (
    <div className={style.model}>
    <CircularProgress color="secondary" />
  </div>
  )
}

export default Loading
