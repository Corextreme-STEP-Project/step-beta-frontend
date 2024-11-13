import React, { useState, useRef } from 'react';

// Utility functions
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Mock user roles
const ROLES = {
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER'
};

// Document Management System Main Component
const DocumentManagementSystem = () => {
  const [documents, setDocuments] = useState([]);
  const [currentUser] = useState('John Doe');
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleFileUpload = (newDoc) => {
    setDocuments(prev => [...prev, newDoc]);
  };

  const handleDelete = (docId) => {
    setDocuments(prev => prev.filter(doc => doc.id !== docId));
  };

  const handleShare = (docId) => {
    console.log('Sharing document:', docId);
  };

  const handleUpdatePermissions = (docId, newPermissions) => {
    setDocuments(prev => 
      prev.map(doc => 
        doc.id === docId 
          ? { ...doc, permissions: newPermissions }
          : doc
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Document Management System</h1>
      
      <div className="grid gap-6">
        <DocumentUpload 
          onFileUpload={handleFileUpload}
          currentUser={currentUser}
        />
        
        <DocumentDashboard
          documents={documents}
          onDelete={handleDelete}
          onShare={handleShare}
          currentUser={currentUser}
          onSelectDocument={setSelectedDocument}
        />

        {selectedDocument && (
          <DocumentSecurity
            document={selectedDocument}
            onUpdatePermissions={handleUpdatePermissions}
          />
        )}
      </div>
    </div>
  );
};

// Document Upload Component
const DocumentUpload = ({ onFileUpload, currentUser }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    processFiles(files);
  };

  const processFiles = (files) => {
    files.forEach(file => {
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/msword'];
      if (!allowedTypes.includes(file.type)) {
        alert(`File type ${file.type} not supported`);
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        alert('File size cannot exceed 10MB');
        return;
      }

      uploadFile(file);
    });
  };

  const uploadFile = (file) => {
    const fileId = generateUniqueId();
    setUploadProgress(prev => ({ ...prev, [fileId]: 0 }));

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(prev => ({ ...prev, [fileId]: progress }));
      
      if (progress >= 100) {
        clearInterval(interval);
        onFileUpload({
          id: fileId,
          name: file.name,
          size: file.size,
          type: file.type,
          uploadedBy: currentUser,
          uploadedAt: new Date().toISOString(),
          status: 'completed'
        });
      }
    }, 300);
  };

  return (
    <div className="p-4">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInput}
          multiple
          className="hidden"
        />
        <div className="space-y-4">
          <p className="text-gray-600">
            Drag and drop files here, or
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-blue-500 hover:text-blue-700 mx-1"
            >
              browse
            </button>
            to upload
          </p>
          <p className="text-sm text-gray-500">
            Supported formats: PDF, JPEG, PNG, DOC (Max size: 10MB)
          </p>
        </div>
      </div>

      {Object.entries(uploadProgress).map(([fileId, progress]) => (
        <div key={fileId} className="mt-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm">Uploading...</span>
            <span className="text-sm">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
             style={{ width: progress + '%' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

// Document Dashboard Component
const DocumentDashboard = ({ documents, onDelete, onShare, onSelectDocument }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('uploadedAt');
  const [sortOrder, setSortOrder] = useState('desc');

  const filteredDocs = documents
    .filter(doc => 
      doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const order = sortOrder === 'asc' ? 1 : -1;
      return a[sortBy] > b[sortBy] ? order : -order;
    });

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Search documents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-lg flex-grow"
        />
        <select
          value={sortBy}
          onChange={(e) => handleSort(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="uploadedAt">Upload Date</option>
          <option value="name">Name</option>
          <option value="size">Size</option>
        </select>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
          <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Size</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Uploaded By</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredDocs.map((doc) => (
              <tr key={doc.id} onClick={() => onSelectDocument(doc)} className="cursor-pointer hover:bg-gray-50">
                <td className="px-6 py-4">{doc.name}</td>
                <td className="px-6 py-4">{formatFileSize(doc.size)}</td>
                <td className="px-6 py-4">{doc.uploadedBy}</td>
                <td className="px-6 py-4">{new Date(doc.uploadedAt).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(doc.id);
                    }}
                    className="text-red-600 hover:text-red-900 mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onShare(doc.id);
                    }}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Share
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Document Security Component
const DocumentSecurity = ({ document, onUpdatePermissions }) => {
  const [permissions, setPermissions] = useState(document.permissions || {});
  const [accessLog, setAccessLog] = useState([]);

  const updateRolePermissions = (role, action, allowed) => {
    setPermissions(prev => ({
      ...prev,
      [role]: {
        ...prev[role],
        [action]: allowed
      }
    }));
  };

  const handleSavePermissions = () => {
    onUpdatePermissions(document.id, permissions);
    setAccessLog(prev => [
      {
        action: 'permissions_updated',
        timestamp: new Date().toISOString(),
        details: 'Document permissions updated'
      },
      ...prev
    ]);
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold">Document Security Settings</h2>
      
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Role Permissions</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Role</th>
              <th className="text-center">View</th>
              <th className="text-center">Edit</th>
              <th className="text-center">Delete</th>
              <th className="text-center">Share</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(ROLES).map(role => (
              <tr key={role}>
                <td className="py-2">{role}</td>
                {['view', 'edit', 'delete', 'share'].map(action => (
                  <td key={action} className="text-center">
                    <input
                      type="checkbox"
                      checked={permissions[role]?.[action] || false}
                      onChange={(e) => updateRolePermissions(role, action, e.target.checked)}
                      className="form-checkbox h-4 w-4"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        
        <button
          onClick={handleSavePermissions}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save Permissions
        </button>
      </div>

      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Access Log</h3>
        <div className="space-y-2">
          {accessLog.map((log, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span>{log.details}</span>
              <span className="text-gray-500">{new Date(log.timestamp).toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentManagementSystem;