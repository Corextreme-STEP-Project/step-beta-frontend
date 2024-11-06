import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Chip,
  Box
} from '@mui/material';

const TenderReview = () => {
  const [selectedTender, setSelectedTender] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Mock data - replace with actual API call
  const tenders = [
    {
      id: 1,
      projectTitle: "Road Construction Project",
      tenderType: "open",
      budget: "500000000",
      deadline: "2024-05-01",
      status: "pending",
      submissionDate: "2024-03-15"
    },
    // Add more mock data as needed
  ];

  const getStatusColor = (status) => {
    const colors = {
      pending: 'warning',
      approved: 'success',
      rejected: 'error',
      review: 'info'
    };
    return colors[status] || 'default';
  };

  const handleViewDetails = (tender) => {
    setSelectedTender(tender);
    setOpenDialog(true);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project Title</TableCell>
              <TableCell>Tender Type</TableCell>
              <TableCell>Budget (FCFA)</TableCell>
              <TableCell>Deadline</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tenders.map((tender) => (
              <TableRow key={tender.id}>
                <TableCell>{tender.projectTitle}</TableCell>
                <TableCell>{tender.tenderType}</TableCell>
                <TableCell>{Number(tender.budget).toLocaleString()}</TableCell>
                <TableCell>{new Date(tender.deadline).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Chip 
                    label={tender.status.toUpperCase()} 
                    color={getStatusColor(tender.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleViewDetails(tender)}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="md"
        fullWidth
      >
        {selectedTender && (
          <>
            <DialogTitle>
              Tender Details - {selectedTender.projectTitle}
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Tender Type:</strong> {selectedTender.tenderType}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Budget:</strong> {Number(selectedTender.budget).toLocaleString()} FCFA
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Submission Date:</strong> {new Date(selectedTender.submissionDate).toLocaleDateString()}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Deadline:</strong> {new Date(selectedTender.deadline).toLocaleDateString()}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Status:</strong> {selectedTender.status}
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenDialog(false)}>Close</Button>
              <Button 
                variant="contained" 
                color="primary"
                onClick={() => {
                  // Handle approval logic
                  console.log('Approve tender:', selectedTender.id);
                }}
              >
                Approve
              </Button>
              <Button 
                variant="contained" 
                color="error"
                onClick={() => {
                  // Handle rejection logic
                  console.log('Reject tender:', selectedTender.id);
                }}
              >
                Reject
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default TenderReview; 