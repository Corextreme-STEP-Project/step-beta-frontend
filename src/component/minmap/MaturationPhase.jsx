import React, { useState } from 'react';
import { FaEdit, FaFileAlt, FaTrash } from 'react-icons/fa';

// ProgressBar Component
const ProgressBar = ({ value }) => {
    // Determine the color based on the value
    let progressColor = 'bg-red-500'; // Default red color for values < 30%
    if (value >= 30 && value < 60) {
        progressColor = 'bg-yellow-500'; // Yellow color for values between 30% and 60%
    } else if (value >= 60) {
        progressColor = 'bg-emerald-500'; // Green color for values >= 60%
    }

    return (
        <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
                <span className="text-sm font-semibold text-gray-600"></span>
            </div>
            <div className="flex mb-2 items-center justify-between">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className={`h-2.5 rounded-full ${progressColor}`}
                        style={{ width: `${value}%` }}
                    ></div>
                </div>
                <span className="ml-2 text-sm font-semibold text-gray-600">{`${value}%`}</span>
            </div>
        </div>
    );
};

// MaturationPhaseTable Component
const MaturationPhase = () => {
    const [selectedProjects, setSelectedProjects] = useState([]);

    const projects = [
        { id: 1, name: 'Project Alpha', phase: 'Maturation', officer: 'John Doe', lastUpdate: '2024-11-01', progression: 20, status: 'Pending' },
        { id: 2, name: 'Project Beta', phase: 'Maturation', officer: 'Jane Smith', lastUpdate: '2024-10-28', progression: 50, status: 'In progress' },
        { id: 3, name: 'Project Gamma', phase: 'Maturation', officer: 'Michael Johnson', lastUpdate: '2024-11-02', progression: 100, status: 'Complete' },
        { id: 4, name: 'Project Delta', phase: 'Maturation', officer: 'Emily Davis', lastUpdate: '2024-10-30', progression: 40, status: 'In progress' },
    ];

    const handleCheckboxChange = (projectId) => {
        setSelectedProjects((prevSelected) =>
            prevSelected.includes(projectId)
                ? prevSelected.filter((id) => id !== projectId)
                : [...prevSelected, projectId]
        );
    };

    // Function to determine status color
    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending':
                return 'text-red-500 font-semibold';
            case 'In progress':
                return 'text-yellow-500 font-semibold';
            case 'Complete':
                return 'text-emerald-500 font-semibold';
            default:
                return '';
        }
    };

    return (
        <section className="mt-4 flex overflow-hidden rounded-lg border border-gray-300">
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                            <input
                                type="checkbox"
                                checked={selectedProjects.length === projects.length}
                                onChange={() =>
                                    setSelectedProjects(
                                        selectedProjects.length === projects.length
                                            ? []
                                            : projects.map((project) => project.id)
                                    )
                                }
                            />
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center">Project ID</th>
                        <th className="border border-gray-300 px-2 py-2 text-center">Name</th>
                        <th className="border border-gray-300 px-2 py-2 text-center">Phase</th>
                        <th className="border border-gray-300 px-2 py-2 text-center">Officer</th>
                        <th className="border border-gray-300 px-2 py-2 text-center">Last Updated</th>
                        <th className="border border-gray-300 px-2 py-2 text-center">Progression</th>
                        <th className="border border-gray-300 px-2 py-2 text-center">Status</th>
                        <th className="border border-gray-300 px-2 py-2 text-center">Quick Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                                <input
                                    type="checkbox"
                                    checked={selectedProjects.includes(project.id)}
                                    onChange={() => handleCheckboxChange(project.id)}
                                />
                            </td>
                            <td className="border border-gray-300 px-2 py-2">{project.id}</td>
                            <td className="border border-gray-300 px-2 py-2">{project.name}</td>
                            <td className="border border-gray-300 px-2 py-2">{project.phase}</td>
                            <td className="border border-gray-300 px-2 py-2">{project.officer}</td>
                            <td className="border border-gray-300 px-2 py-2">{project.lastUpdate}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                                <ProgressBar value={project.progression} />
                            </td>
                            <td className={`border px-4 py-2 ${getStatusColor(project.status)}`}>
                                {project.status}
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                                <button className="text-blue-400 px-2 py-1 rounded hover:bg-gray-100 mx-2">
                                    <FaFileAlt className="inline mr-2" />
                                </button>
                               
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default MaturationPhase;
