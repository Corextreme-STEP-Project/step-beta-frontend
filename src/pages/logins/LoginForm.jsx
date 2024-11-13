// import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiLogin, getUserInfo } from '../../services/auth';
import pic from "../../assets/images/image 1.jpeg";
import { useRole } from '../../context/RoleContext';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useRole();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      // First, attempt to login
      const { status, data } = await apiLogin({ email, password });

      console.log('Login Response:', data);

      if (status === 200 && data.token) {
        const token = data.token;
        
        // Get user info including role
        const userInfo = await getUserInfo(token);
        console.log('User Info:', userInfo);

        if (userInfo.status === 200 && userInfo.data.role) {
          const role = userInfo.data.role;
          
          // Save to localStorage and context
          localStorage.setItem('userRole', role);
          login(role, token);

          toast.success('Login successful!', { autoClose: 3000 });

          if (role === 'Project Owner') {
            navigate('/projectowner');
          } else if (role === 'Project Regulator') {
            navigate('/dashboard');
          }
        } else {
          console.error('Could not fetch user role');
          toast.error("Login failed: Could not fetch user role");
        }
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error("Login failed. Please try again.", { autoClose: 5000 });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <ToastContainer />
      <div className="flex w-full max-w-4xl">
        <div className="flex-1">
          <img
            src={pic}
            alt="background"
            className="object-cover w-full "
          />
        </div>
        <div className="w-full max-w-sm mx-auto bg-white p-8 shadow-md pt-20">
          <h2 className="text-2xl font-bold mb-6 text-[#568bf5] text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#065986]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#065986]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0ba5ec] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#0086c9] transition duration-200"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?{' '}
            <Link to="/register" className="text-[#0086c9] hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
