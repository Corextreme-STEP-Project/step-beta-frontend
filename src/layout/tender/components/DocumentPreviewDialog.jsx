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

const DocumentPreviewDialog = ({ open, onClose, file }) => {
  const [error, setError] = useState(null);

  const renderPreview = () => {
    if (!file) return null;

    if (file.type.startsWith('image/')) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
          <img
            src={URL.createObjectURL(file)}
            alt={file.name}
            style={{ maxWidth: '100%', maxHeight: '70vh' }}
          />
        </Box>
      );
    }

    if (file.type === 'application/pdf') {
      return (
        <Box sx={{ height: '70vh' }}>
          <iframe
            src={URL.createObjectURL(file)}
            width="100%"
            height="100%"
            title="PDF Preview"
          />
        </Box>
      );
    }

    return (
      <Box sx={{ p: 2 }}>
        <Typography color="error">
          Preview not available for this file type: {file.type}
        </Typography>
      </Box>
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
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">
            {file?.name}
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        {error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          renderPreview()
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DocumentPreviewDialog; 