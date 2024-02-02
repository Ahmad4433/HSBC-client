import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const UserOutlet = ({ code }) => {
       if (code === 2) {
        return (
            <div>
                <Outlet />
                <Navigate to='/home' />
            </div>
        );
    } else {
        return <Navigate to="/login" />;
    }
}

export default UserOutlet;
