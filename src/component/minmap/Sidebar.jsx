import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaBars, FaProjectDiagram, FaFileAlt, FaClipboardCheck,
    FaFolderOpen, FaGavel, FaArchive, FaCog, FaChartLine, FaQuestionCircle,
} from 'react-icons/fa';

const Sidebar = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

    return (
        <aside className={`bg-emerald-600 text-white transition-all duration-300 ${isSidebarCollapsed ? 'w-20' : 'w-64'} flex flex-col p-4 h-full`}>
            <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="text-white mb-4">
                <FaBars size={24} />
            </button>

            <nav className={`flex flex-col space-y-4 ${isSidebarCollapsed ? 'items-center' : ''}`}>
                <Link to="/projects" title="Projects" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaProjectDiagram size={24} />
                    {!isSidebarCollapsed && <span>Projects</span>}
                </Link>
                <Link to="/tenders" title="Tenders" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaGavel size={24} />
                    {!isSidebarCollapsed && <span>Tenders</span>}
                </Link>
                <Link to="/reports" title="Reports" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaFileAlt size={24} />
                    {!isSidebarCollapsed && <span>Reports</span>}
                </Link>
                <Link to="/compliance" title="Compliance" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaClipboardCheck size={24} />
                    {!isSidebarCollapsed && <span>Compliance Monitoring</span>}
                </Link>
                <Link to="/documents" title="Documents" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaFolderOpen size={24} />
                    {!isSidebarCollapsed && <span>Documents and Circulars</span>}
                </Link>
                <Link to="/archives" title="Archives" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaArchive size={24} />
                    {!isSidebarCollapsed && <span>Archives</span>}
                </Link>
                <Link to="/dashboard/performance-compliance" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaChartLine size={24} />
                    {!isSidebarCollapsed && <span>Performance and Indicators</span>}
                </Link>
            </nav>

            {/* Settings and Messaging & Help section at the bottom */}
            <div className="mt-32 flex flex-col space-y-4">
                <Link to="/settings" title="Settings" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaCog size={24} />
                    {!isSidebarCollapsed && <span>Settings</span>}
                </Link>
                <Link to="/help" title="Messaging & Help" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaQuestionCircle size={24} />
                    {!isSidebarCollapsed && <span>Messaging & Help</span>}
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;
