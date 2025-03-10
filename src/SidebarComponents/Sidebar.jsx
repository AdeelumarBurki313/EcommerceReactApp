import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBox, FaRegBell, FaChartBar, FaWarehouse } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { HiOutlineChartPie } from "react-icons/hi";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { BsBox2 } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);


    toast.error("Logout successful", {
      position: "top-center",
      autoClose: 1500, 
      style: { backgroundColor: 'red', color: 'white', fontWeight: 'bold' },
    });

    setTimeout(() => {
      navigate("/");
    }, 1500); 
  };

  return (
    <div className="group flex flex-col fixed h-screen w-20 hover:w-64 transition-all duration-300 ease-in-out bg-[#89089f] hover:bg-white text-white border-r-2 border-transparent hover:border-[#89089f] z-70">
      <div className="flex flex-col justify-between h-full p-2 group-hover:p-4">
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard"
              className={`flex items-center justify-center group-hover:justify-start space-x-4 text-sm px-2 group-hover:px-4 py-2 rounded-md transition-all duration-300 ease-in-out
                ${isActive("/dashboard")
                    ? "bg-[#89089f] text-white"
                    : "bg-transparent text-white hover:bg-[#89089f] group-hover:text-black group-hover:bg-white"
                }`}
            >
              <CiHome className="text-xl min-w-[1.25rem]" />
              <span className="hidden group-hover:inline">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={`flex items-center justify-center group-hover:justify-start space-x-4 text-sm px-2 group-hover:px-4 py-2 rounded-md transition-all duration-300 ease-in-out
                ${isActive("/products")
                    ? "bg-[#89089f] text-white"
                    : "bg-transparent text-white hover:bg-[#89089f] group-hover:text-black group-hover:bg-white"
                }`}
            >
              <HiOutlineChartBarSquare className="text-xl min-w-[1.25rem]" />
              <span className="hidden group-hover:inline">Products</span>
            </Link>
          </li>
          <li>
            <Link
              to="/notifications"
              className={`flex items-center justify-center group-hover:justify-start space-x-4 text-sm px-2 group-hover:px-4 py-2 rounded-md transition-all duration-300 ease-in-out
                ${isActive("/notifications")
                    ? "bg-[#89089f] text-white"
                    : "bg-transparent text-white hover:bg-[#89089f] group-hover:text-black group-hover:bg-white"
                }`}
            >
              <FaRegBell className="text-xl min-w-[1.25rem]" />
              <span className="hidden group-hover:inline">Notifications</span>
            </Link>
          </li>
          <li>
            <Link
              to="/analytics"
              className={`flex items-center justify-center group-hover:justify-start space-x-4 text-sm px-2 group-hover:px-4 py-2 rounded-md transition-all duration-300 ease-in-out
                ${isActive("/analytics")
                    ? "bg-[#89089f] text-white"
                    : "bg-transparent text-white hover:bg-[#89089f] group-hover:text-black group-hover:bg-white"
                }`}
            >
              <HiOutlineChartPie className="text-xl min-w-[1.25rem]" />
              <span className="hidden group-hover:inline">Analytics</span>
            </Link>
          </li>
          <li>
            <Link
              to="/inventory"
              className={`flex items-center justify-center group-hover:justify-start space-x-4 text-sm px-2 group-hover:px-4 py-2 rounded-md transition-all duration-300 ease-in-out
                ${isActive("/inventory")
                    ? "bg-[#89089f] text-white"
                    : "bg-transparent text-white hover:bg-[#89089f] group-hover:text-black group-hover:bg-white"
                }`}
            >
              <BsBox2 className="text-xl min-w-[1.25rem]" />
              <span className="hidden group-hover:inline">Inventory</span>
            </Link>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="bg-transparent flex flex-wrap-reverse text-white hover:text-white group-hover:bg-fuchsia-800 py-2 px-4 rounded-md transition-all duration-300 ease-in-out"
        >
          Logout <TbLogout className="text-xl min-w-[1.25rem]" />
        </button>
      </div>

     
      <ToastContainer />
    </div>
  );
}

export default Sidebar;
