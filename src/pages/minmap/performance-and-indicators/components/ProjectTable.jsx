// ProjectTable.jsx

import { Link } from "react-router-dom";
import { apiGetAllCompliance } from "../../../../services/minmap/compliance";
import { useEffect, useState } from "react";

const ProjectTable = () => {
  // const projects = [
  //   {
  //     id: "0768",
  //     name: "Construction school Y",
  //     phase: "Execution",
  //     officer: "Paul Janvier",
  //     date: "29/10/25",
  //     progress: 40,
  //     performance: "Moderate concern",
  //     compliance: "Needs attention",
  //   },
  //   {
  //     id: "0767",
  //     name: "Road construction",
  //     phase: "Monitoring",
  //     officer: "Iaculis enim",
  //     date: "29/10/25",
  //     progress: 20,
  //     performance: "At risk",
  //     compliance: "Non Compliant",
  //   },
  //   {
  //     id: "0768",
  //     name: "Construction school Y",
  //     phase: "Execution",
  //     officer: "Paul Janvier",
  //     date: "29/10/25",
  //     progress: 40,
  //     performance: "Moderate concern",
  //     compliance: "Needs attention",
  //   },
  //   {
  //     id: "0767",
  //     name: "Road construction",
  //     phase: "Monitoring",
  //     officer: "Iaculis enim",
  //     date: "29/10/25",
  //     progress: 20,
  //     performance: "At risk",
  //     compliance: "Non Compliant",
  //   },
  //   // Add more projects as needed
  // ];
  const [compliance, setCompliance] = useState([]);

  const getAllCompliance = async () => {
    try {
      const response = await apiGetAllCompliance();
      console.log("compliance",response.data);
      setCompliance(response.data);
    } catch (error) {
      console.log("comp",error);
    }
  };

  useEffect(() => {
    getAllCompliance();
  },[]);

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
          {compliance.map((project) => (
            <tr key={project.id} className="hover:bg-gray-50">
              <td className="p-4">{}</td>
              <td className="p-4">{project.project.projectTitle}</td>
              <td className="p-4">{project.project.projectStatus}</td>
              <td className="p-4">{project.checkedBy[0].firstName}</td>
              <td className="p-4">
                {" "}
                <Link to={"/dashboard/compliance-audit-insights"}>
                  {project.date}
                </Link>
              </td>
              <td className="p-4">
                <div className="w-full bg-gray-200 rounded-full">
                  <div
                    style={{ width: `${project.progress}%` }}
                    className={`h-2 rounded-full ${
                      project.progress > 50 ? "bg-green-500" : "bg-orange-500"
                    }`}
                  />
                </div>
              </td>

              <td className="p-4">{}</td>
              <td className="p-4">
                <Link to={"/dashboard/detailed-compliance-report"}>
                  {project.complianceStatus}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
