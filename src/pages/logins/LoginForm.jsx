// import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiLogin } from '../../services/auth';
import pic from "../../assets/images/image 1.jpeg";

const LoginForm = () => {
  const navigate = useNavigate(); 

const handleSubmit = async (e) => {
  e.preventDefault();
  


  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password"); 

 
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  // useEffect(() => {
  //   // Check if the user is already logged in
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     setIsAuthenticated(true);
  //   }
  // }, []);

  
    try {
      // Call apiLogin to authenticate user
      const response = await apiLogin({ email, password });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken ); // Store token in localStorage
        // alert("Logged in successfully")
      toast.success('Login successful!', { autoClose: 3000});
        navigate(''); // Redirect to a protected route, e.g., dashboard
      }
    } catch (error) {   
      toast.error("Login failed. Please try again.", {autoClose: 5000 });                           
    }
  };

  // const logout = () => {
  //   // Clear token from localStorage and update state
  //   localStorage.removeItem('token');
  //   setIsAuthenticated(false);
  //   navigate('/'); // Redirect to login page or home
  // };
  

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
        {/* <h2 className="text-2xl font-bold text-center mb-6">
          {isAuthenticated ? 'You are logged in' : 'Log in to your Account'}
        </h2> */}
        {/* {isAuthenticated ? (
          <button
            onClick={logout}
            className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        ) : ( */}
         <h2 className="text-2xl font-bold mb-6 text-[#568bf5] text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                // value={email}
                
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
                // value={password}
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
        {/* ) */}
        {/* } */}
        {/* {!isAuthenticated && ( */}
          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?{' '}
            <Link to="/register" className="text-[#0086c9] hover:underline">
              Register here
            </Link>
          </p>
        {/* )} */}
      </div>
      </div>
    </div>
  );
};

export default LoginForm;
