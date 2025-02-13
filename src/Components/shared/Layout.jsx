import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../SidebarComponents/Sidebar'; // Assuming Sidebar is properly styled

export default function Layout() {
  return (
    <div style={{ overflowX: "hidden" }} className="flex flex-row bg-gray-200 h-screen w-screen">
      <Sidebar />
      <div className="py-10 pl-28 px-8 max-h-screen w-[100%]">
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
}
