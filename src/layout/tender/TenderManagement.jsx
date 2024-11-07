// Importing React library and useState hook for state management
import React, { useState } from 'react';

// Importing Material UI components for layout and styling
import {
  Container, // Main container for centering content
  Paper, // Paper component for background styling
  Tabs, // Tabs component for creating a tabbed interface
  Tab, // Individual tab components
  Box, // Box component for layout and spacing
  Typography // Typography component for styled text
} from '@mui/material';

// Importing custom components for different sections of tender management
import TenderSubmissionForm from './components/TenderSubmissionForm'; // Form for submitting tenders
import TenderReview from './components/TenderReview'; // Component for reviewing submitted tenders
import TenderTracking from './components/TenderTracking'; // Component for tracking the status of a tender

// TenderManagement component definition
const TenderManagement = () => {
  // State variable to track the currently selected tab
  const [currentTab, setCurrentTab] = useState(0);

  // Handler function to update the current tab on user selection
  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue); // Sets currentTab to the selected tab index
  };

  // Rendering the Tender Management component
  return (
    // Main container to center content with maximum width 'lg' (large)
    <Container maxWidth="lg">
      {/* Paper component with elevation for visual depth and padding */}
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        {/* Title of the Tender Management page */}
        <Typography variant="h6" gutterBottom>
          Tender Management
        </Typography>

        {/* Box to contain tabs with bottom border styling */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          {/* Tabs component to display selectable tabs */}
          <Tabs value={currentTab} onChange={handleTabChange}>
            <Tab label="Submit Tender" /> {/* Tab for tender submission */}
            <Tab label="Review Tenders" /> {/* Tab for reviewing tenders */}
            <Tab label="Track Status" /> {/* Tab for tracking tender status */}
          </Tabs>
        </Box>

        {/* Conditional rendering based on selected tab */}
        {currentTab === 0 && <TenderSubmissionForm />} {/* Render submission form on first tab */}
        {currentTab === 1 && <TenderReview />} {/* Render review section on second tab */}
        {currentTab === 2 && <TenderTracking />} {/* Render tracking section on third tab */}
      </Paper>
    </Container>
  );
};

// Exporting TenderManagement component to be used in other parts of the application
export default TenderManagement;
