import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdTitle, MdDescription } from "react-icons/md";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoScanCircleSharp } from "react-icons/io5";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { apiGetSingleProject } from "../../../services/product";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProject = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await apiGetSingleProject(id);
      setProject(response.data);
    } catch (err) {
      setError("Failed to fetch project details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!project) return <p className="text-center text-gray-500">Project not found.</p>;

  return (
    <div className="min-h-screen bg-lime-50 flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg p-8 relative">
        <Link className="absolute left-4 top-4 text-gray-600 hover:text-green-500 transition" to={`/projectowner`}>
          <FontAwesomeIcon icon={faCircleArrowLeft} size="lg" />
        </Link>

        <button
          onClick={() => navigate(`edit`)}
          className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition"
        >Edit
        </button>


        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Project Details</h1>
          <p className="text-md text-gray-500">
            All the important information you need about this project.
          </p>
        </div>


        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">General Information</h2>
          <div className="grid grid-cols-2 gap-8 text-gray-700">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faUser} className="text-gray-500 text-2xl" />
                <div>
                  <p className="text-sm text-gray-500">Project Owner</p>
                  <div className="font-medium">{project.projectOwner}</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-center space-x-4">
                <MdTitle className="text-gray-500 text-2xl" />
                <div>
                  <p className="text-sm text-gray-500">Project Title</p>
                  <div className="font-medium">{project.projectTitle}</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-center space-x-4">
                <MdDescription className="text-gray-500 text-2xl" />
                <div>
                  <p className="text-sm text-gray-500">Description</p>
                  <div className="font-medium">{project.description}</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-center space-x-4">
                <IoScanCircleSharp className="text-gray-500 text-2xl" />
                <div>
                  <p className="text-sm text-gray-500">Scope</p>
                  <div className="font-medium">{project.scope}</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-center space-x-4">
                <FaMoneyCheckDollar className="text-gray-500 text-2xl" />
                <div>
                  <p className="text-sm text-gray-500">Budget</p>
                  <div className="font-medium">${project.budget.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="mb-8">
          <h2 className="text-md text-gray-500 mb-2">Ongoing</h2>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div className="bg-yellow-500 h-3 rounded-full transition-all ease-in-out duration-500" style={{ width: "60%" }}></div>
          </div>
          <p className="text-center text-sm text-gray-500">Project is progressing to the next phase</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Project Timeline & Status</h2>
          <div className="grid grid-cols-2 gap-8 text-gray-700">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <p className="text-sm text-gray-500">Key Requirements</p>
              <div className="font-medium">{project.keyRequirements}</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <p className="text-sm text-gray-500">Project Begins</p>
              <div className="font-medium">{new Date(project.projectBegins).toLocaleDateString()}</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <p className="text-sm text-gray-500">Project Ends</p>
              <div className="font-medium">{new Date(project.projectEnds).toLocaleDateString()}</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <p className="text-sm text-gray-500">Project Status</p>
              <div className="font-medium">{project.projectStatus}</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <p className="text-sm text-gray-500">Status Description</p>
              <div className="font-medium">{project.statusDescription}</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <p className="text-sm text-gray-500">Status Change Date</p>
              <div className="font-medium">{new Date(project.StatusChangeAt).toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
