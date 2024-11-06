import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProjects = async () => {
    setLoading(true);
    setError("");
    try {
      // const response = await axios.get(`${BASE_URL}/projects`);
      const response = {
        data: [
          { id: 1, projectTitle: "Community Health Center", projectOwner: "Ministry of Health", projectStatus: "In Progress", budget: 50000 },
          { id: 2, projectTitle: "School Renovation Project", projectOwner: "Ministry of Education", projectStatus: "Completed", budget: 20000 },
          { id: 3, projectTitle: "Road Development", projectOwner: "Ministry of Roads and Highways", projectStatus: "Planning", budget: 150000 },
        ]
      }; // Dummy data to simulate response
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
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">List of Projects</h1>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <div className="border p-6 rounded-lg shadow-md hover:shadow-xl bg-white transform hover:scale-105 transition-transform duration-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.projectTitle}</h2>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Project Owner:</span> {project.projectOwner}
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
