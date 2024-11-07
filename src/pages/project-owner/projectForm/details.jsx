import React from "react";
import { Link, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams(); // This captures the project ID from the URL

  // Placeholder data to simulate a project until the API is integrated
  const project = {
    id,
    projectOwner: "Ministry of Health",
    projectTitle: "Health Infrastructure Project",
    description: "Construction of a new hospital wing.",
    scope: "Plan",
    budget: 100000,
    keyRequirements: "Approval, Land acquisition, Engineering",
    projectBegins: "2024-01-10",
    projectEnds: "2024-12-20",
    projectStatus: "Execution",
    statusDescription: "Currently ongoing with structural setup.",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10 px-4">
      {/* Project Details Card */}
      <div className="border-solid flex flex-col justify-center items-center border rounded-lg p-6 md:p-10 w-full max-w-3xl mx-auto bg-white shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
          {project.projectTitle}
        </h1>
        
        <div className="w-full space-y-4">
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Project Owner:</span> {project.projectOwner}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Description:</span> {project.description}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Scope:</span> {project.scope}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Budget:</span> ${project.budget.toLocaleString()}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Key Requirements:</span> {project.keyRequirements}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Project Begins:</span> {new Date(project.projectBegins).toLocaleDateString()}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Project Ends:</span> {new Date(project.projectEnds).toLocaleDateString()}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Project Status:</span> {project.projectStatus}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Status Description:</span> {project.statusDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
