import React, { useEffect, useState } from "react";
import { apiGetPerformanceIndicators } from "../../services/product";

const PerformanceIndicatorList = () => {
  const [indicators, setIndicators] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPerformanceIndicators = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await apiGetPerformanceIndicators();
      setIndicators(response.data);
    } catch (error) {
      setError("Error fetching performance indicators.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPerformanceIndicators();
  }, []);

  // Function to calculate percentage progress
  const calculateProgress = (target, actual) => {
    return ((actual / target) * 100).toFixed(0);
  };

  return (
    <div className="performance-indicator-list max-w-6xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl text-center font-bold text-gray-800">Performance Indicators</h2>
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">Description</th>
              <th className="px-6 py-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">Target Value</th>
              <th className="px-6 py-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">Actual Value</th>
              <th className="px-6 py-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">Progress</th>
              <th className="px-6 py-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">Status</th>
              <th className="px-6 py-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">Milestone ID</th>
            </tr>
          </thead>
          <tbody>
            {indicators.map((indicator) => {
              const progress = calculateProgress(indicator.targetValue, indicator.actualValue);
              const status = progress >= 100 ? "Achieved" : progress >= 50 ? "In Progress" : "Behind Target";
              const statusColor = progress >= 100 ? "bg-green-500" : progress >= 50 ? "bg-yellow-500" : "bg-red-500";

              return (
                <tr key={indicator.id} className="hover:bg-gray-100 transition duration-300">
                  <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">{indicator.description}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">{indicator.targetValue}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">{indicator.actualValue}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
                    <div className="relative pt-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm">Progress</span>
                        <span className="font-semibold text-sm">{progress}%</span>
                      </div>
                      <div className="flex mb-2">
                        <div className="flex-1 rounded-full bg-gray-200" style={{ height: "8px" }}>
                          <div
                            className={`rounded-full ${statusColor}`}
                            style={{ width: `${progress}%`, height: "8px" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
                    <div className={`text-white p-2 rounded-md inline-block ${statusColor}`}>{status}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">{indicator.milestoneId}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceIndicatorList;
