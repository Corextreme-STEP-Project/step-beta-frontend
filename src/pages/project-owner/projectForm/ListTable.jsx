import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiGetProjects } from "../../../services/product";
import { FaFile, FaChevronDown, FaChevronUp } from "react-icons/fa";

const ListTable = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProjects, setSelectedProjects] = useState(new Set());
    const [itemsPerPage] = useState(5); // Adjust as needed
    const [isFullListView, setIsFullListView] = useState(false); // State for full list view

    const fetchProjects = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await apiGetProjects();
            setProjects(response.data);
        } catch (err) {
            setError("Failed to fetch projects.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // Pagination logic
    const indexOfLastProject = currentPage * itemsPerPage;
    const indexOfFirstProject = indexOfLastProject - itemsPerPage;
    const currentProjects = isFullListView ? projects : projects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            const allIds = new Set(currentProjects.map(project => project.id));
            setSelectedProjects(allIds);
        } else {
            setSelectedProjects(new Set());
        }
    };

    const handleSelectProject = (projectId) => {
        const updatedSelection = new Set(selectedProjects);
        if (updatedSelection.has(projectId)) {
            updatedSelection.delete(projectId);
        } else {
            updatedSelection.add(projectId);
        }
        setSelectedProjects(updatedSelection);
    };

    const toggleView = () => {
        setIsFullListView(!isFullListView);
        setCurrentPage(1); // Reset to the first page when switching views
    };

    return (
        <div className="p-8 bg-lime-50 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-green-600">Tincidunt</h1>
                <button 
                    onClick={toggleView} 
                    className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
                >
                    {isFullListView ? (
                        <>
                            <FaChevronUp className="mr-2" /> Show Paginated
                        </>
                    ) : (
                        <>
                            <FaChevronDown className="mr-2" /> See All
                        </>
                    )}
                </button>
            </div>

            {loading && <p className="text-center text-gray-500">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">
                            <input
                                type="checkbox"
                                onChange={handleSelectAll}
                                checked={currentProjects.length > 0 && currentProjects.every(project => selectedProjects.has(project.id))}
                            />
                        </th>
                        <th className="py-2 px-4 border-b">Project ID</th>
                        <th className="py-2 px-4 border-b">Project Name</th>
                        <th className="py-2 px-4 border-b">Phase</th>
                        <th className="py-2 px-4 border-b">Officer</th>
                        <th className="py-2 px-4 border-b">Last Update</th>
                        <th className="py-2 px-4 border-b">Progression</th>
                        <th className="py-2 px-4 border-b">Budget</th>
                        <th className="py-2 px-4 border-b">Quick Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentProjects.map((project) => (
                        <tr key={project.id}>
                            <td className="py-2 px-4 border-b">
                                <input
                                    type="checkbox"
                                    checked={selectedProjects.has(project.id)}
                                    onChange={() => handleSelectProject(project.id)}
                                />
                            </td>
                            <td className="py-2 px-4 border-b">{project.id.slice(-4)}</td>
                            <td className="py-2 px-4 border-b">{project.projectTitle}</td>
                            <td className="py-2 px-4 border-b">{project.projectStatus}</td>
                            <td className="py-2 px-4 border-b">{project.officer}</td>
                            <td className="py-2 px-4 border-b">{new Date(project.createdAt).toLocaleDateString()}</td>
                            <td className="py-2 px-4 border-b">
                                <div className="relative w-full bg-gray-200 rounded-full">
                                    <div
                                        className={`absolute top-0 left-0 h-full bg-green-500 rounded-full`}
                                        style={{ width: `${project.progression}%` }}
                                    ></div>
                                </div>
                                {project.progression}%
                            </td>
                            <td className="py-2 px-4 border-b"><span>GHc</span>{project.budget.toLocaleString()}</td>
                            <td className="py-2 px-4 border-b">
                                <Link to={`${project.id}`} className="text-blue-500" title="View Project">
                                    <FaFile className="h-6 w-6" />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            {!isFullListView && (
                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="bg-gray-300 px-4 py-2 rounded"
                    >
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="bg-gray-300 px-4 py-2 rounded"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default ListTable;
