import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Paper,
  Typography,
  Box,
  CircularProgress,
  Tooltip
} from '@mui/material';
import * as Icons from '@mui/icons-material';
import DocumentViewer from './DocumentPreview/DocumentViewer';
import { getFileIcon, formatFileSize } from '../../../utils/fileUtils';

const FilePreview = ({ files, onRemove, loading }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  const handlePreview = (file) => {
    setSelectedFile(file);
    setPreviewOpen(true);
  };

  const IconComponent = (iconName) => {
    return Icons[iconName] || Icons.InsertDriveFile;
  };

  return (
    <>
      <Paper sx={{ mt: 2, p: 2 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Typography variant="subtitle1">
            Uploaded Documents
          </Typography>
          {loading && (
            <CircularProgress size={20} sx={{ ml: 2 }} />
          )}
        </Box>
        
        <List>
          {files.map((file, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <Box>
                  <Tooltip title="Preview">
                    <IconButton 
                      edge="end" 
                      onClick={() => handlePreview(file)}
                      disabled={loading}
                      sx={{ mr: 1 }}
                    >
                      <Icons.Visibility />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton 
                      edge="end" 
                      onClick={() => onRemove(index)}
                      disabled={loading}
                    >
                      <Icons.Delete />
                    </IconButton>
                  </Tooltip>
                </Box>
              }
            >
              <ListItemIcon>
                {React.createElement(IconComponent(getFileIcon(file.type)))}
              </ListItemIcon>
              <ListItemText
                primary={file.name}
                secondary={
                  <Box component="span" display="flex" alignItems="center">
                    {formatFileSize(file.size)}
                    {file.error && (
                      <Typography 
                        component="span" 
                        color="error" 
                        sx={{ ml: 2 }}
                      >
                        {file.error}
                      </Typography>
                    )}
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      {selectedFile && (
        <DocumentViewer
          open={previewOpen}
          onClose={() => {
            setPreviewOpen(false);
            setSelectedFile(null);
          }}
          file={selectedFile}
        />
      )}
    </>
  );
};

export default FilePreview; 