import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const UserOutlet = () => {
const [loading,setLoading] = useState(true)
const [ code,setCode] = useState(null)    
useEffect(()=>{

const userCode = localStorage.getItem('userCode')
setCode(userCode)
setLoading(false)
},[])

    
    if (loading) {
        return null;
    }

    
    if (code !== '2') {
        
        return <Navigate to='/login' />
    } else {
        return <Outlet/>;
    }
}

export default UserOutlet;
