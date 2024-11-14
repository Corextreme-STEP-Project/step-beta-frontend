const KPIAnalysis = () => {
  return (
    <div className="p-6">
      {/* Overview Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Key Performance Indicators (KPIs) Analysis
        </h1>
        <p className="text-gray-600 mt-2">
          Track the performance and compliance metrics across projects to
          identify strengths and areas needing improvement.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {[
          {
            title: "Average Compliance Rate",
            value: "85%",
            color: "bg-green-100 text-green-800",
          },
          {
            title: "Projects On Track",
            value: "60%",
            color: "bg-blue-100 text-blue-800",
          },
          {
            title: "Projects with Issues",
            value: "20%",
            color: "bg-yellow-100 text-yellow-800",
          },
          {
            title: "Average Time to Compliance",
            value: "15 days",
            color: "bg-gray-100 text-gray-800",
          },
          {
            title: "On-Time Completion Rate",
            value: "75%",
            color: "bg-indigo-100 text-indigo-800",
          },
          {
            title: "High-Risk Projects",
            value: "10%",
            color: "bg-red-100 text-red-800",
          },
        ].map((kpi, index) => (
          <div key={index} className={`p-4 rounded-lg border ${kpi.color}`}>
            <h2 className="text-lg font-semibold text-gray-800">{kpi.title}</h2>
            <span className="block mt-2 text-2xl font-bold">{kpi.value}</span>
          </div>
        ))}
      </div>

      {/* Trend Graphs and Data Visualization */}
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Compliance Rate Trend
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Placeholder for compliance rate trend graph */}
            <p className="text-center text-gray-500">
              [Graph Will be here]
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Time to Compliance Over Time
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Placeholder for time to compliance trend graph */}
            <p className="text-center text-gray-500">
              [Graph Will be here]
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Projects at Risk Trend
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Placeholder for projects at risk trend graph */}
            <p className="text-center text-gray-500">
              [Graph Will be here]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPIAnalysis;
