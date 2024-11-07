 // Importing React and useState hook from React library
import React, { useState } from 'react';
// Importing necessary components from Material-UI library
import {
  Dialog, // Component for modal dialog
  DialogTitle, // Component for dialog title
  DialogContent, // Component for dialog content
  IconButton, // Component for clickable icon button
  Typography, // Component for text display
  Box // Component for layout
} from '@mui/material'; // Material-UI library

// Importing the Close icon from Material-UI icons
import CloseIcon from '@mui/icons-material/Close';

// Defining the DocumentPreviewDialog functional component
const DocumentPreviewDialog = ({ open, onClose, file }) => {
  // Setting up state to manage error messages
  const [error, setError] = useState(null);

  // Function to render the file preview based on its type
  const renderPreview = () => {
    // If no file is provided, return null (no preview)
    if (!file) return null;

    // Checking if the file type is an image
    if (file.type.startsWith('image/')) {
      // Returning an image preview wrapped in a Box component
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
          <img
            src={URL.createObjectURL(file)} // Creating object URL for the image file
            alt={file.name} // Setting alt text to the file name
            style={{ maxWidth: '100%', maxHeight: '70vh' }} // Styling to fit image within viewport
          />
        </Box>
      );
    }

    // Checking if the file type is a PDF
    if (file.type === 'application/pdf') {
      // Returning a PDF preview using an iframe
      return (
        <Box sx={{ height: '70vh' }}>
          <iframe
            src={URL.createObjectURL(file)} // Creating object URL for the PDF file
            width="100%" // Setting iframe width to fill the container
            height="100%" // Setting iframe height to fill the container
            title="PDF Preview" // Setting title for accessibility
          />
        </Box>
      );
    }

    // If the file type is not supported, return an error message
    return (
      <Box sx={{ p: 2 }}>
        {/* // Displaying error message */}
        <Typography color="error"> 
          Preview not available for this file type: {file.type} 
          {/* // Showing unsupported file type */}
        </Typography>
      </Box>
    );
  };

  // Returning the Dialog component with its content
  return (
    <Dialog
      open={open} // Controlling dialog visibility with open prop
      onClose={onClose} // Setting the function to call when dialog is closed
      maxWidth="lg" // Setting maximum width of the dialog
      fullWidth // Making the dialog full width
    >
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
        {/* // Displaying the file name as header */}
          <Typography variant="h6"> 
          {/* // Safely accessing file name */}
            {file?.name} 
          </Typography>
          {/* // Button to close the dialog */}
          <IconButton onClick={onClose} size="small"> 
          {/* // Close icon */}
            <CloseIcon /> 
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        {error ? ( // Checking if there's an error
          <Typography color="error">{error}</Typography> // Displaying error message
        ) : (
          renderPreview() // Rendering the file preview
        )}
      </DialogContent>
    </Dialog>
  );
};

// Exporting the DocumentPreviewDialog component for use in other files
export default DocumentPreviewDialog;