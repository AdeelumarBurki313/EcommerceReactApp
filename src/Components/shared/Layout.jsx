import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../../SidebarComponents/Sidebar'; 
import { FiShoppingCart } from 'react-icons/fi';

export default function Layout() {
  return (
    <div style={{ overflowX: "hidden" }} className="flex bg-gray-200 h-screen w-screen">
      <Sidebar />
      <div className="py-10 pl-28 px-8 max-h-screen w-[100%]">
      <div className="flex  justify-end">
        <Link to={"/Mycart"}>
          <button className="text-white size-6 font-light animate-bounce w-25 h-10 rounded-2xl bg-fuchsia-900 flex items-center">
            <FiShoppingCart className="text-2xl pb-2 mr-1" />
            My Cart
          </button>
        </Link>
      </div>
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
}
