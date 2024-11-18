import React from 'react';

const Projects = () => {
    // Sample data for demonstration; replace with dynamic data as needed
    const projectList = [
        { id: 1, name: 'Highway Expansion Project', owner: 'Department of Infrastructure', status: 'In Progress', startDate: '2024-09-01' },
        { id: 2, name: 'School Renovation Program', owner: 'Education Board', status: 'Completed', startDate: '2024-05-10' },
        { id: 3, name: 'Water Supply Enhancement', owner: 'Public Works Agency', status: 'Pending Approval', startDate: '2024-11-05' },
        // Add more projects as needed
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-semibold mb-6">Projects Overview</h2>
            <p className="mb-4">Below is a list of current projects, their owners, statuses, and start dates.</p>

            {/* Projects Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4 border-b text-left">Project ID</th>
                            <th className="py-2 px-4 border-b text-left">Project Name</th>
                            <th className="py-2 px-4 border-b text-left">Owner</th>
                            <th className="py-2 px-4 border-b text-left">Status</th>
                            <th className="py-2 px-4 border-b text-left">Start Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projectList.length > 0 ? (
                            projectList.map((project) => (
                                <tr key={project.id} className="hover:bg-gray-100 transition duration-200">
                                    <td className="py-2 px-4 border-b">{project.id}</td>
                                    <td className="py-2 px-4 border-b">{project.name}</td>
                                    <td className="py-2 px-4 border-b">{project.owner}</td>
                                    <td className={`py-2 px-4 border-b font-bold ${
                                        project.status === 'In Progress' ? 'text-blue-600' :
                                        project.status === 'Completed' ? 'text-green-600' :
                                        'text-orange-500'
                                    }`}>
                                        {project.status}
                                    </td>
                                    <td className="py-2 px-4 border-b">{project.startDate}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="py-2 px-4 text-center border-b">No projects available.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Projects;
