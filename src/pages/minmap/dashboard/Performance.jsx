import React from 'react';

const Performance = () => {
    // Sample data for demonstration; replace with dynamic data as needed
    const performanceMetrics = [
        { id: 1, metric: 'Project Completion Rate', target: '90%', actual: '85%', status: 'On Track' },
        { id: 2, metric: 'Budget Utilization', target: '95%', actual: '92%', status: 'Within Budget' },
        { id: 3, metric: 'Vendor Compliance', target: '100%', actual: '98%', status: 'Compliant' },
        { id: 4, metric: 'Contract Renewal Rate', target: '85%', actual: '80%', status: 'Needs Attention' },
        // Add more metrics as needed
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-semibold mb-6">Performance Metrics Overview</h2>
            <p className="mb-4">The table below provides an overview of key performance metrics, target goals, actual achievements, and their current statuses.</p>

            {/* Performance Metrics Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4 border-b text-left">Metric ID</th>
                            <th className="py-2 px-4 border-b text-left">Performance Metric</th>
                            <th className="py-2 px-4 border-b text-left">Target</th>
                            <th className="py-2 px-4 border-b text-left">Actual</th>
                            <th className="py-2 px-4 border-b text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {performanceMetrics.length > 0 ? (
                            performanceMetrics.map((metric) => (
                                <tr key={metric.id} className="hover:bg-gray-100 transition duration-200">
                                    <td className="py-2 px-4 border-b">{metric.id}</td>
                                    <td className="py-2 px-4 border-b">{metric.metric}</td>
                                    <td className="py-2 px-4 border-b">{metric.target}</td>
                                    <td className="py-2 px-4 border-b">{metric.actual}</td>
                                    <td className={`py-2 px-4 border-b font-bold ${
                                        metric.status === 'On Track' ? 'text-blue-600' :
                                        metric.status === 'Within Budget' ? 'text-green-600' :
                                        metric.status === 'Needs Attention' ? 'text-orange-500' :
                                        'text-red-600'
                                    }`}>
                                        {metric.status}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="py-2 px-4 text-center border-b">No performance data available.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Performance;
