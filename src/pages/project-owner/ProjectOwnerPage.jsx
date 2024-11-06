// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../../component/project-owner/Sidebar';


const ProjectOwnerPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return (
    <div className="flex min-h-screen">
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} />
      <div className={`container mx-auto transition-all duration-300 ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <Outlet />
      </div>
    </div>
  )
}

export default ProjectOwnerPage