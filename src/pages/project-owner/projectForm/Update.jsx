import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiUpdateProjectStatus } from "../../../services/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const EditProjectStatus = () => {
  const { id } = useParams(); // Get project ID from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    projectStatus: "",
    statusDescription: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Submit form data to update project status
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await apiUpdateProjectStatus(id, {
        projectStatus: formData.projectStatus,
        statusDescription: formData.statusDescription,
      });
      if (response.status === 200) {
        setSuccessMessage("Project status updated successfully!");
        setErrorMessage("");
        // Redirect after 1 second
      }
      setTimeout(() => {
        navigate(`/project-list`);
      }, 1000);
      
    } catch (err) {
      setErrorMessage("Failed to update project status. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-lime-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 md:p-12">
        
        {/* Page Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-green-700">Edit Project Status</h2>
        </div>

        {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}

        {/* Edit Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="projectStatus">Project Status</label>
            <select
              name="projectStatus"
              value={formData.projectStatus}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            >
              <option value="">Select status</option>
              <option value="Maturation">Maturation</option>
              <option value="Procurement">Procurement</option>
              <option value="Execution">Execution</option>
              <option value="Monitoring">Monitoring</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="statusDescription">Status Description</label>
            <textarea
              name="statusDescription"
              value={formData.statusDescription}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              placeholder="Provide status details"
              rows="3"
            />
          </div>

          <div className="flex items-center justify-between mt-10">
            <button
              type="button"
              className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800"
              onClick={() => navigate(-1)}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
              disabled={loading}
            
            >
              {loading ? "Updating..." : "Update Status"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProjectStatus;
