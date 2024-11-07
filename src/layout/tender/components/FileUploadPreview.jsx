// Importing React library
import React from 'react';
// Importing necessary components from Material-UI library
import {
  Box, // Component for layout
  List, // Component for list display
  ListItem, // Component for individual list items
  ListItemIcon, // Component for icons in list items
  ListItemText, // Component for text in list items
  ListItemSecondaryAction, // Component for secondary actions in list items
  IconButton, // Component for clickable icon button
  Typography, // Component for text display
  Paper, // Component for paper-like container
  Tooltip // Component for displaying tooltip on hover
} from '@mui/material'; // Material-UI library

// Importing specific icons from Material-UI icons
import {
  PictureAsPdf, // Icon for PDF files
  Description, // Generic document icon
  Image, // Icon for image files
  Delete as DeleteIcon, // Icon for delete action
  Visibility as VisibilityIcon // Icon for preview action
} from '@mui/icons-material'; // Material-UI icons

// Function to get the appropriate file icon based on the file type
const getFileIcon = (fileType) => {
  // Checking if the file type includes 'pdf'
  if (fileType.includes('pdf')) {
    return <PictureAsPdf color="error" />; // Returning PDF icon in error color
  } else if (fileType.includes('image')) {
    return <Image color="primary" />; // Returning image icon in primary color
  } else {
    return <Description color="action" />; // Returning generic document icon in action color
  }
};

// Function to format the file size from bytes to a more readable format
const formatFileSize = (bytes) => {
  // If the size is 0, return '0 Bytes'
  if (bytes === 0) return '0 Bytes';
  const k = 1024; // Defining the factor for conversion
  const sizes = ['Bytes', 'KB', 'MB', 'GB']; // Array of size units
  const i = Math.floor(Math.log(bytes) / Math.log(k)); // Calculating index for size unit
  // Returning the formatted size with two decimal places
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Defining the FileUploadPreview functional component
const FileUploadPreview = ({ files, onRemove, onPreview }) => {
  // Returning a Paper component that serves as the container for the file upload preview
  return (
    <Paper sx={{ mt: 2, p: 2 }}> 
   {/* Displaying a subtitle for the section */}
      <Typography variant="subtitle1" gutterBottom>
        Uploaded Documents 
      </Typography>
      <List> 
         {/* Starting the list of uploaded documents */}
        {files.map((file, index) => ( // Mapping over the files array to create list items
          <ListItem
            key={index} // Unique key for each list item
            sx={{
              border: '1px solid #eee', // Styling for the border of list item
              borderRadius: 1, // Adding border radius
              mb: 1, // Margin bottom for spacing
              '&:last-child': { mb: 0 } // No margin for the last child
            }}
          >
            <ListItemIcon> 
              {/* Container for the list item icon */}
              {getFileIcon(file.type)} 
              {/* Displaying the appropriate icon based on file type */}
            </ListItemIcon>
            <ListItemText // Component for displaying the file name and size
              primary={file.name} // File name as primary text
              secondary={formatFileSize(file.size)} // Formatted file size as secondary text
            />
            <ListItemSecondaryAction> 
            {/* Tooltip for the preview button */}
              <Tooltip title="Preview"> 
                <IconButton
                  edge="end" // Aligning the button to the end
                  onClick={() => onPreview(file)} // Calling onPreview function with the file as argument
                  sx={{ mr: 1 }} // Margin right for spacing
                >
                   {/* Preview icon */}
                  <VisibilityIcon /> 
                </IconButton>
              </Tooltip>
              {/* Tooltip for the remove button */}
              <Tooltip title="Remove"> 
                <IconButton
                  edge="end" // Aligning the button to the end
                  onClick={() => onRemove(index)} // Calling onRemove function with the index as argument
                >
                  <DeleteIcon />  
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
        {/* // Ending the list of uploaded documents */}
      </List> 
    </Paper>  
  );
};

// Exporting the FileUploadPreview component for use in other files
export default FileUploadPreview;