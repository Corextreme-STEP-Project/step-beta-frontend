import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  FaTachometerAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <aside
      className={`bg-emerald-600 text-white transition-all duration-300 ${
        isSidebarCollapsed ? "w-20" : "w-64"
      } flex flex-col p-4 h-full relative`} // Sidebar container
    >
      {/* Step button fixed at the top */}
      <button
        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        className="text-white mb-4 font-bold text-xl absolute top-4 left-4 z-10 "
      >
        STEP
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
          to="/dashboard"
          title="Dashboard"
          className="bg-gray-100 hover:bg-emerald-700 text-emerald-700 hover:text-white p-3 rounded flex items-center justify-center w-full mb-4"
        >
          <span>Dashboard</span>
        </Link>
      )}

      {/* Navigation links */}
      <nav
        className={`flex flex-col space-y-4 ${
          isSidebarCollapsed ? "items-center" : ""
        } mt-8`} // Add margin-top to avoid overlap with "Step" button and ensure proper spacing
      >
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
          to="/dashboard/documents"
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
          to=""
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
    </aside>
  );
};

export default Sidebar;
