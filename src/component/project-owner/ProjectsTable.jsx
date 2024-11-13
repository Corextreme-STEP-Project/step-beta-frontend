// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import { FaFile } from 'react-icons/fa';
// import { FaFile } from "react-icons/fa";


const ProjectsTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

    const projects = [
        {
            id: '0786', name: 'Construction school Y', phase: 'Maturation', officer: 'Paul Janvier', lastUpdate: '29/10/24', progression: '40%', status: 'In progress'
        },
        {
            id: '0787', name: 'Road construction', phase: 'Execution', officer: 'Isculis enim', lastUpdate: '24/04/24', progression: '20%', status: 'Pending'
        },
        {
            id: '0786', name: 'Road construction', phase: 'Passation', officer: 'Tortor', lastUpdate: '08/10/24', progression: '60%', status: 'In progress'
        },
        {
            id: '0785', name: 'Construction school X', phase: 'Monitoring', officer: 'In quis', lastUpdate: '28/09/24', progression: '100%', status: 'Complete'
        },
    ];

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 ">View all</button>
                    <button className="bg-white border border-gray-300 text-gray-500 px-4 py-2 ">By month</button>
                </div>
                <button className="bg-white border border-gray-300 text-gray-500 px-4 py-2">Filters</button>
            </div>
            <table className="w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-100 text-gray-600 uppercase text-base leading-normal ">
                        <th className="py-3 px-4 text-left"><input type="checkbox" /></th>
                        <th className="py-3 px-4 text-left">Project ID</th>
                        <th className="py-3 px-4 text-left">Project Name</th>
                        <th className="py-3 px-4 text-left">Phase</th>
                        <th className="py-3 px-4 text-left">Officer</th>
                        <th className="py-3 px-4 text-left">Last Update</th>
                        <th className="py-3 px-4 text-left">Progression</th>
                        <th className="py-3 px-4 text-left">Status</th>
                        <th className="py-3 px-4 text-left">Quick Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700 text-base">
                    {currentProjects.map((project) => (
                        <tr key={project.id}>
                            <td className="py-3 px-4"><input type="checkbox" /></td>
                            <td className="py-3 px-4">{project.id}</td>
                            <td className="py-3 px-4">{project.name}</td>
                            <td className="py-3 px-4">{project.phase}</td>
                            <td className="py-3 px-4">{project.officer}</td>
                            <td className="py-3 px-4">{project.lastUpdate}</td>
                            <td className="py-3 px-4">{project.progression}</td>
                            <td className="py-3 px-4">
                                <span className={`px-2 py-1 rounded-full text-xs ${project.status === 'Complete'
                                    ? 'bg-green-100 text-green-800'
                                    : project.status === 'In progress'
                                        ? 'bg-yellow-100 text-yellow-800'
                                        : 'bg-red-100 text-red-800'
                                    }`}>
                                    {project.status}
                                </span>
                            </td>
                            <td className="py-3 px-4 flex justify-center space-x-4">
                                <FaFile className="text-blue-700 cursor-pointer " title="file" />
                            </td>
                        </tr>
                    ))
                    }
                </tbody >
            </table >
            <div className="flex justify-between mt-4">
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(projects.length / projectsPerPage)}>Next</button>
            </div>
        </div >
    );
};

export default ProjectsTable; 