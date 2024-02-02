import {createSlice} from '@reduxjs/toolkit'

const loginSlice = createSlice({

    name:'login',
    initialState:{
        userCode:null,
        loginStatus:null
    },
    reducers:{

        setUserCode(state,action){
           
            state.userCode = action.payload
        },
        loginStatus(state,action){
            state.loginStatus = action.payload
        }

    }

})

export const loginActions = loginSlice.actions
export default loginSlice