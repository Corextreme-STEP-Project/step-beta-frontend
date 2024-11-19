import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useRole } from '../../context/RoleContext'; // Import useRole hook

import {
  FaProjectDiagram,
  FaFileAlt,
  FaFolderOpen,
  FaGavel,
  FaArchive,
  FaCog,
  FaChartLine,
  FaQuestionCircle,
  FaSearch,
  FaSignOutAlt
} from "react-icons/fa";

const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true); // To toggle sidebar collapsed state
  const [searchQuery, setSearchQuery] = useState("");
  const { logout } = useRole(); // Destructure the logout function from useRole
  const navigate = useNavigate(); // Initialize navigate

  const handleLogout = () => {
    logout(); // Call the logout function
    navigate('/login'); // Redirect to the login page
  };

  return (
    <aside
      className={`bg-emerald-600 text-white transition-all duration-300 flex flex-col p-4 h-full ${isSidebarCollapsed ? "w-20" : "w-64"}`}
      onMouseEnter={() => setIsSidebarCollapsed(false)} // Expand sidebar when mouse enters
      onMouseLeave={() => setIsSidebarCollapsed(true)} // Collapse sidebar when mouse leaves
    >
      {/* Step button fixed at the top */}
      <button
        className="text-white mb-4 font-bold text-xl absolute top-4 left-4 z-10"
      >
        STEP
      </button>

      {/* Search bar - only show when expanded */}
      {!isSidebarCollapsed && (
        <div className="mb-4 flex items-center bg-gray-100 rounded px-2 py-1 mt-10">
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
      <div className={`mb-4 ${isSidebarCollapsed ? "hidden" : ""}`}>
        <Link
          to="/dashboard"
          title="Dashboard"
          className="bg-gray-100 hover:bg-emerald-700 text-emerald-700 hover:text-white p-3 rounded flex items-center justify-center w-full"
        >
          <FaProjectDiagram className="mr-2" />
          {!isSidebarCollapsed && <span>Dashboard</span>}
        </Link>
      </div>

      {/* Navigation links */}
      <nav className={`flex flex-col space-y-4 mt-8 ${isSidebarCollapsed ? "items-center" : ""}`}>
        <Link
          to="/dashboard/projects"
          title="Projects"
          className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2"
        >
          <FaProjectDiagram size={24} />
          {!isSidebarCollapsed && <span>Projects</span>}
        </Link>
        <Link
          to="/dashboard/tenders"
          title="Tenders"
          className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2"
        >
          <FaGavel size={24} />
          {!isSidebarCollapsed && <span>Calls for tenders</span>}
        </Link>
        <Link
          to="/dashboard/docs"
          title="Documents"
          className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2"
        >
          <FaFolderOpen size={24} />
          {!isSidebarCollapsed && <span>Documents and Circulars</span>}
        </Link>
        <Link
          to="/dashboard/reports"
          title="Reports"
          className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2"
        >
          <FaFileAlt size={24} />
          {!isSidebarCollapsed && <span>Reports</span>}
        </Link>
        <Link
          to="/dashboard/performance-compliance"
          className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2"
        >
          <FaChartLine size={24} />
          {!isSidebarCollapsed && <span>Performance and Indicators</span>}
        </Link>

        <Link
          to="/dashboard/archives"
          title="Archives"
          className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2"
        >
          <FaArchive size={24} />
          {!isSidebarCollapsed && <span>Archives</span>}
        </Link>
      </nav>

      {/* Settings and Messaging & Help section at the bottom */}
      <div className="mt-48 flex flex-col space-y-4">
        <Link
          to="/dashboard/settings"
          title="Settings"
          className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2"
        >
          <FaCog size={24} />
          {!isSidebarCollapsed && <span>Settings</span>}
        </Link>
        <Link
          to="/dashboard/help"
          title="Messaging & Help"
          className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2"
        >
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
