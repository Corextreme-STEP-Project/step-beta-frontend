import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // For dynamic ID in route
// import { apiClient } from "../config/apiClient";

const PerformanceIndicatorDetail = () => {
  const { id } = useParams(); // Assumes this component is used in a route with a parameter, e.g., /performanceindicator/:id
  const [indicator, setIndicator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerformanceIndicator = async () => {
      try {
        const response = await apiClient.get(`/performanceindicator/${id}`);
        setIndicator(response.data);
      } catch (err) {
        setError("Failed to load performance indicator.");
      } finally {
        setLoading(false);
      }
    };

    fetchPerformanceIndicator();
  }, [id]);

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Performance Indicator Details</h3>
      {indicator ? (
        <div>
          <p>
            <span className="font-semibold">Description:</span> {indicator.description}
          </p>
          <p>
            <span className="font-semibold">Target Value:</span> {indicator.targetValue}
          </p>
          <p>
            <span className="font-semibold">Actual Value:</span> {indicator.actualValue}
          </p>
          <p>
            <span className="font-semibold">Milestone ID:</span> {indicator.milestoneId}
          </p>
          <p>
            <span className="font-semibold">Achieved:</span> {indicator.achieved ? "Yes" : "No"}
          </p>
        </div>
      ) : (
        <p className="text-gray-500">Performance indicator not found.</p>
      )}
    </div>
  );
};

export default PerformanceIndicatorDetail;
