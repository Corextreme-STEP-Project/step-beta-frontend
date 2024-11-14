import { useState } from "react";

const ComplianceRiskAssessment = () => {
  const [selectedRiskLevel, setSelectedRiskLevel] = useState("All");

  const riskData = [
    {
      id: "0768",
      project: "Construction School Y",
      riskLevel: "High",
      type: "Financial",
      lastAudit: "29/10/25",
      actionRequired: "Immediate",
    },
    {
      id: "0767",
      project: "Road Construction",
      riskLevel: "Moderate",
      type: "Safety",
      lastAudit: "15/10/25",
      actionRequired: "Monitor",
    },
    {
      id: "0766",
      project: "Hospital Renovation",
      riskLevel: "Low",
      type: "Environmental",
      lastAudit: "12/09/25",
      actionRequired: "Routine Check",
    },
    {
      id: "0765",
      project: "Bridge Buildout",
      riskLevel: "High",
      type: "Regulatory",
      lastAudit: "05/11/25",
      actionRequired: "Immediate",
    },
  ];

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Compliance Risk Assessment
        </h1>
        <p className="text-gray-600 mt-2">
          Identify and assess risks to prioritize actions for compliance across
          projects.
        </p>
      </div>

      {/* Filter and Search Section */}
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div>
          <label className="text-sm font-medium text-gray-600">
            Risk Level:
          </label>
          <select
            className="block mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-200"
            value={selectedRiskLevel}
            onChange={(e) => setSelectedRiskLevel(e.target.value)}
          >
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>

      {/* Risk Assessment Table */}
      <div className="mb-8 overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">Project ID</th>
              <th className="py-3 px-4 text-left font-semibold">
                Project Name
              </th>
              <th className="py-3 px-4 text-left font-semibold">Risk Level</th>
              <th className="py-3 px-4 text-left font-semibold">Risk Type</th>
              <th className="py-3 px-4 text-left font-semibold">Last Audit</th>
              <th className="py-3 px-4 text-left font-semibold">
                Action Required
              </th>
            </tr>
          </thead>
          <tbody>
            {riskData
              .filter(
                (project) =>
                  selectedRiskLevel === "All" ||
                  project.riskLevel === selectedRiskLevel
              )
              .map((project, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4">{project.id}</td>
                  <td className="py-3 px-4">{project.project}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.riskLevel === "High"
                          ? "bg-red-100 text-red-800"
                          : project.riskLevel === "Moderate"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {project.riskLevel}
                    </span>
                  </td>
                  <td className="py-3 px-4">{project.type}</td>
                  <td className="py-3 px-4">{project.lastAudit}</td>
                  <td className="py-3 px-4">{project.actionRequired}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Risk Trend Visualization (Placeholder) */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Risk Level Trend Over Time
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Placeholder for risk trend chart */}
          <p className="text-center text-gray-500">
            [Risk Trend Chart Placeholder]
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplianceRiskAssessment;
