import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UserOutlet from './user-outlet/UserOutlet';
import AdminOutlet from './admin-outlet/AdminOutlet';
import { Outlet,Navigate } from 'react-router-dom';


const SuperCom = () => {
// const [userCode,setUserCode] = useState(localStorage.getItem('userCode'))
// const isLoading = useSelector(state=>state.ui.loading)
// if(isLoading){
//     return
// }
const userCode =2



    useEffect(()=>{
console.log(userCode)

    },[userCode])




    if(userCode === 2){
        return <Outlet/>
    }else{
          return  <Navigate to='/login' />
    }
}

export default SuperCom;
