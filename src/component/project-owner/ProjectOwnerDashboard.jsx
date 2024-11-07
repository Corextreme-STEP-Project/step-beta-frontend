// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Header';
import Statistics from './Statistics';
import ProjectsTable from './ProjectsTable';

const ProjectOwnerDashboard = () => (
  <div className="p-6 bg-gray-100 min-h-screen">
    <Header />
    <Statistics />
    <ProjectsTable />
  </div>
);

export default ProjectOwnerDashboard;