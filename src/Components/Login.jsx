import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi";
import { IoEyeSharp } from "react-icons/io5";
import { HiMiniEyeSlash } from "react-icons/hi2";
import silder from "../assets/slider.png";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import shop from '../assets/shop.png'

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Please enter both email and password.", {
        position: "top-center",
        autoClose: 1500,
        style: { backgroundColor: "#FFA500", color: "white", fontWeight: "bold" },
      });
      return; 
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  
    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 1500,
        style: { backgroundColor: "#89089f", color: "white", fontWeight: "bold" },
      });

      localStorage.setItem("isLoggedIn", "true");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500); 
    } else {
      toast.error("Invalid credentials. Please try again.", {
        position: "top-center",
        autoClose: 1500,
        style: { backgroundColor: "#FFA500", color: "white", fontWeight: "bold" },
      });
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="flex w-full h-full justify-center items-center p-2">
        <div className="flex flex-col md:flex-row items-center justify-center bg-white max-w-4xl w-full rounded-lg p-6 space-y-6 md:space-y-0 md:space-x-8 shadow-lg">
          <div className="flex flex-col items-center md:items-start justify-center space-y-4 w-full md:w-1/2 bg-[#89089f] text-white rounded-lg p-6 py-12">
            <div className="flex flex-col items-center space-y-4">
              <img
                src={shop}
                alt="Shop Image"
                className="w-3/4"
              />
              <h1 className="font-medium text-xl">Welcome to our shop</h1>
              <p className="text-xs font-light">Purchase imported shoes</p>
              <img src={silder} alt="Slider" />
            </div>
          </div>

          <div className="flex flex-col space-y-4 w-full md:w-1/2 py-8">
            <h1 className="text-center text-2xl font-medium mb-8">Login</h1>

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 space-x-2 mx-4">
              <HiOutlineMail className="text-gray-500" />
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full focus:outline-none py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 space-x-2 mx-4">
              <HiOutlineLockClosed className="text-gray-500" />
              <input
                id="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                className="w-full focus:outline-none py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div onClick={togglePasswordVisibility} className="cursor-pointer">
                {passwordVisible ? (
                  <HiMiniEyeSlash className="text-gray-500" />
                ) : (
                  <IoEyeSharp className="text-gray-500" />
                )}
              </div>
            </div>

            <div className="text-right mx-4">
              <a href="#" className="text-blue-500 text-sm">
                Forgot Password?
              </a>
            </div>

            <button
              className="bg-fuchsia-800 text-white rounded-full py-2 px-6 text-sm w-full mx-4"
              onClick={handleLogin}
            >
              Log in
            </button>

            <div className="text-center mx-4">
              <Link to="/register" className="text-[#848484] text-sm">
                Have no account yet?
              </Link>
            </div>

            <Link to="/register">
              <button className="bg-white text-[#89089f] rounded-full py-2 px-6 text-sm border-1 border-[#89089f] w-full mx-4">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
