import React from 'react';

const Reports = () => {
    // Example data for demonstration, can be replaced with dynamic content
    const reportTypes = [
        { id: 1, title: 'Project Progress Reports', description: 'Detailed insights into project progress and milestones.' },
        { id: 2, title: 'Tender Analysis Reports', description: 'Comprehensive analysis of tender submissions and selections.' },
        { id: 3, title: 'Compliance Reports', description: 'Monitoring compliance metrics and regulations adherence.' },
        { id: 4, title: 'Performance Metrics', description: 'Visualization of overall performance indicators.' },
        { id: 5, title: 'Archived Reports', description: 'Access to previously generated reports and data.' },
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-semibold mb-6">Reports</h2>
            <p className="mb-4">Generate and view detailed reports related to projects, tenders, and compliance.</p>

            {/* Reports Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {reportTypes.map(report => (
                    <div
                        key={report.id}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                        <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
                        <p className="text-gray-700">{report.description}</p>
                        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                            View Report
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reports;
