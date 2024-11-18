// import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiLogin } from '../../services/auth';
import Swal from 'sweetalert2';
import img from '../../assets/images/bg2.jpg'
import { useState } from 'react';
import { useRole } from '../../context/RoleContext';


const LoginForm = () => {
  const navigate = useNavigate(); 
  const { login } = useRole();
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Project Owner');

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);


  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password")
  const role = selectedRole === 'Project Owner' ? 'Project Owner' : 'Project Regulator';



  
  
    try {
      // Call apiLogin to authenticate user
      const response = await apiLogin({ email, password, role});
      console.log('Full Login Response:', response);
      if (response.status == 200) {
        const data = await response.data;;

        if (data && data.token) {
          
          login(role, data.token);

          if (role === 'Project Owner') {
            Swal.fire({
              icon: "Success",
              title: "Login Successful",
              text: "You have successfully logged in to your account",
              confirmButtonText: " OK"
            });
            navigate('/projectowner');
          } else if (role === 'Project Regulator') {
            navigate('/dashboard');
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Unauthorized',
            text: 'Invalid response format from server.',
            confirmButtonText: 'OK',
          });
        }
      }
    } catch (error) {  
      console.log(error);
      if (error.response && error.response.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Unauthorized: Invalid credentials or session expired.',
          confirmButtonText: 'OK',
        });
      } else {
      Swal.fire({
        icon: "error",
        title: "Error.",
        text: "An unexpected error occurred. Please try again later.",
        confirmButtonText: " OK"
      }); 
    }                          
    } finally {
      setLoading(false);
    }
  };

  // const logout = () => {
  //   // Clear token from localStorage and update state
  //   localStorage.removeItem('token');
  //   setIsAuthenticated(false);
  //   navigate('/'); // Redirect to login page or home
  // };
  

  return (
    <div className="flex items-center  min-h-screen bg-cover bg-center justify-end"
    style={{ backgroundImage: `url(${img})` }}
    >
    
    <div className="w-1/2 text-white flex flex-col justify-center p-10 mx-12 bg-gradient-to-r rounded-lg shadow-lg">
  <h1 className="text-5xl font-extrabold mb-6 text-center text-yellow-300">Welcome Back!</h1>
  <p className="text-xl mb-6 text-center font-semibold">
    Log in to manage your government contracts and tenders with ease.
  </p>
  <p className="text-xl mb-8 text-center text-yellow-200">
    Securely submit tenders and track progress—all in one place.
  </p>
</div>

     
      <div className="w-full max-w-sm mx-12 bg-white p-8 shadow-md pt-20">
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
              <label htmlFor="role" className="block text-gray-700 font-semibold mb-2">
                Role
              </label>
              <select
                id="role"
                name="role"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#065986]"
              >
                <option value="Project Owner">Project Owner</option>
                <option value="Project Regulator">Project Regulator</option>
              </select>
            </div>
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
              className="w-full bg-[#0ba5ec] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#0086c9] transition duration-200" disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        {/* ) */}
        {/* } */}
        {/* {!isAuthenticated && ( */}
          <p className="text-center text-gray-600 mt-4">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="text-[#0086c9] hover:underline">
              Register here
            </Link>
          </p>
        {/* )} */}
      </div>
      
    </div>
  );
};

export default LoginForm;
