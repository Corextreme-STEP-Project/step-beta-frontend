import React, { useState } from "react";
import { apiPostDocument } from "../../services/product";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UploadDocumentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    documentId: "",
    title: "",
    documentType: "",
    status: "",
    version: 1,
    author: "",
    department: "",
    securityLevel: "",
    file: null
  });

 const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData((prevData) => ({ ...prevData, file: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
    
  };


  const  handleSubmit = async (e) => { e.preventDefault();
    setLoading(true);

    const payload = new FormData();
    payload.append("documentId", formData.documentId);
    payload.append("title", formData.title);
    payload.append("documentType", formData.documentType);
    payload.append("status", formData.status);
    payload.append("version", formData.version);
    payload.append("author", formData.author);
    payload.append("department", formData.department);
    payload.append("securityLevel", formData.securityLevel);
    payload.append("file", formData.file);
    

    try {
        const response = await apiPostDocument(payload);
        if  (response.status === 201) {
          Swal.fire({
            icon: "Success",
            title: "Document uploaded Successful",
            text: "You have successfully uploaded your document",
            confirmButtonText: " OK"
          });
        }
        navigate("/docs")
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error.",
        text: "An unexpected error occurred. Please try again later.",
        confirmButtonText: " OK"
      }); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md space-y-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Upload Document</h2>

      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Document ID
        </label>
        <input
          type="text"
          name="documentId"
          value={formData.documentId}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Title *</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Document Type *
        </label>
        <select
          name="documentType"
          value={formData.documentType}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
          required
        >
          <option value="">Select Document Type</option>
          <option value="CIRCULAR">Circular</option>
          <option value="LEGAL_AGREEMENT">Legal Agreement</option>
          <option value="CONTRACT">Contract</option>
          <option value="POLICY">Policy Document</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
          required
        >
          <option value="">Select Status</option>
          <option value="DRAFT">Draft</option>
          <option value="REVIEW">Review</option>
          <option value="APPROVED">Approved</option>
          <option value="EXPIRED">Expired</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Version</label>
        <input
          type="number"
          name="version"
          value={formData.version}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
          min="1"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Department *
        </label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Security Level *
        </label>
        <select
          name="securityLevel"
          value={formData.securityLevel}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
          required
        >
          <option value="">Select Security Level</option>
          <option value="PUBLIC">Public</option>
          <option value="RESTRICTED">Restricted</option>
          <option value="INTERNAL">Internal</option>
          <option value="CONFIDENTIAL">Confidential</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Upload File *
        </label>
        <input
          type="file"
          name="file"
          accept=".pdf,.docx,.xlsx,.jpg,.png"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
        disabled={loading}
      >
      {loading ? "Uploading..." : "Upload Document"}
      </button>
    </form>
  );
};

export default UploadDocumentForm;

