import React from "react";
import Sidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
