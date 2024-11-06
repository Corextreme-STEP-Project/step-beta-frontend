import React from "react";
import pic from "../../../assets/images/image 1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ProjectForm = () => {
  return (
    
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Flex container for image and form */}
      <div className="flex w-full max-w-6xl">
        {/* Background Image */}
        <div className="flex-1">
          <img
            src={pic}
            alt="background"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Form Container */}
        <div className="flex-1 flex justify-center  items-center ">
          <form className="w-full  p-8 bg-white  h-full pt-24">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-[#568bf5] mb-6">
              Start a New Project
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="projectOwner">Project Owner</label>
                <input type="text" name="projectOwner" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="projectTitle">Project Title</label>
                <input type="text" name="projectTitle" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="description">Description</label>
                <textarea name="description" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400" rows="4" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="scope">Scope</label>
                <input type="text" name="scope" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="budget">Budget</label>
                <input type="number" name="budget" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="projectStarts">Project Start Date</label>
                <input type="date" name="projectStarts" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="projectEnds">Project End Date</label>
                <input type="date" name="projectEnds" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="status">Project Status</label>
                <select name="status" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400">
                  <option value="Maturation">Maturation</option>
                  <option value="Procurement">Procurement</option>
                  <option value="Execution">Execution</option>
                  <option value="Monitoring">Monitoring</option>
                  <option value="Completed">Completed</option>
                  <option value="On-hold">On-hold</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="statusDescription">Status Description</label>
                <textarea name="statusDescription" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400" rows="3" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="compliance">Compliance</label>
                <input type="text" name="compliance" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mt-6">
              <button type="submit" className="w-full sm:w-auto bg-blue-500 text-white py-4 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-200">Add Project</button>
              <button type="button" className="w-full sm:w-auto bg-gray-400 text-white py-4 px-4 rounded-lg font-semibold hover:bg-gray-500 transition duration-200">
                <FontAwesomeIcon icon={faArrowLeft} /> Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
