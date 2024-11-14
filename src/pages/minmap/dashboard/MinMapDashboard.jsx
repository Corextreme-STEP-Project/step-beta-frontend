import React, { useState } from "react";
import { FaSearch, FaFileAlt, FaBell } from "react-icons/fa";

// Progress Bar Component
const ProgressBar = ({ value }) => {
  let progressColor = "bg-red-500";
  if (value >= 30 && value < 60) progressColor = "bg-yellow-500";
  else if (value >= 60) progressColor = "bg-emerald-500";

  return (
    <div className="relative pt-1">
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${progressColor}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <span className="ml-2 text-sm font-semibold text-gray-600">{`${value}%`}</span>
    </div>
  );
};

// Circular Progress Component
const CircularProgress = ({ name, value, max }) => {
  const strokeDasharray = 100;
  const strokeDashoffset = strokeDasharray - (value / max) * strokeDasharray;

  return (
    <div className="relative flex items-center justify-center">
      <svg className="w-36 h-36" viewBox="0 0 36 36">
        <path
          className="text-gray-100"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="text-blue-400"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center text-center">
        <span className="text-1xl text-black font-medium">
          {name.split(" ").map((word, index) => (
            <span key={index}>
              {word}
              {index === 0 && <br />}
            </span>
          ))}
        </span>
        <span className="text-black text-lg font-semibold">{`${value}%`}</span>
      </div>
    </div>
  );
};

const MinMapDashboard = () => {
  const [selectedPhase, setSelectedPhase] = useState("All Projects");
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [notifications, setNotifications] = useState([
    "New project added: School Renovation Program",
    "Highway Expansion Project status updated to 'In Progress'",
    "Water Supply Enhancement project completed"
  ]);
  const [showNotifications, setShowNotifications] = useState(false);


  // Example projects data
  const projects = [
    {
      id: 1,
      name: "Highway Expansion Project",
      phase: "Maturation",
      officer: "John Mensah",
      lastUpdate: "2024-11-01",
      progression: 20,
      status: "Pending",
    },
    {
      id: 2,
      name: "School Renovation Program",
      phase: "Handover",
      officer: "Jane McCarthy",
      lastUpdate: "2024-10-28",
      progression: 50,
      status: "In progress",
    },
    {
      id: 3,
      name: "Water Supply Enhancement",
      phase: "Execution",
      officer: "Michael Johnson",
      lastUpdate: "2024-11-02",
      progression: 100,
      status: "Complete",
    },
    {
      id: 4,
      name: "Library Modernization",
      phase: "Monitoring",
      officer: "Emily Davis",
      lastUpdate: "2024-10-30",
      progression: 40,
      status: "In progress",
    },
  ];

  const performanceIndicators = [
    { name: "Maturation Phase", value: 15, trend: "up" },
    { name: "Handover Phase", value: 35, trend: "down" },
    { name: "Execution Phase", value: 30, trend: "neutral" },
    { name: "Monitoring Phase", value: 50, trend: "up" },
  ];

  // Debug log to check what phase is selected and the filtered projects
  console.log("Selected Phase:", selectedPhase);

  const filteredProjects =
    selectedPhase === "All Projects"
      ? projects
      : projects.filter((project) => project.phase === selectedPhase);

  // Debug log to check the filtered projects
  console.log("Filtered Projects:", filteredProjects);

  const handlePhaseClick = (phase) => {
    setSelectedPhase(phase);
  };

  const handleCheckboxChange = (projectId) => {
    setSelectedProjects((prevSelected) =>
      prevSelected.includes(projectId)
        ? prevSelected.filter((id) => id !== projectId)
        : [...prevSelected, projectId]
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "text-red-500 font-semibold";
      case "In progress":
        return "text-yellow-500 font-semibold";
      case "Complete":
        return "text-emerald-500 font-semibold";
      default:
        return "";
    }
  };

  const toggleNotifications = () => {
    setShowNotifications((prevState) => !prevState);
  };

  return (
    <main className="flex-1 p-6 bg-white relative">
    {/* Header with Search and Notification Icons */}
    <header className="flex items-center justify-between mb-4 space-x-4">
      <div className="flex items-center space-x-4">
        {/* Welcome Message and Description */}
        <div>
          <h1 className="text-4xl font-bold">Welcome, Ama</h1>
          <p className="text-sm">
            Track your progress and explore resources designed to keep you informed and effective.
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative flex items-center">
          <FaSearch className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

       {/* Notification Icon */}
       <button
            className="relative text-gray-600 hover:text-emerald-700 focus:outline-none"
            onClick={toggleNotifications}
          >
            <FaBell size={24} />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 text-xs font-semibold text-white bg-red-500 rounded-full">
              {notifications.length}
            </span>
          </button>
      </div>
    </header>

    {/* Notifications Dropdown */}
    {showNotifications && (
        <div className="absolute right-0 top-16 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg w-64">
          <ul className="max-h-64 overflow-auto">
            {notifications.map((notification, index) => (
              <li
                key={index}
                className="px-4 py-2 text-gray-700 border-b hover:bg-gray-100"
              >
                {notification}
              </li>
            ))}
          </ul>
        </div>
      )}


      {/* Performance Indicators Section */}
      <section className="mt-8">
        <div className="bg-white py-2 rounded shadow-lg border border-gray-300 flex flex-row justify-center h-[210px] w-[800px]">
          {performanceIndicators.map((indicator, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white p-2 rounded shadow text-center border border-gray-300 h-44 w-44 m-2"
            >
              <CircularProgress
                name={indicator.name}
                value={indicator.value}
                max={100}
              />
            </div>
          ))}
        </div>
      </section>

      

      {/* Phase Selection Table */}
      <section className="mt-4 flex items-center justify-between">
        <div className="flex overflow-hidden rounded-lg border border-gray-300">
          <table className="w-[700px] border-collapse border border-gray-300">
            <tbody>
              <tr>
                {[
                  "All Projects",
                  "Maturation",
                  "Handover",
                  "Execution",
                  "Monitoring",
                ].map((phase) => (
                  <td
                    key={phase}
                    className={`border border-gray-300 px-2 py-2 text-center cursor-pointer ${
                      selectedPhase === phase ? "bg-blue-400 text-white" : ""
                    }`}
                    onClick={() => handlePhaseClick(phase)}
                  >
                    {phase}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

 {/* Search Bar */}
 <div className="relative flex items-center">
          <FaSearch className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search Projects..."
            className="border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

      </section>

      {/* Project Table Section */}
      <section className="mt-4 flex overflow-hidden rounded-lg border border-gray-300">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-2 text-center">
                Select
              </th>
              <th className="border border-gray-300 px-2 py-2 text-center">
                Project ID
              </th>
              <th className="border border-gray-300 px-2 py-2 text-center">
                Name
              </th>
              <th className="border border-gray-300 px-2 py-2 text-center">
                Phase
              </th>
              <th className="border border-gray-300 px-2 py-2 text-center">
                Officer
              </th>
              <th className="border border-gray-300 px-2 py-2 text-center">
                Last Updated
              </th>
              <th className="border border-gray-300 px-2 py-2 text-center">
                Progression
              </th>
              <th className="border border-gray-300 px-2 py-2 text-center">
                Status
              </th>
              <th className="border border-gray-300 px-2 py-2 text-center">
                Quick Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  No projects found for the selected phase
                </td>
              </tr>
            ) : (
              filteredProjects.map((project) => (
                <tr key={project.id}>
                  {/* Checkbox Column */}
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={selectedProjects.includes(project.id)}
                      onChange={() => handleCheckboxChange(project.id)}
                    />
                  </td>
                  {/* Project Data Columns */}
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    {project.id}
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    {project.name}
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    {project.phase}
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    {project.officer}
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    {project.lastUpdate}
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    <ProgressBar value={project.progression} />
                  </td>
                  <td
                    className={`border border-gray-300 px-2 py-2 text-center ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    <button className="text-gray-500 cursor-pointer flex justify-center items-center w-full h-full">
                      <FaFileAlt />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default MinMapDashboard;
