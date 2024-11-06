/* eslint-disable no-unused-vars */
import React from 'react';

//for viewing and awarding contracts.

const ContractAwarding = () => {
    return (
        <div className="p-8 bg-white shadow-lg rounded-lg mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contract Awarding</h2>
            <p className="text-gray-600 mb-6">
                Manage and award contracts to qualified contractors. Select the contractor and specify contract details to proceed.
            </p>



            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-gray-100 rounded-md shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700 mb-1">Contract #001</h3>
                    <p className="text-gray-500 mb-3">Status: Pending</p>
                    <button className="w-full py-2 px-4 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition">
                        Award Contract
                    </button>
                </div>

                <div className="p-5 bg-gray-100 rounded-md shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700 mb-1">Contract #002</h3>
                    <p className="text-gray-500 mb-3">Status: Pending</p>
                    <button className="w-full py-2 px-4 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition">
                        Award Contract
                    </button>
                </div>
            </div>
            <form className="space-y-6 mt-8">
                <div>
                    <label htmlFor="contractor" className="block text-sm font-medium text-gray-700 mb-1">
                        Select Contractor
                    </label>
                    <select
                        id="contractor"
                        name="contractor"
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Choose a contractor</option>
                        <option value="contractor1">Contractor 1</option>
                        <option value="contractor2">Contractor 2</option>
                        <option value="contractor3">Contractor 3</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="contractType" className="block text-sm font-medium text-gray-700 mb-1">
                        Contract Type
                    </label>
                    <select
                        id="contractType"
                        name="contractType"
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select contract type</option>
                        <option value="fixed">Fixed Price</option>
                        <option value="time">Time and Material</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Start Date
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
                    Award Contract
                </button>
            </form>
        </div>
    );
};

export default ContractAwarding;
