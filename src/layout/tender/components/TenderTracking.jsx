import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import {
  Paper,
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PendingIcon from '@mui/icons-material/Pending';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const TenderTracking = () => {
  // Mock data - replace with actual API call
  const tenderStatus = {
    id: "TEN-2024-001",
    projectTitle: "Road Construction Project",
    currentStatus: "Under Review",
    timeline: [
      {
        status: "Submitted",
        date: "2024-03-15",
        completed: true,
        description: "Tender submitted successfully"
      },
      {
        status: "Initial Review",
        date: "2024-03-17",
        completed: true,
        description: "Documentation verification completed"
      },
      {
        status: "Technical Evaluation",
        date: "2024-03-20",
        completed: false,
        description: "Technical proposal under evaluation"
      },
      {
        status: "Financial Evaluation",
        date: null,
        completed: false,
        description: "Pending technical evaluation completion"
      },
      {
        status: "Final Decision",
        date: null,
        completed: false,
        description: "Awaiting final approval"
      }
    ]
  };

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Search tender by ID"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Tender Reference: {tenderStatus.id}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Project: {tenderStatus.projectTitle}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Current Status: {tenderStatus.currentStatus}
        </Typography>
      </Paper>

      <Timeline position="alternate">
        {tenderStatus.timeline.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {item.date || 'Pending'}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={item.completed ? "success" : "grey"}>
                {item.completed ? <CheckCircleOutlineIcon /> : 
                 item.date ? <PendingIcon /> : <ErrorOutlineIcon />}
              </TimelineDot>
              {index < tenderStatus.timeline.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={2} sx={{ p: 2 }}>
                <Typography variant="h6" component="h1">
                  {item.status}
                </Typography>
                <Typography>{item.description}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default TenderTracking; 