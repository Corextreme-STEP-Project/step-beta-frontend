import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiGetProjects } from "../../../services/project-owner/product";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProjects = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await apiGetProjects();
      setProjects(response.data);
    } catch (err) {
      setError("Failed to fetch projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);



  return (
    <div className="p-8 bg-lime-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">List of Projects</h1>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <div className="border p-6 rounded-lg shadow-md hover:shadow-xl bg-white transform hover:scale-105 transition-transform duration-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.projectTitle}</h2>

              <p className="text-gray-600 mb-1">
                <span className="font-medium">Description:</span> {project.description}
              </p>

              <p className="text-gray-600 mb-1">
                <span className="font-medium">Scope:</span> {project.scope}
              </p>

              <p className="text-gray-600 mb-1">
                <span className="font-medium">Project Status:</span> {project.projectStatus}
              </p>

              <p className="text-gray-600 mb-1">
                <span className="font-medium">Budget:</span> ${project.budget.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
