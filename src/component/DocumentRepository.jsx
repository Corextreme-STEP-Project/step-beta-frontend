import React, { useState, useEffect } from 'react';

const DocumentRepository = () => {
    // State for managing documents and search input
    const [documents, setDocuments] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Sample documents (replace this with fetched data)
    useEffect(() => {
        setDocuments([
            { id: 1, name: 'Project Plan', type: 'PDF', date: '2024-11-08' },
            { id: 2, name: 'Contract Document', type: 'DOCX', date: '2024-10-29' },
            { id: 3, name: 'Meeting Notes', type: 'TXT', date: '2024-09-15' },
            { id: 4, name: 'List of Contractors', type: 'XLSX', date: '2024-8-22' },
        ]);
    }, []);

    // Filtered documents based on the search query
    const filteredDocuments = documents.filter(doc =>
        doc.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold text-gray-800">Document Repository</h2>
            <p className="mt-2 text-gray-600">Search and access your documents easily.</p>
            <input
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mt-4 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <ul className="mt-4 space-y-2">
                {filteredDocuments.length > 0 ? (
                    filteredDocuments.map((doc) => (
                        <li
                            key={doc.id}
                            className="p-3 bg-gray-100 text-gray-700 rounded-md shadow flex justify-between items-center"
                        >
                            <div>
                                <h3 className="font-medium">{doc.name}</h3>
                                <p className="text-sm text-gray-500">
                                    {doc.type} - {doc.date}
                                </p>
                            </div>
                            <div className="flex space-x-2">
                                <button className="text-emerald-600 hover:underline">View</button>
                                <button className="text-red-600 hover:underline">Delete</button>
                            </div>
                        </li>
                    ))
                ) : (
                    <p className="text-gray-500">No documents found.</p>
                )}
            </ul>
        </div>
    );
};

export default DocumentRepository;
