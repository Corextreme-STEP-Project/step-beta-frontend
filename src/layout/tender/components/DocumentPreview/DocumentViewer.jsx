import React, { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  IconButton, 
  Typography,
  Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const DocumentViewer = ({ open, onClose, file }) => {
  const [error, setError] = useState(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const renderFilePreview = () => {
    const fileType = file.type;

    if (fileType.startsWith('image/')) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src={URL.createObjectURL(file)} 
            alt="Preview" 
            style={{ maxWidth: '100%', maxHeight: '80vh' }} 
          />
        </Box>
      );
    }

    if (fileType === 'application/pdf') {
      return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div style={{ height: '80vh' }}>
            <Viewer
              fileUrl={URL.createObjectURL(file)}
              plugins={[defaultLayoutPluginInstance]}
              onError={(error) => setError(error)}
            />
          </div>
        </Worker>
      );
    }

    if (fileType === 'text/plain') {
      return (
        <Box sx={{ p: 2, maxHeight: '80vh', overflow: 'auto' }}>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {/* Text content will be loaded here */}
          </pre>
        </Box>
      );
    }

    return (
      <Typography color="error">
        Unsupported file type: {fileType}
      </Typography>
    );
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            {file?.name}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        {error ? (
          <Typography color="error">
            Error loading document: {error.message}
          </Typography>
        ) : (
          renderFilePreview()
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DocumentViewer; 