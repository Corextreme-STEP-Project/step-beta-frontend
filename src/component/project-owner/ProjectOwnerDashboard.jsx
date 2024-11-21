// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Header';
import Statistics from './Statistics';
import ProjectsTable from './ProjectsTable';
import { Outlet } from 'react-router-dom';
import ListTable from '../../pages/project-owner/projectForm/ListTable';
import ProjectList from '../../pages/project-owner/projectForm/List';

const ProjectOwnerDashboard = () => (
  <div className="p-6 bg-gray-100 min-h-screen">
    <Header />
    <Statistics />
    {/* <ProjectsTable /> */}
    <ListTable />
    {/* <ProjectList /> */}
    <Outlet />
  </div>
);

export default ProjectOwnerDashboard;