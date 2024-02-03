import React, { useEffect, useState } from 'react';
import { Navigate,Outlet } from 'react-router-dom';

const SuperCom = () => {
  const [loading, setLoading] = useState(true);
  const [adminCode, setAdminCode] = useState(null);

  useEffect(() => {
    // Fetch adminCode from localStorage
    const adminCodeFromLocalStorage = localStorage.getItem('userCode');
    setAdminCode(adminCodeFromLocalStorage);
    setLoading(false); // Mark loading as false once adminCode is fetched
  }, []);

  // If still loading, return null or a loading indicator
  if (loading) {
    return null; // or return a loading indicator
  }

  // Once loading is complete, render based on adminCode
  if (adminCode !== '1') {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default SuperCom;