import React, { useState } from "react";
import { apiAddPerformanceIndicator } from "../../services/product";

const AddPerformanceIndicatorForm = () => {
  const [formData, setFormData] = useState({
    description: "",
    targetValue: "",
    actualValue: "",
    milestoneId: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await apiAddPerformanceIndicator.post("/performanceindicator", formData);
      setSuccessMessage("Performance indicator added successfully!");
      setFormData({
        description: "",
        targetValue: "",
        actualValue: "",
        milestoneId: "",
      });
    } catch (error) {
      setErrorMessage("Failed to add performance indicator. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Add Performance Indicator</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Target Value</label>
          <input
            type="number"
            name="targetValue"
            value={formData.targetValue}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Actual Value</label>
          <input
            type="number"
            name="actualValue"
            value={formData.actualValue}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Milestone ID</label>
          <input
            type="text"
            name="milestoneId"
            value={formData.milestoneId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-600"
        >
          {isSubmitting ? "Submitting..." : "Add Indicator"}
        </button>
        {successMessage && (
          <p className="text-green-500 mt-4">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 mt-4">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default AddPerformanceIndicatorForm;
