import React from 'react'
import {Snackbar,Alert} from '@mui/material'
import {useDispatch} from 'react-redux'
import { uiActions } from '../../../store/slices/ui-slice'

const InfoMessage = ({error}) => {
    const dispatch = useDispatch()
  return (
    <div>
      
      <Snackbar
          open={error}
          onClose={() => dispatch(uiActions.showError(null))}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            open={error}
            severity="error"
            onClose={() => dispatch(uiActions.showError(null))}
          >
            {<div className={style.httpErr}>{error}</div>}
          </Alert>
        </Snackbar>

    </div>
  )
}

export default InfoMessage
