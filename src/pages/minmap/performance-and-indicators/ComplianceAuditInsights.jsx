import { useState } from "react";

const ComplianceAuditInsights = () => {
  const [selectedAuditStatus, setSelectedAuditStatus] = useState("All");

  const auditData = [
    {
      id: "0768",
      project: "Construction School Y",
      auditStatus: "Completed",
      auditDate: "29/10/25",
      issues: "Financial Irregularities",
      action: "Review Budgeting",
    },
    {
      id: "0767",
      project: "Road Construction",
      auditStatus: "Pending",
      auditDate: "15/11/25",
      issues: "-",
      action: "-",
    },
    {
      id: "0766",
      project: "Hospital Renovation",
      auditStatus: "Completed",
      auditDate: "12/10/25",
      issues: "Safety Violations",
      action: "Upgrade Safety Measures",
    },
    {
      id: "0765",
      project: "Bridge Buildout",
      auditStatus: "Failed",
      auditDate: "05/11/25",
      issues: "Non-compliance with Regulations",
      action: "Immediate Review",
    },
  ];

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Compliance Audit Insights
        </h1>
        <p className="text-gray-600 mt-2">
          Monitor audit outcomes and identify projects with critical compliance
          issues.
        </p>
      </div>

      {/* Audit Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-100 text-blue-800 p-4 rounded-lg">
          <p className="text-lg font-semibold">Total Audits</p>
          <p className="text-2xl font-bold">25</p>
        </div>
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg">
          <p className="text-lg font-semibold">Pending Audits</p>
          <p className="text-2xl font-bold">5</p>
        </div>
        <div className="bg-red-100 text-red-800 p-4 rounded-lg">
          <p className="text-lg font-semibold">Failed Audits</p>
          <p className="text-2xl font-bold">2</p>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div>
          <label className="text-sm font-medium text-gray-600">
            Audit Status:
          </label>
          <select
            className="block mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-200"
            value={selectedAuditStatus}
            onChange={(e) => setSelectedAuditStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
      </div>

      {/* Audit Insights Table */}
      <div className="mb-8 overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">Project ID</th>
              <th className="py-3 px-4 text-left font-semibold">
                Project Name
              </th>
              <th className="py-3 px-4 text-left font-semibold">
                Audit Status
              </th>
              <th className="py-3 px-4 text-left font-semibold">Audit Date</th>
              <th className="py-3 px-4 text-left font-semibold">
                Issues Found
              </th>
              <th className="py-3 px-4 text-left font-semibold">
                Action Recommended
              </th>
            </tr>
          </thead>
          <tbody>
            {auditData
              .filter(
                (project) =>
                  selectedAuditStatus === "All" ||
                  project.auditStatus === selectedAuditStatus
              )
              .map((project, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4">{project.id}</td>
                  <td className="py-3 px-4">{project.project}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.auditStatus === "Completed"
                          ? "bg-green-100 text-green-800"
                          : project.auditStatus === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {project.auditStatus}
                    </span>
                  </td>
                  <td className="py-3 px-4">{project.auditDate}</td>
                  <td className="py-3 px-4">{project.issues}</td>
                  <td className="py-3 px-4">{project.action}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Audit Frequency Chart (Placeholder) */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Audit Frequency Over Time
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Placeholder for audit frequency chart */}
          <p className="text-center text-gray-500">
            [Audit Frequency Chart Placeholder]
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplianceAuditInsights;
