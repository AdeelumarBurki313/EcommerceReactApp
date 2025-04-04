import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Components/Registration";
import Dashboard from "./SidebarComponents/Dashboard";
import Products from "./SidebarComponents/Products";
import Inventory from "./SidebarComponents/Inventory";
import Notifications from "./SidebarComponents/Notifications";
import Analytics from "./SidebarComponents/Analytics";
import Layout from "./Components/shared/Layout";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import "./App.css";
import Mycart from "./Components/Mycart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route element={<Layout />}>
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
          <Route
            path="/products"
            element={<PrivateRoute element={<Products />} />}
          />
          <Route
            path="/inventory"
            element={<PrivateRoute element={<Inventory />} />}
          />
          <Route
            path="/notifications"
            element={<PrivateRoute element={<Notifications />} />}
          />
          <Route
            path="/analytics"
            element={<PrivateRoute element={<Analytics />} />}
          />
          <Route
            path="/Mycart"
            element={<PrivateRoute element={<Mycart />} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
