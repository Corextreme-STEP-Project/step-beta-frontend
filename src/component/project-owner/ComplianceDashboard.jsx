import React, { useState, useEffect } from 'react';
import { FaFileAlt, FaArrowRight } from 'react-icons/fa'; // Icons for file and arrow

const ComplianceDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [activeAlerts, setActiveAlerts] = useState([]); // Track active alerts
  const [notifications, setNotifications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [viewMode, setViewMode] = useState('projects'); // Track current view (projects or documents)
  const [sortedByDate, setSortedByDate] = useState(false); // Track if sorted by date

  useEffect(() => {
    const initialAlerts = [
      { id: 1, message: 'Contract for Project A is due soon' },
      { id: 2, message: 'Project C contract is overdue. Immediate action required!' },
    ];

    setAlerts(initialAlerts);
    setActiveAlerts(initialAlerts); // Set all alerts as active initially

    const initialProjects = [
      {
        id: 1,
        name: 'Project A',
        phase: 'Maturation',
        officer: 'John Doe',
        lastUpdate: '2024-11-01',
        progression: '60%',
        status: 'green', // compliant
        overdue: false,
        complianceAlert: false,
      },
      {
        id: 2,
        name: 'Project B',
        phase: 'Execution',
        officer: 'Jane Smith',
        lastUpdate: '2024-11-10',
        progression: '45%',
        status: 'yellow', // pending
        overdue: false,
        complianceAlert: false,
      },
      {
        id: 3,
        name: 'Project C',
        phase: 'Procurement',
        officer: 'Michael Johnson',
        lastUpdate: '2024-10-30',
        progression: '90%',
        status: 'red', // non-compliant
        overdue: true,
        complianceAlert: true,
      },
      {
        id: 4,
        name: 'Project D',
        phase: 'Handover',
        officer: 'Sarah Lee',
        lastUpdate: '2024-09-25',
        progression: '80%',
        status: 'green', // compliant
        overdue: false,
        complianceAlert: false,
      },
    ];

    setProjects(initialProjects);
    setNotifications([
      { id: 1, message: 'Project A: Sign contract' },
      { id: 2, message: 'Project B: Upload missing documents' },
    ]);
  }, []);

  useEffect(() => {
    setFilteredProjects(
      projects.filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, projects]);

  const handleSortByDate = () => {
    setSortedByDate(!sortedByDate);
    setFilteredProjects((prevProjects) =>
      [...prevProjects].sort((a, b) => {
        const dateA = new Date(a.lastUpdate);
        const dateB = new Date(b.lastUpdate);
        return sortedByDate ? dateA - dateB : dateB - dateA;
      })
    );
  };

  const getProjectCountByPhase = (phase) => {
    return projects.filter((project) => project.phase === phase).length;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'green':
        return 'bg-green-200 text-green-800';
      case 'yellow':
        return 'bg-yellow-200 text-yellow-800';
      case 'red':
        return 'bg-red-200 text-red-800';
      default:
        return '';
    }
  };

  const markAlertAsCompleted = (alertId) => {
    const newActiveAlerts = activeAlerts.filter((alert) => alert.id !== alertId);
    setActiveAlerts(newActiveAlerts); // Update active alerts
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-1 p-4 md:p-6 lg:p-8 space-y-6 overflow-y-auto">
        {/* Welcome Message */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Welcome, Daniel</h2>
        </div>

        {/* Phase Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {['Maturation', 'Handover', 'Procurement', 'Execution'].map((phase) => (
            <div
              key={phase}
              className="bg-green-100 shadow-md rounded-lg p-4 flex items-center justify-between space-x-4"
            >
              <div className="flex flex-col">
                <h3 className="text-lg font-medium">{phase}</h3>
                <span className="text-sm text-gray-600">Projects: {getProjectCountByPhase(phase)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaFileAlt className="text-xl text-gray-500" />
                <FaArrowRight className="text-xl text-gray-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button: All Projects | Documents */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setViewMode('projects')}
              className={`px-4 py-2 ${viewMode === 'projects' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} border rounded-lg`}>
              All Projects
            </button>
            <button
              onClick={() => setViewMode('documents')}
              className={`px-4 py-2 ${viewMode === 'documents' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} border rounded-lg`}>
              Documents
            </button>
          </div>
          {/* Search and Last Modified Button */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search Projects"
              className="p-2 rounded-md w-full sm:w-64"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleSortByDate}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Last Modified
            </button>
          </div>
        </div>

        {/* Project Table Section (only visible for projects view) */}
        {viewMode === 'projects' && (
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3">Project ID</th>
                  <th className="p-3">Project Name</th>
                  <th className="p-3">Phase</th>
                  <th className="p-3">Officer</th>
                  <th className="p-3">Last Update</th>
                  <th className="p-3">Progression</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Quick Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="border-t">
                    <td className="p-3">{project.id}</td>
                    <td className="p-3">{project.name}</td>
                    <td className="p-3">{project.phase}</td>
                    <td className="p-3">{project.officer}</td>
                    <td className="p-3">{project.lastUpdate}</td>
                    <td className="p-3">{project.progression}</td>
                    <td className={`p-3 ${getStatusColor(project.status)}`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </td>
                    <td className="p-3">
                      <button className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Alerts Section */}
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-4">Compliance Alerts ({activeAlerts.length} Active)</h3>
          <ul className="space-y-2">
            {activeAlerts.map((alert) => (
              <li key={alert.id} className="p-3 bg-yellow-100 border rounded-md">
                {alert.message}
                <button
                  onClick={() => markAlertAsCompleted(alert.id)}
                  className="ml-4 px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600">
                  Mark as Attended
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Notifications Section */}
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-4">Notifications</h3>
          <ul className="space-y-2">
            {notifications.map((notification) => (
              <li key={notification.id} className="p-3 bg-blue-100 border rounded-md">
                {notification.message}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComplianceDashboard;
