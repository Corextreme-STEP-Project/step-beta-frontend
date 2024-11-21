import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetSingleCompliance } from "../../../services/minmap/compliance";





const DetailedComplianceReport = () => {

  const {projectId} = useParams()

  const [compliance, setCompliance] = useState({})


  const fetchCompliance = async () => {
    try {
      const response = await apiGetSingleCompliance(projectId)
      console.log(response.data)
      setCompliance(response.data)
    } catch (error) {
      console.log("error", error)
    }
  }


  useEffect(() => {
    fetchCompliance()
  }, [])



  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Project Compliance Report
          </h1>
          <p className="text-gray-600">{compliance.id}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <span className="text-sm font-medium text-gray-500">
            Compliance Status:
          </span>
          <span className="ml-2 px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
            {compliance.complianceStatus}
          </span>
        </div>
      </div>

      {/* Compliance Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {[
          {
            title: "Financial Compliance",
            status: "Compliant",
            color: "bg-green-100 text-green-800",
          },
          {
            title: "Safety Compliance",
            status: "Moderate Concern",
            color: "bg-yellow-100 text-yellow-800",
          },
          {
            title: "Environmental Compliance",
            status: "Non-Compliant",
            color: "bg-red-100 text-red-800",
          },
        ].map((card, index) => (
          <div key={index} className={`p-4 rounded-lg border ${card.color}`}>
            <h2 className="text-lg font-semibold text-gray-800">
              {card.title}
            </h2>
            <span className="block mt-2 text-sm font-medium">
              {card.status}
            </span>
          </div>
        ))}
      </div>

      {/* Compliance Timeline */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Compliance History
        </h2>
        <table className="w-full bg-white shadow rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">Date</th>
              <th className="py-3 px-4 text-left font-semibold">
                Type of Audit
              </th>
              <th className="py-3 px-4 text-left font-semibold">Status</th>
              <th className="py-3 px-4 text-left font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                date: "29/10/25",
                type: "Financial",
                status: "Compliant",
                notes: "No issues detected",
              },
              {
                date: "15/09/25",
                type: "Safety",
                status: "Moderate Concern",
                notes: "Minor safety violations",
              },
              {
                date: "01/08/25",
                type: "Environmental",
                status: "Non-Compliant",
                notes: "Environmental hazards detected",
              },
            ].map((entry, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-4">{entry.date}</td>
                <td className="py-3 px-4">{entry.type}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      entry.status === "Compliant"
                        ? "bg-green-100 text-green-800"
                        : entry.status === "Moderate Concern"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {entry.status}
                  </span>
                </td>
                <td className="py-3 px-4">{compliance.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailedComplianceReport;
