// ProjectTable.jsx
import React from "react";

const ProjectTable = () => {
  const projects = [
    { id: "0768", name: "Construction school Y", phase: "Execution", officer: "Paul Janvier", date: "29/10/25", progress: 40, performance: "Moderate concern", compliance: "Needs attention" },
    { id: "0767", name: "Road construction", phase: "Monitoring", officer: "Iaculis enim", date: "29/10/25", progress: 20, performance: "At risk", compliance: "Non Compliant" },
    { id: "0768", name: "Construction school Y", phase: "Execution", officer: "Paul Janvier", date: "29/10/25", progress: 40, performance: "Moderate concern", compliance: "Needs attention" },
    { id: "0767", name: "Road construction", phase: "Monitoring", officer: "Iaculis enim", date: "29/10/25", progress: 20, performance: "At risk", compliance: "Non Compliant" },
    // Add more projects as needed
  ];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4">Project ID</th>
            <th className="p-4">Project Name</th>
            <th className="p-4">Phase</th>
            <th className="p-4">Officer</th>
            <th className="p-4">Last Audit Date</th>
            <th className="p-4">Progression</th>
            <th className="p-4">Performance</th>
            <th className="p-4">Compliance Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="hover:bg-gray-50">
              <td className="p-4">{project.id}</td>
              <td className="p-4">{project.name}</td>
              <td className="p-4">{project.phase}</td>
              <td className="p-4">{project.officer}</td>
              <td className="p-4">{project.date}</td>
              <td className="p-4">
                <div className="w-full bg-gray-200 rounded-full">
                  <div
                    style={{ width: `${project.progress}%` }}
                    className={`h-2 rounded-full ${project.progress > 50 ? "bg-green-500" : "bg-orange-500"}`}
                  />
                </div>
              </td>
              <td className="p-4">{project.performance}</td>
              <td className="p-4">{project.compliance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
