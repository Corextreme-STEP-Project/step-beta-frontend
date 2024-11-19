// import React, { useEffect, useState } from "react";
// import { apiGetMilestones } from "../../services/product";

// const MilestoneList = () => {
//   const [milestones, setMilestones] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchMilestones = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const response = await apiGetMilestones();
//       setMilestones(response.data);
//     } catch (error) {
//       setError("Error fetching milestones.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMilestones();
//   }, []);

//   const getStatusTextColor = (status) => {
//     switch (status) {
//       case "completed":
//         return "text-green-600 font-semibold"; 
//       case "in Progress":
//         return "text-yellow-600 font-semibold"; 
//       case "pending":
//         return "text-red-600 font-semibold"; 
//       default:
//         return "text-gray-500"; 
//     }
//   }

//   return (
//     <div className="overflow-x-auto p-6 bg-gray-50 rounded-xl shadow-lg">
//       {loading && <p className="text-center text-gray-500">Loading...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//         <thead className="bg-emerald-600 text-white text-xs uppercase tracking-wider">
//           <tr>
//             <th className="px-6 py-3 text-left font-medium">Project Title</th>
//             <th className="px-6 py-3 text-left font-medium">Milestone Name</th>
//             <th className="px-6 py-3 text-left font-medium">Description</th>
//             <th className="px-6 py-3 text-left font-medium">Officer</th>
//             <th className="px-6 py-3 text-left font-medium">Target Date</th>
//             <th className="px-6 py-3 text-left font-medium">Status</th>
//             <th className="px-6 py-3 text-left font-medium">Performance Indicators</th>
//           </tr>
//         </thead>
//         <tbody>
//           {milestones.length === 0 ? (
//             <tr>
//               <td colSpan="7" className="text-center py-4 text-gray-500">
//                 No milestones found.
//               </td>
//             </tr>
//           ) : (
//             milestones.map((milestone) => (
//               <tr key={milestone.id} className="text-sm text-gray-700 hover:bg-blue-50">
//                 <td className="px-6 py-4 border-b">{milestone.projectTitle}</td>
//                 <td className="px-6 py-4 border-b">{milestone.milestoneName}</td>
//                 <td className="px-6 py-4 border-b">{milestone.description}</td>
//                 <td className="px-6 py-4 border-b">{milestone.officer}</td>
//                 <td className="px-6 py-4 border-b">{milestone.targetDate}</td>
//                 <td className={`px-6 py-4 border-b ${getStatusTextColor(milestone.status)}`}>
//                 {milestone.status}</td>
//                 <td className="px-6 py-4 border-b">{milestone.performanceIndicators}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MilestoneList;

import React, { useEffect, useState } from "react";
import { apiGetMilestones } from "../../services/product";

const MilestoneList = () => {
  const [milestones, setMilestones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMilestones = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await apiGetMilestones();
      setMilestones(response.data);
    } catch (error) {
      setError("Error fetching milestones.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMilestones();
  }, []);

  const getStatusStyles = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-600 font-semibold";
      case "in progress":
        return "text-yellow-400 font-semibold";
      case "Pending":
        return "text-red-600 font-semibold";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="overflow-x-auto p-6 bg-gray-50 rounded-xl shadow-lg">
       {/* <h2 className="text-2xl text-center font-bold text-gray-800">List of Milestones</h2> */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-emerald-600 text-white text-xs uppercase tracking-wider">
          <tr>
            <th className="px-4 py-3 text-left">Project Title</th>
            <th className="px-4 py-3 text-left">Milestone Name</th>
            <th className="px-4 py-3 text-left">Description</th>
            <th className="px-4 py-3 text-left">Officer</th>
            <th className="px-4 py-3 text-left">Target Date</th>
            <th className="px-4 py-3 text-left">Performance Indicators</th>
            <th className="px-4 py-3 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {milestones.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center py-4 text-gray-500">
                No milestones found.
              </td>
            </tr>
          ) : (
            milestones.map((milestone, index) => (
              <tr key={milestone.id} className="border-b">
                <td className="px-4 py-3 border-r">{milestone.projectName}</td>
                <td className="px-4 py-3 border-r">{milestone.name}</td>
                <td className="px-4 py-3 border-r">{milestone.description}</td>
                <td className="px-4 py-3 border-r">{milestone.userID}</td>
                <td className="px-4 py-3 border-r">{milestone.targetDate}</td>
                <td className="px-4 py-3 border-r">{milestone.performanceIndicators}</td>
                <td className={`px-4 py-3 text-center ${getStatusStyles(milestone.status)}`}>
                  {milestone.status}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MilestoneList;
