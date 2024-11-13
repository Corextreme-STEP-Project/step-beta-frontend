import React from 'react';

const Documents = () => {
    // Example data for documents and circulars
    const documents = [
        { id: 1, title: 'Regulatory Update - November 2024', type: 'Circular', uploadedBy: 'John Doe', uploadDate: '2024-11-01' },
        { id: 2, title: 'Tender Guidelines 2024', type: 'Document', uploadedBy: 'Jane Smith', uploadDate: '2024-10-29' },
        { id: 3, title: 'Compliance Checklist', type: 'Document', uploadedBy: 'Alice Johnson', uploadDate: '2024-10-31' },
        
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-semibold mb-4">Documents and Circulars</h2>
            <p className="mb-4">Documents and circulars will be accessible here.</p>

            {/* Documents Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="py-2 px-4 border-b text-left">ID</th>
                            <th className="py-2 px-4 border-b text-left">Document Title</th>
                            <th className="py-2 px-4 border-b text-left">Type</th>
                            <th className="py-2 px-4 border-b text-left">Uploaded By</th>
                            <th className="py-2 px-4 border-b text-left">Upload Date</th>
                            <th className="py-2 px-4 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.length > 0 ? (
                            documents.map(doc => (
                                <tr key={doc.id} className="hover:bg-gray-100 transition duration-200">
                                    <td className="py-2 px-4 border-b text-center">{doc.id}</td>
                                    <td className="py-2 px-4 border-b text-center">{doc.title}</td>
                                    <td className="py-2 px-4 border-b text-center">{doc.type}</td>
                                    <td className="py-2 px-4 border-b text-center">{doc.uploadedBy}</td>
                                    <td className="py-2 px-4 border-b text-center">{doc.uploadDate}</td>
                                    <td className="py-2 px-4 border-b text-center">
                                        <div className="flex justify-center space-x-2">
                                            <button className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 transition duration-300">
                                                View
                                            </button>
                                            <button className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 transition duration-300">
                                                Download
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="py-2 px-4 text-center border-b">No documents available.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Documents;
