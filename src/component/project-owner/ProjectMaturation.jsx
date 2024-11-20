import React from 'react'

// This component represents the project maturation process which may include form inputs or details required to create or manage projects...

const ProjectMaturation = () => {
    return (
        <div className="p-4 md:p-8 bg-white shadow-md rounded-lg mt-4 md:mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Maturation</h2>
            <p className="text-gray-600 mb-6">
                Manage the process of maturing projects for contract awarding. Fill in the details below to initiate a new project.
            </p>
            <div>
                <form className="space-y-3">

                    <div>
                        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1">
                            Project Name
                        </label>
                        <input
                            type="text"
                            id="projectName"
                            name="projectName"
                            placeholder="Enter project name"
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">
                            Project Description
                        </label>
                        <textarea
                            id="projectDescription"
                            name="projectDescription"
                            placeholder="Provide a brief description of the project"
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                            Budget (USD)
                        </label>
                        <input
                            type="number"
                            id="budget"
                            name="budget"
                            placeholder="Enter budget amount"
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                            Expected Start Date
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition"
                    >
                        Create Project
                    </button>
                </form>

                <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 md:space-x-4">
                    <button className="w-full md:w-auto px-5 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition">
                        Start New Project
                    </button>
                    <button className="w-full md:w-auto px-5 py-2 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition">
                        View Project Status
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectMaturation