import React, { useState } from 'react';
import { Tabs, Tab, Box, Container, Paper } from '@mui/material';
import TenderSubmissionForm from './components/TenderSubmissionForm';
import TenderReview from './components/TenderReview';
// import TenderTracking from './components/TenderTracking';
import TenderTracking from './components/TenderTracking';

const TenderSubmission = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <h1>Tender Management</h1>
        
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={currentTab} onChange={handleTabChange}>
            <Tab label="Submit Tender" />
            <Tab label="Review Tenders" />
            <Tab label="Track Status" />
          </Tabs>
        </Box>

        {currentTab === 0 && <TenderSubmissionForm />}
        {currentTab === 1 && <TenderReview />}
        {currentTab === 2 && <TenderTracking />}
      </Paper>
    </Container>
  );
};

export default TenderSubmission;