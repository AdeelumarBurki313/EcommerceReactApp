import React, { useState } from 'react'; 
import { FaUser } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { IoEyeSharp } from "react-icons/io5"; 
import { HiMiniEyeSlash } from "react-icons/hi2"; 
import silder from '../assets/slider.png';
import { Link, useNavigate } from 'react-router-dom';

function Registration() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRePasswordVisibility = () => {
    setRePasswordVisible(!rePasswordVisible);
  };

  const handleRegister = () => {
   
    if (password !== rePassword) {
      alert('Passwords do not match! Please try again.');
      return;
    }

    // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if a user already exists with this email
    const userExists = existingUsers.some((user) => user.email === email);

    if (userExists) {
      alert('User already exists with this email');
    } else {
      // Create a new user object
      const newUser = { name, email, password };

      // Add the new user to the existing users array
      existingUsers.push(newUser);

      // Store the updated users array back in localStorage
      localStorage.setItem('users', JSON.stringify(existingUsers));

      alert('Account successfully created');
      navigate('/login'); // Redirect to login after successful registration
    }
  };

  return (
    <div className='flex w-full h-screen justify-center items-center'>
      <div className="flex w-full h-full justify-center items-center p-4 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center bg-white max-w-4xl w-full rounded-lg p-6 space-y-6 md:space-y-0 md:space-x-8 shadow-lg overflow-hidden">
          <div className="hidden sm:flex flex-col items-center md:items-start justify-center space-y-4 w-full md:w-1/2 bg-[#89089f] text-white rounded-lg p-6 py-12">
            <div className="flex flex-col items-center space-y-4">
              <img src="https://websharthi.com/svg/e1.png" alt="Imported Shoes" className="w-3/4" />
              <h1 className='font-medium text-xl'>Welcome to our shop</h1>
              <p className='text-xs font-light'>Purchase imported shoes</p>
              <img src={silder} alt="Slider" />
            </div>
          </div>

          <div className="flex flex-col space-y-4 w-full md:w-1/2 py-8">
            <h1 className='text-center text-2xl font-medium mb-8'>Registration</h1>

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 space-x-2 mx-4">
              <FaUser className="text-gray-500" />
              <input
                type="text"
                placeholder="Name"
                className="w-full focus:outline-none py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 space-x-2 mx-4">
              <HiOutlineMail className="text-gray-500" />
              <input
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
                type={passwordVisible ? 'text' : 'password'}
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

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 space-x-2 mx-4">
              <HiOutlineLockClosed className="text-gray-500" />
              <input
                type={rePasswordVisible ? 'text' : 'password'}
                placeholder="Re-enter Password"
                className="w-full focus:outline-none py-2"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
              <div onClick={toggleRePasswordVisibility} className="cursor-pointer">
                {rePasswordVisible ? (
                  <HiMiniEyeSlash className="text-gray-500" />
                ) : (
                  <IoEyeSharp className="text-gray-500" />
                )}
              </div>
            </div>

            <Link to='/'>
              <button
                className='bg-fuchsia-800 text-white rounded-full py-2 px-6 text-sm w-full mx-4 font-light'
                onClick={handleRegister}
              >
                Create Account
              </button>
            </Link>

            <div className="text-center mx-4">
              <Link to='/' className="text-[#848484] text-sm">Already have an account?</Link>
            </div>

            <Link to='/'>
              <button className='bg-white text-[#89089f] rounded-full py-2 px-6 text-sm border-1 border-[#89089f] w-full mx-4'>
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
