import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import pic from "../../../assets/images/image 1.jpeg";
import { apiAddProject } from "../../../services/product";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    projectTitle: "",
    description: "",
    budget: "",
    scope: "",
    keyRequirements: "",
    // projectStatus: "",
    // projectBegins: "",
    // projectEnds: "",
    // statusDescription: "",
    // statusChangeAt: ""
  });

  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccessMessage("");
  setError("");

  const payload = {
    projectTitle: formData.projectTitle,
    description: formData.description,
    budget: Number(formData.budget),  
    scope: formData.scope,
    keyRequirements: formData.keyRequirements.split(",").map((item) => item.trim()), // Convert to an array of strings
  };

  try {
    const response = await apiAddProject(payload);
    if (response.status === 201) {
     
      setSuccessMessage("Project added successfully!");
      setError("");
      setFormData({
        projectTitle: "",
        description: "",
        budget: "",
        scope: "",
        keyRequirements: "",
      });
    } 
  } catch (err) {
    setError("Failed to add project. Please try again.");
  }
  
};


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 md:p-12 flex items-center">
        <div className="hidden md:block md:w-1/2 border-gray-200 pl-8">
          <img src={pic} alt="Illustration" className="w-full h-auto rounded-lg mb-36" />
        </div>

        <div className="flex-1 pr-8">
          <div className="flex text-center justify-center items-center mb-6">
            <h2 className="text-3xl font-semibold ml-4 text-blue-700">Start A New Project</h2>
          </div>

          {successMessage && <p className="text-green-600">{successMessage}</p>}
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="projectTitle">Project Title</label>
              <input type="text" name="projectTitle" value={formData.projectTitle} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" placeholder="Enter project name" />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="description">Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" placeholder="Describe the project" rows="3" />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="budget">Budget</label>
              <input type="number" name="budget" value={formData.budget} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="scope">Scope</label>
              <input type="text" name="scope" value={formData.scope} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="keyRequirements">Key Requirements</label>
              <input type="text" name="keyRequirements" value={formData.keyRequirements} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" placeholder="Enter key requirements, separated by commas" />
            </div>

            {/* <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="projectStatus">Project Status</label>
              <select name="projectStatus" value={formData.projectStatus} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200">
                <option value="">Select status</option>
                <option value="Maturation">Maturation</option>
                <option value="Procurement">Procurement</option>
                <option value="Execution">Execution</option>
                <option value="Monitoring">Monitoring</option>
              </select>
            </div> */}

            {/* <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="projectBegins">Project Start Date</label>
              <input type="date" name="projectBegins" value={formData.projectBegins} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="projectEnds">Project End Date</label>
              <input type="date" name="projectEnds" value={formData.projectEnds} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="statusDescription">Status Description</label>
              <textarea name="statusDescription" value={formData.statusDescription} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" placeholder="Provide status details" rows="3" />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="statusChangeAt">Status Change Date</label>
              <input type="date" name="statusChangeAt" value={formData.statusChangeAt} onChange={handleChange}  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" />
            </div> */}


            <div className="flex items-center justify-between mt-10">
              <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                Back
              </button>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition" disabled={loading}>
                {loading ? "Adding..." : "Add Project"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
