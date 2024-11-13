import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiUpdateProjectStatus } from "../../../services/product";

const UpdateProjectStatus = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projectStatus, setProjectStatus] = useState("");
  const [statusDescription, setStatusDescription] = useState("");
  const [error, setError] = useState("");

  const handleSave = async () => {
    try {
      await apiUpdateProjectStatus(id, { projectStatus, statusDescription });
      navigate(`/project/${id}`); 
    } catch (error) {
      setError("Failed to update project status.");
    }
  };

  const handleClose = () => {
    navigate(-1); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-10 px-4">
      <div className="border-solid flex flex-col justify-center items-center border rounded-lg p-6 md:p-10 w-full max-w-lg mx-auto bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-4">Update Project Status</h2>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="w-full space-y-4">
          <div>
            <label className="font-semibold">Project Status:</label>
            <input
              type="text"
              value={projectStatus}
              onChange={(e) => setProjectStatus(e.target.value)}
              className="border rounded w-full p-2 mt-1"
              placeholder="Enter new status"
            />
          </div>
          
          <div>
            <label className="font-semibold">Status Description:</label>
            <textarea
              value={statusDescription}
              onChange={(e) => setStatusDescription(e.target.value)}
              className="border rounded w-full p-2 mt-1"
              placeholder="Enter status description"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={handleClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Close
          </button>
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProjectStatus;
