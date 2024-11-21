import React, { useState } from 'react';

// Sample component for Receptions/Payments
const ReceptionsPayments = () => {
    // State for managing receptions/payments data and filters
    const [data, setData] = useState([
        { id: 1, type: 'Reception', description: 'Reception for school project', date: '2024-10-12', amount: '5000' },
        { id: 2, type: 'Payment', description: 'Payment for road construction', date: '2024-09-22', amount: '3000' },
        { id: 3, type: 'Reception', description: 'Reception for hospital supplies', date: '2024-08-15', amount: '8000' },
        { id: 4, type: 'Payment', description: 'Payment for office supplies', date: '2024-07-10', amount: '1500' },
        { id: 5, type: 'Reception', description: 'Reception for community event', date: '2024-06-05', amount: '2000' },
        { id: 6, type: 'Payment', description: 'Payment for software license', date: '2024-05-20', amount: '1200' },
        { id: 7, type: 'Reception', description: 'Reception for charity fundraiser', date: '2024-04-15', amount: '7000' },
        { id: 8, type: 'Payment', description: 'Payment for marketing campaign', date: '2024-03-10', amount: '4000' },
        { id: 9, type: 'Reception', description: 'Reception for new product launch', date: '2024-02-05', amount: '6000' },
        { id: 10, type: 'Payment', description: 'Payment for equipment rental', date: '2024-01-01', amount: '2500' },
    ]);
    const [filter, setFilter] = useState('All');

    // Filtered data based on selected type
    const filteredData = filter === 'All' ? data : data.filter(item => item.type === filter);

    return (
        <div className="p-4 md:p-6 lg:p-8 bg-white shadow-md rounded-md">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">Receptions/Payments</h2>
            <p className="mt-2 text-gray-600">View and manage all receptions and payments.</p>

            {/* Filter Options */}
            <div className="mt-4 flex flex-col md:flex-row items-center">
                <label htmlFor="filter" className="mr-2 mb-2 md:mb-0 text-gray-700">Filter by:</label>
                <select
                    id="filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                    <option value="All">All</option>
                    <option value="Reception">Receptions</option>
                    <option value="Payment">Payments</option>
                </select>
            </div>

            {/* Table to Display Data */}
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <th className="border p-2 text-sm md:text-base lg:text-lg text-left">ID</th>
                        <th className="border p-2 text-sm md:text-base lg:text-lg text-left">Type</th>
                        <th className="border p-2 text-sm md:text-base lg:text-lg text-left">Description</th>
                        <th className="border p-2 text-sm md:text-base lg:text-lg text-left">Date</th>
                        <th className="border p-2 text-sm md:text-base lg:text-lg text-left">Amount</th>
                        <th className="border p-2 text-sm md:text-base lg:text-lg text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="border p-2 text-sm md:text-base lg:text-lg ">{item.id}</td>
                                <td className="border p-2 text-sm md:text-base lg:text-lg">{item.type}</td>
                                <td className="border p-2 text-sm md:text-base lg:text-lg">{item.description}</td>
                                <td className="border p-2 text-sm md:text-base lg:text-lg">{item.date}</td>
                                <td className="border p-2 text-sm md:text-base lg:text-lg">${item.amount}</td>
                                <td className="border p-2 text-sm md:text-base lg:text-lg">
                                    <button className="text-emerald-600 hover:underline mr-2">View</button>
                                    <button className="text-red-600 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="border p-2 text-center text-gray-500">
                                No data available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ReceptionsPayments;
