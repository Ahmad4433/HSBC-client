import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AdminOutlet = ({ code }) => {
    if (code === 1) { // <-- Check for the correct user code
        return (
            <div>
                <Outlet />
            </div>
        );
    } else {
        return <Navigate to='/login' />;
    }
}

export default AdminOutlet;
