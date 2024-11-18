import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { apiClient } from "../config/apiClient";

const MilestoneDetails = () => {
  const { id } = useParams();
  const [milestone, setMilestone] = useState(null);

  useEffect(() => {
    const fetchMilestoneDetails = async () => {
      try {
        const response = await apiClient.get(`/milestone/${id}`);
        setMilestone(response.data);
      } catch (error) {
        console.error("Error fetching milestone details:", error);
      }
    };
    fetchMilestoneDetails();
  }, [id]);

  if (!milestone) return <div>Loading...</div>;

  return (
    <div className="milestone-details max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800">{milestone.name}</h2>
      <p className="text-gray-600">{milestone.description}</p>
      <p className="mt-2 text-gray-700"><strong>Status:</strong> {milestone.status}</p>
      <p className="mt-2 text-gray-700"><strong>Target Date:</strong> {milestone.targetDate}</p>
      <button
        className="mt-6 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-200"
        onClick={() => handleBack()}
      >
        Back to Milestones
      </button>
    </div>
  );
};

const handleBack = () => {
  // Navigate back to the milestone list
};

export default MilestoneDetails;
