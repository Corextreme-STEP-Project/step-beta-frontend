/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import {
    FaBars, FaTasks, FaClipboardList, FaBell, FaHandshake, FaFolderOpen, FaGavel, FaFileInvoiceDollar,
    // eslint-disable-next-line no-unused-vars
    FaCog, FaChartBar, FaQuestionCircle
} from 'react-icons/fa';


const Sidebar = ({ isSidebarCollapsed, setIsSidebarCollapsed }) => {
    return (
        <aside className={`bg-emerald-600 text-white transition-all duration-300 ${isSidebarCollapsed ? 'w-20' : 'w-64'} flex flex-col p-4 h-screen fixed top-0 left-0`}>
            <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="text-white p-2 mb-4 flex gap-3 bg-green-800 rounded-md mx-auto border-b border-white">
                <FaBars size={24} />{!isSidebarCollapsed && <span>MENU</span>}
            </button>
            <nav className={`flex flex-col space-y-4 ${isSidebarCollapsed ? 'items-center' : ''}`}>
                {/* Sidebar links */}
                <Link to="/projectowner/" title="Projects" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaTasks size={24} />
                    {!isSidebarCollapsed && <span>Projects</span>}
                </Link>
                <Link to="/projectowner/projectmaturation" title="Projects" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaClipboardList size={24} />
                    {!isSidebarCollapsed && <span>Project Maturation</span>}
                </Link>
                <Link to="/projectowner/contractawarding" title="Tenders" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaGavel size={24} />
                    {!isSidebarCollapsed && <span>Contract Awarding</span>}
                </Link>
                <Link to="/projectowner/notifications" title="Notifications" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaBell size={24} />
                    {!isSidebarCollapsed && <span>Notifications</span>}
                </Link>
                <Link to="/projectowner/handover" title="Compliance" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaHandshake size={24} />
                    {!isSidebarCollapsed && <span>Handover</span>}
                </Link>
                <Link to="/projectowner/documents" title="Documents" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaFolderOpen size={24} />
                    {!isSidebarCollapsed && <span>Documents and Circulars</span>}
                </Link>
                <Link to="/projectowner/receptions" title="Archives" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaFileInvoiceDollar size={24} />
                    {!isSidebarCollapsed && <span>Receptions/Payments</span>}
                </Link>
                {/* <Link to="/projectowner/performance" className="hover:bg-emerald-500 p-2 rounded flex items-center space-x-2">
                    <FaChartBar size={24} />
                    {!isSidebarCollapsed && <span>Performance and Indicators</span>}
                </Link> */}
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
        </aside>
    )
}

export default Sidebar