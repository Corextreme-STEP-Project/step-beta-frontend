import { useState } from "react";

const ComplianceComparison = () => {
  const [selectedComplianceType, setSelectedComplianceType] = useState("All");

  const projects = [
    {
      id: "0768",
      name: "Construction School Y",
      compliance: 85,
      status: "Compliant",
    },
    {
      id: "0767",
      name: "Road Construction",
      compliance: 60,
      status: "Moderate Concern",
    },
    {
      id: "0766",
      name: "Hospital Renovation",
      compliance: 40,
      status: "Non-Compliant",
    },
    {
      id: "0765",
      name: "Bridge Buildout",
      compliance: 90,
      status: "Compliant",
    },
  ];

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Project Compliance Comparison
        </h1>
        <p className="text-gray-600 mt-2">
          Compare compliance metrics across projects to identify areas of
          improvement.
        </p>
      </div>

      {/* Filter Section */}
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div>
          <label className="text-sm font-medium text-gray-600">
            Compliance Type:
          </label>
          <select
            className="block mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-200"
            value={selectedComplianceType}
            onChange={(e) => setSelectedComplianceType(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Financial">Financial</option>
            <option value="Safety">Safety</option>
            <option value="Environmental">Environmental</option>
          </select>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mb-8 overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">Project ID</th>
              <th className="py-3 px-4 text-left font-semibold">
                Project Name
              </th>
              <th className="py-3 px-4 text-left font-semibold">
                Compliance (%)
              </th>
              <th className="py-3 px-4 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-4">{project.id}</td>
                <td className="py-3 px-4">{project.name}</td>
                <td className="py-3 px-4">{project.compliance}%</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === "Compliant"
                        ? "bg-green-100 text-green-800"
                        : project.status === "Moderate Concern"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Comparison Chart (Placeholder) */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Compliance Comparison Chart
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Placeholder for comparison chart */}
          <p className="text-center text-gray-500">
            [Comparison Chart Goes here]
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplianceComparison;
