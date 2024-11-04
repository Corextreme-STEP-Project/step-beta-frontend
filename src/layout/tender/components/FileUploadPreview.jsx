import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Paper,
  Tooltip
} from '@mui/material';
import {
  PictureAsPdf,
  Description,
  Image,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon
} from '@mui/icons-material';

const getFileIcon = (fileType) => {
  if (fileType.includes('pdf')) {
    return <PictureAsPdf color="error" />;
  } else if (fileType.includes('image')) {
    return <Image color="primary" />;
  } else {
    return <Description color="action" />;
  }
};

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const FileUploadPreview = ({ files, onRemove, onPreview }) => {
  return (
    <Paper sx={{ mt: 2, p: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        Uploaded Documents
      </Typography>
      <List>
        {files.map((file, index) => (
          <ListItem
            key={index}
            sx={{
              border: '1px solid #eee',
              borderRadius: 1,
              mb: 1,
              '&:last-child': { mb: 0 }
            }}
          >
            <ListItemIcon>
              {getFileIcon(file.type)}
            </ListItemIcon>
            <ListItemText
              primary={file.name}
              secondary={formatFileSize(file.size)}
            />
            <ListItemSecondaryAction>
              <Tooltip title="Preview">
                <IconButton
                  edge="end"
                  onClick={() => onPreview(file)}
                  sx={{ mr: 1 }}
                >
                  <VisibilityIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Remove">
                <IconButton
                  edge="end"
                  onClick={() => onRemove(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default FileUploadPreview; 