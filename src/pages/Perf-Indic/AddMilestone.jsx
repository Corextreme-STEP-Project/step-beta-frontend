import React, { useState } from "react";
import { apiAddMilestone} from "../../services/product";

const AddMilestoneForm = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    milestoneName: "",
    description: "",
    targetDate: "",
    status: "in progress",
    performanceIndicators: "",
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
      projectName: formData.projectName,
      milestoneName: formData.milestoneName,
      // userID: formData.userID,
      description: formData.description,
      targetDate: formData.targetDate,  
      status: formData.status,
      performanceIndicators: formData.performanceIndicators
    };

    try {
      const response = await apiAddMilestone(payload);
      if (response.status === 200) {
        setSuccessMessage("Project added successfully!");
        setError("");
        setFormData({
            projectName: "",
            milestoneName: "",
            // userID: "",
            description: "",
            targetDate: "",
            status: "in progress",
            performanceIndicators: ""
        });
      }
      setTimeout(() => {
        navigate("/milestone-list"); 
      }, 1000); 
    } catch (err) {
      setError("Failed to add project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-milestone-form max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl text-center font-bold text-gray-800 mb-6">Add A New Milestone</h2>
      
      {successMessage && <p className="text-green-600">{successMessage}</p>}
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700">Project Name</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Project Name"
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-gray-700">Milestone Name</label>
          <input
            type="text"
            id="milestoneName"
            name="milestoneName"
            value={formData.milestoneName}
            onChange={handleChange}
            placeholder="Milestone Name"
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-gray-700">Officer</label>
          <input
            type="text"
            id="userID"
            name="userID"
            value={formData.userID}
            onChange={handleChange}
            placeholder="Officer"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Milestone Description"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="targetDate" className="block text-gray-700">Target Date</label>
          <input
            type="date"
            id="targetDate"
            name="targetDate"
            value={formData.targetDate}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="status" className="block text-gray-700">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div>
          <label htmlFor="performanceIndicators" className="block text-gray-700">Performance Indicators</label>
          <input
            type="text"
            id="performanceIndicators"
            name="performanceIndicators"
            value={formData.performanceIndicators}
            onChange={handleChange}
            placeholder="Enter performance indicators"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <button type="submit" className="w-full px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition duration-200" disabled={loading}>
          {loading ? "Adding..." : "Add Milestone"}
        </button>
      </form>
    </div>
  );
};

export default AddMilestoneForm;