import React from 'react';

const Tenders = () => {
    // Example data for demonstration, can be replaced with real data
    const tendersList = [
        { id: 1, title: 'Open Tender for Road Construction', status: 'Open', submissionDeadline: '2024-11-15' },
        { id: 2, title: 'Restricted Tender for IT Equipment', status: 'Closed', submissionDeadline: '2024-10-30' },
        { id: 3, title: 'Tender for Bridge Rehabilitation', status: 'Open', submissionDeadline: '2024-11-22' },
        // Additional tenders can be added here
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-semibold mb-6">Tenders Overview</h2>
            <p className="mb-4">Below is the list of current tenders along with their statuses and submission deadlines.</p>

            {/* Tenders Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4 border-b text-left">Tender ID</th>
                            <th className="py-2 px-4 border-b text-left">Title</th>
                            <th className="py-2 px-4 border-b text-left">Status</th>
                            <th className="py-2 px-4 border-b text-left">Submission Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tendersList.length > 0 ? (
                            tendersList.map((tender) => (
                                <tr key={tender.id} className="hover:bg-gray-100 transition duration-200">
                                    <td className="py-2 px-4 border-b">{tender.id}</td>
                                    <td className="py-2 px-4 border-b">{tender.title}</td>
                                    <td className={`py-2 px-4 border-b font-bold ${tender.status === 'Open' ? 'text-green-600' : 'text-red-600'}`}>
                                        {tender.status}
                                    </td>
                                    <td className="py-2 px-4 border-b">{tender.submissionDeadline}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="py-2 px-4 text-center border-b">No tenders available.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tenders;
