import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DocumentRepo = () => {
  const [documents, setDocuments] = useState([]);
  const [filteredDocuments, setFilteredDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get(
          "https://step-beta-backend.onrender.com/documents"
        );

        const { documents } = response.data; // Extract documents from response
        const mappedDocuments = documents.map((doc) => ({
          id: doc.id,
          title: doc.title,
          description: `Type: ${doc.documentType}, Status: ${doc.status}`,
          url: `#` // You can add actual URLs if available in the document object
        }));

        setDocuments(mappedDocuments);
        setFilteredDocuments(mappedDocuments);

        // Success Notification
        toast.success("Documents loaded successfully!", {
          position: "top-right",
        });
      } catch (error) {
        console.error("Error fetching documents:", error);

        // Error Notification
        toast.error("Failed to load documents. Please try again.", {
          position: "top-right",
        });
      }
    };

    fetchDocuments();
  }, []);

  // Handle search term change
  const handleSearchChange = (term) => {
    setSearchTerm(term);
    const filtered = documents.filter(
      (doc) =>
        doc.title.toLowerCase().includes(term.toLowerCase()) ||
        doc.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredDocuments(filtered);
  };

  const handleSearchClick = () => {
    handleSearchChange(searchTerm);
    toast.info("Search updated!", { position: "bottom-right" });
  };

  return (
    <div className="container mx-auto p-10 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100 min-h-screen">
      {/* Toastify Container */}
      <ToastContainer />

      <h1 className="text-3xl font-semibold mb-8 text-center text-blue-700">Document Repository</h1>

      {/* Search Bar */}
      <div className="mb-8 flex justify-center items-center space-x-4">
        <input
          type="text"
          placeholder="Search documents..."
          name="search"
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-3/4 md:w-1/2 lg:w-1/3 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Search Button */}
        <button
          onClick={handleSearchClick}
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <i className="fa fa-search"></i> Search
        </button>
      </div>

      {/* Document List */}
      <div className="max-w-3xl mx-auto">
        {filteredDocuments.length === 0 ? (
          <p className="text-center text-gray-500">No documents found.</p>
        ) : (
          <ul className="space-y-6">
            {filteredDocuments.map((doc) => (
              <li key={doc.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                <h3 className="text-xl font-medium text-blue-600">{doc.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Document
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DocumentRepo;
