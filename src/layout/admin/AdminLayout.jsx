import React from "react";
import { Sidebar } from "../../components/admin/common";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <div className="adminLayout">
        <div className="adminLayout-container">
          <div className="adminLayout-container-sidebar">
            <Sidebar />
          </div>
          <div className="adminLayout-container-outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
