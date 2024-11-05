import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiLogin } from '../../../services/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Project Owner'); // Default role
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call apiLogin to authenticate user
      const data = await apiLogin({ email, password, role });
      if (data?.token) {
        localStorage.setItem('token', data.token); // Store token in localStorage
        setIsAuthenticated(true);
        toast.success('Login successful!');
        navigate(''); // Redirect to a protected route, e.g., dashboard
      }
    } catch (error) {
      toast.error(error.message || 'Login failed.');
    }
  };

  const logout = () => {
    // Clear token from localStorage and update state
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/'); // Redirect to login page or home
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e0f2fe]">
      <ToastContainer />
      <div className="w-full max-w-sm mx-auto bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isAuthenticated ? 'You are logged in' : 'Log in to your Account'}
        </h2>
        {isAuthenticated ? (
          <button
            onClick={logout}
            className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#065986]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block text-gray-700 font-semibold mb-2">
                Select Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#065986]"
              >
                <option value="Project Owner">Project Owner</option>
                <option value="Project Regulator">Project Regulator</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#0ba5ec] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#0086c9] transition duration-200"
            >
              Login
            </button>
          </form>
        )}
        {!isAuthenticated && (
          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?{' '}
            <Link to="/register" className="text-[#0086c9] hover:underline">
              Register here
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
