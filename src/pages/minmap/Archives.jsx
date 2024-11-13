import React from 'react';

const Archives = () => {
    // Sample data for demonstration; replace with dynamic data as needed
    const archivedProjects = [
        { id: 1, name: 'Old Town Road Renovation', owner: 'City Council', status: 'Completed', completionDate: '2023-03-20' },
        { id: 2, name: 'Library Modernization', owner: 'Education Board', status: 'Completed', completionDate: '2023-06-15' },
        { id: 3, name: 'Park Improvement Initiative', owner: 'Parks Department', status: 'Completed', completionDate: '2023-09-30' },
        // Add more archived projects as needed
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-semibold mb-6">Archived Projects</h2>
            <p className="mb-4">Below is a list of completed projects along with their owners, statuses, and completion dates.</p>

            {/* Archived Projects Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4 border-b text-left">Archive ID</th>
                            <th className="py-2 px-4 border-b text-left">Project Name</th>
                            <th className="py-2 px-4 border-b text-left">Owner</th>
                            <th className="py-2 px-4 border-b text-left">Status</th>
                            <th className="py-2 px-4 border-b text-left">Completion Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {archivedProjects.length > 0 ? (
                            archivedProjects.map((project) => (
                                <tr key={project.id} className="hover:bg-gray-100 transition duration-200">
                                    <td className="py-2 px-4 border-b">{project.id}</td>
                                    <td className="py-2 px-4 border-b">{project.name}</td>
                                    <td className="py-2 px-4 border-b">{project.owner}</td>
                                    <td className="py-2 px-4 border-b text-green-600 font-bold">{project.status}</td>
                                    <td className="py-2 px-4 border-b">{project.completionDate}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="py-2 px-4 text-center border-b">No archived projects available.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Archives;
