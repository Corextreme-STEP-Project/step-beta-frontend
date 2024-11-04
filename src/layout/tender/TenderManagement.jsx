import React, { useState } from 'react';
import {
  Container,
  Paper,
  Tabs,
  Tab,
  Box,
  Typography
} from '@mui/material';
import TenderSubmissionForm from './components/TenderSubmissionForm';
import TenderReview from './components/TenderReview';
import TenderTracking from './components/TenderTracking';

const TenderManagement = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Tender Management
        </Typography>

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

export default TenderManagement;