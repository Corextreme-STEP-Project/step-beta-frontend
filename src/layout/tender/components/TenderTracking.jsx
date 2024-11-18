
import React, { useState } from 'react';

// Importing Material UI components for layout and styling
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper
} from '@mui/material';

// Importing Material UI Lab components for timeline structure

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,

  TimelineOppositeContent
} from '@mui/lab';

// Importing Material UI icons for search and status indicators
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PendingIcon from '@mui/icons-material/Pending';

// TenderTracking component definition
const TenderTracking = () => {
  // State variable to store user-entered tracking ID
  const [trackingId, setTrackingId] = useState('');

  // Mock data representing the current status of a tender
  // Replace this with API data as needed
  const tenderStatus = {
    id: "TEN-2024-001", // Unique identifier for the tender
    projectTitle: "Road Construction Project", // Title of the project
    currentStatus: "Under Review", // Current status of the tender
    timeline: [ // Timeline array representing each stage in the process
      {
        status: "Submitted", // Stage name
        date: "2024-03-15", // Date of completion
        completed: true, // Whether this stage is completed
        description: "Tender submitted successfully" // Additional details

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

        date: null, // Date is null for stages not yet completed
        completed: false,
        description: "Pending technical evaluation completion"
      },
      {
        status: "Final Review",
        date: null,
        completed: false,
        description: "Pending final review completion"
      },  {}
      
      
    ]
  };

  // Rendering the Tender Tracking component
  return (
    // Main container for the component
    <Box>
      {/* Input section for tracking ID */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Track Tender Status
        </Typography>

        {/* Input and button for tracking */}
        <Box sx={{ display: 'flex', gap: 2, maxWidth: 500 }}>
          <TextField
            fullWidth
            placeholder="Enter Tender ID" // Placeholder text for the input
            value={trackingId} // Binds input value to trackingId state
            onChange={(e) => setTrackingId(e.target.value)} // Updates trackingId on input change
            size="small" // Sets the size of the input field
          />
          <Button
            variant="contained"
            startIcon={<SearchIcon />} // Icon for the search button
            onClick={() => console.log('Track:', trackingId)} // Logs tracking ID on button click
          >
            Track
          </Button>
        </Box>
      </Box>

      {/* Displays the tender status information if tenderStatus data is available */}
      {tenderStatus && (
        <Paper sx={{ p: 3 }}>
          {/* Displays project title */}
          <Typography variant="h6" gutterBottom>
            {tenderStatus.projectTitle}
          </Typography>
          {/* Displays tender ID */}
          <Typography color="textSecondary" gutterBottom>
            Tender ID: {tenderStatus.id}
          </Typography>
          {/* Displays current status of the tender */}
          <Typography variant="subtitle1" gutterBottom>
            Current Status: {tenderStatus.currentStatus}
          </Typography>

          {/* Timeline component to visualize the tender's progress */}
          <Timeline position="alternate">
            {tenderStatus.timeline.map((item, index) => (
              // Each item represents a stage in the tender process
              <TimelineItem key={index}>
                <TimelineOppositeContent color="textSecondary">
                  {/* // Shows the date or 'Pending' if not completed */}
                  {item.date || 'Pending'}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  {/* TimelineDot shows a different icon based on completion */}
                  <TimelineDot color={item.completed ? "success" : "grey"}>
                    {item.completed ? <CheckCircleOutlineIcon /> : <PendingIcon />}
                  </TimelineDot>
                  {/* TimelineConnector displays a line between timeline items, except for the last item */}
                  {index < tenderStatus.timeline.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  {/* Each timeline stage is wrapped in a Paper component for styling */}
                  <Paper elevation={2} sx={{ p: 2 }}>
                    <Typography variant="h6" component="h1">
                      {/* Displays the stage name */}
                      {item.status}
                    </Typography>
                    <Typography>{item.description}
                      {/* // Displays additional stage details */}

                    </Typography>
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

