import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaBars, FaCog, FaQuestionCircle, FaCheckCircle, FaRegFileAlt, FaRegClock, FaPlus, FaSearch, FaSignOutAlt } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa6';
import { useRole } from '../../context/RoleContext'; // Import useRole hook

const Sidebar = ({ isSidebarCollapsed, setIsSidebarCollapsed }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const { logout } = useRole(); // Destructure the logout function from useRole
    const navigate = useNavigate(); // Initialize navigate

    const handleLogout = () => {
        logout(); // Call the logout function
        navigate('/login'); // Redirect to the login page
    };

    return (
        <aside
            className={`bg-emerald-600 text-white transition-all duration-300 ${isSidebarCollapsed ? 'w-20' : 'w-64'} flex flex-col p-4 h-screen fixed top-0 left-0`}
            onMouseEnter={() => setIsSidebarCollapsed(false)} // Expand sidebar when mouse enters
            onMouseLeave={() => setIsSidebarCollapsed(true)} // Collapse sidebar when mouse leaves
        >
            <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="text-white text-2xl p-2 mb-4 flex gap-3 bg-green-700 rounded-md mx-auto border-b border-white">
                <FaBars size={24} />{!isSidebarCollapsed && <span>STEP</span>}
            </button>

            {/* Search bar */}
            {!isSidebarCollapsed && (
                <div className="mb-4 flex items-center bg-gray-100 rounded px-2 py-1 mt-10"> {/* Adjust margin-top to account for the Step button */}
                    <FaSearch className="text-gray-300 mr-2" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 rounded bg-emerald-700 text-white placeholder-gray-300 border-none outline-none"
                    />
                </div>
            )}

            {/* Dashboard link */}
            {!isSidebarCollapsed && (
                <Link
                    to="/projectowner"
                    title="Dashboard"
                    className="bg-gray-100 hover:bg-emerald-700 text-emerald-700 hover:text-white p-3 rounded flex items-center justify-center w-full mb-4"
                >
                    <span>Dashboard</span>
                </Link>
            )}

            <nav className={`flex flex-col space-y-4 ${isSidebarCollapsed ? 'items-center' : ''}`}>
                {/* Sidebar links */}
                <Link to="/projectowner/" title="Projects" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaCheckCircle size={24} />
                    {!isSidebarCollapsed && <span>Projects</span>}
                </Link>
                <Link to="/projectowner/projectmaturation" title="Project steps" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <div className="relative">
                        <FaRegClock size={24} />
                        <FaPlus
                            size={12}
                            className="absolute top-[-4px] right-[-4px] text-white"
                        />
                    </div>
                    {!isSidebarCollapsed && <span>Project Steps</span>}
                </Link>

                <Link to="/projectowner/receptions" title="Receptions/Payments" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaCheckCircle size={24} />
                    {!isSidebarCollapsed && <span>Receptions/Payments</span>}
                </Link>

                <Link to="/projectowner/docs" title="Documents" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaRegFileAlt size={24} />
                    {!isSidebarCollapsed && <span>Documents and Circulars</span>}
                </Link>

                <Link to="/projectowner/notification-list" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaChartBar size={24} />
                    {!isSidebarCollapsed && <span>Notifications</span>}
                </Link>
            </nav>

            {/* Settings at the bottom */}
            <div className={`mt-auto ${isSidebarCollapsed ? 'text-center' : ''}`}>
                <Link to="/projectowner/settings" title="Settings" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaCog size={24} />
                    {!isSidebarCollapsed && <span>Settings</span>}
                </Link>
            </div>

            <div>
                <Link to="/projectowner/help" title="Messaging" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaQuestionCircle size={24} />
                    {!isSidebarCollapsed && <span>Messaging & Help</span>}
                </Link>
            </div>
            {/* Logout button */}
            <div>
                <button
                    onClick={handleLogout} // Call handleLogout on button click
                    className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2"
                >
                    <FaSignOutAlt size={24} />
                    {!isSidebarCollapsed && <span>Logout</span>}
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
