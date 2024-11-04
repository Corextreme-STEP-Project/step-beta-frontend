import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PendingIcon from '@mui/icons-material/Pending';

const TenderTracking = () => {
  const [trackingId, setTrackingId] = useState('');
  
  // Mock data - replace with actual API data later
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
      }
    ]
  };

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Track Tender Status
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, maxWidth: 500 }}>
          <TextField
            fullWidth
            placeholder="Enter Tender ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            size="small"
          />
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            onClick={() => console.log('Track:', trackingId)}
          >
            Track
          </Button>
        </Box>
      </Box>

      {tenderStatus && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            {tenderStatus.projectTitle}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Tender ID: {tenderStatus.id}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Current Status: {tenderStatus.currentStatus}
          </Typography>

          <Timeline position="alternate">
            {tenderStatus.timeline.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent color="textSecondary">
                  {item.date || 'Pending'}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color={item.completed ? "success" : "grey"}>
                    {item.completed ? <CheckCircleOutlineIcon /> : <PendingIcon />}
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
        </Paper>
      )}
    </Box>
  );
};

export default TenderTracking; 