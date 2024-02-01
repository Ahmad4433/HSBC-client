import React from "react";
import { Sidebar } from "../../components/admin/common";
import { Outlet } from "react-router-dom";
import { TopBar } from "../../components/common";

const AdminLayout = () => {
  return (
    <>
      <div className="adminLayout">
        <div className="adminLayout-container">
          <div className="adminLayout-container-sidebar">
            <Sidebar />
          </div>
          <div className="adminLayout-container-outlet">
            <div className="adminLayout-container-outlet-topbar">
              <TopBar />
            </div>
            <div className="adminLayout-container-outlet-outlet">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
