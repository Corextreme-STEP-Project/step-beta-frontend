import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import {
  Search as SearchIcon,
  Visibility as VisibilityIcon,
  FilterList as FilterListIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Download as DownloadIcon
} from '@mui/icons-material';

const TenderReview = () => {
  const [selectedTender, setSelectedTender] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with actual API data later
  const [tenders] = useState([
    {
      id: "TEN-2024-001",
      projectTitle: "Road Construction Project",
      contractor: "Construction Corp Ltd",
      submissionDate: "2024-03-15",
      deadline: "2024-04-15",
      budget: 500000000,
      status: "pending",
      type: "Open Tender",
      description: "Construction of 5km road with drainage system",
      documents: [
        { name: "Technical Proposal.pdf", size: "2.5 MB" },
        { name: "Financial Proposal.pdf", size: "1.8 MB" },
        { name: "Company Profile.pdf", size: "3.2 MB" }
      ],
      technicalScore: null,
      financialScore: null
    },
    {
      id: "TEN-2024-002",
      projectTitle: "School Renovation",
      contractor: "Education Builders Inc",
      submissionDate: "2024-03-14",
      deadline: "2024-04-10",
      budget: 250000000,
      status: "under_review",
      type: "Restricted",
      description: "Complete renovation of secondary school buildings",
      documents: [
        { name: "Renovation Plan.pdf", size: "4.1 MB" },
        { name: "Cost Breakdown.pdf", size: "1.5 MB" }
      ],
      technicalScore: 85,
      financialScore: null
    },
    {
      id: "TEN-2024-003",
      projectTitle: "Medical Equipment Supply",
      contractor: "HealthTech Solutions",
      submissionDate: "2024-03-13",
      deadline: "2024-04-01",
      budget: 750000000,
      status: "approved",
      type: "Direct Award",
      description: "Supply of advanced medical imaging equipment",
      documents: [
        { name: "Equipment Specifications.pdf", size: "5.2 MB" },
        { name: "Delivery Schedule.pdf", size: "1.1 MB" }
      ],
      technicalScore: 92,
      financialScore: 88
    }
  ]);

  const getStatusChip = (status) => {
    const statusConfig = {
      pending: { label: 'Pending Review', color: 'warning' },
      under_review: { label: 'Under Review', color: 'info' },
      approved: { label: 'Approved', color: 'success' },
      rejected: { label: 'Rejected', color: 'error' }
    };

    const config = statusConfig[status] || { label: status, color: 'default' };
    return <Chip label={config.label} color={config.color} size="small" />;
  };

  const handleViewDetails = (tender) => {
    setSelectedTender(tender);
    setOpenDialog(true);
  };

  const filteredTenders = tenders.filter(tender => {
    const matchesStatus = filterStatus === 'all' || tender.status === filterStatus;
    const matchesSearch = tender.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tender.contractor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tender.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'center' }}>
        <TextField
          placeholder="Search tenders..."
          size="small"
          sx={{ width: 300 }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Status Filter</InputLabel>
          <Select
            value={filterStatus}
            label="Status Filter"
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="under_review">Under Review</MenuItem>
            <MenuItem value="approved">Approved</MenuItem>
            <MenuItem value="rejected">Rejected</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tender ID</TableCell>
              <TableCell>Project Title</TableCell>
              <TableCell>Contractor</TableCell>
              <TableCell>Submission Date</TableCell>
              <TableCell>Budget (FCFA)</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTenders.map((tender) => (
              <TableRow key={tender.id}>
                <TableCell>{tender.id}</TableCell>
                <TableCell>{tender.projectTitle}</TableCell>
                <TableCell>{tender.contractor}</TableCell>
                <TableCell>
                  {new Date(tender.submissionDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {tender.budget.toLocaleString()}
                </TableCell>
                <TableCell>
                  <Chip 
                    label={tender.type}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  {getStatusChip(tender.status)}
                </TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={() => handleViewDetails(tender)}
                    color="primary"
                  >
                    <VisibilityIcon />
                  </IconButton>
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
              <Typography variant="h6">
                Tender Details - {selectedTender.id}
              </Typography>
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12}>
                  <Typography variant="h6">{selectedTender.projectTitle}</Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Submitted by {selectedTender.contractor}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2">Submission Date</Typography>
                  <Typography gutterBottom>
                    {new Date(selectedTender.submissionDate).toLocaleDateString()}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2">Deadline</Typography>
                  <Typography gutterBottom>
                    {new Date(selectedTender.deadline).toLocaleDateString()}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2">Budget</Typography>
                  <Typography gutterBottom>
                    {selectedTender.budget.toLocaleString()} FCFA
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2">Status</Typography>
                  <Typography gutterBottom>
                    {getStatusChip(selectedTender.status)}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle2">Description</Typography>
                  <Typography paragraph>
                    {selectedTender.description}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle2" gutterBottom>
                    Submitted Documents
                  </Typography>
                  {selectedTender.documents.map((doc, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <IconButton size="small" color="primary">
                        <DownloadIcon />
                      </IconButton>
                      <Typography variant="body2">
                        {doc.name} ({doc.size})
                      </Typography>
                    </Box>
                  ))}
                </Grid>

                {selectedTender.technicalScore !== null && (
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">Technical Score</Typography>
                    <Typography>{selectedTender.technicalScore}/100</Typography>
                  </Grid>
                )}

                {selectedTender.financialScore !== null && (
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">Financial Score</Typography>
                    <Typography>{selectedTender.financialScore}/100</Typography>
                  </Grid>
                )}
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenDialog(false)}>Close</Button>
              {selectedTender.status === 'pending' && (
                <>
                  <Button
                    startIcon={<CheckCircleIcon />}
                    variant="contained"
                    color="success"
                    onClick={() => console.log('Approve tender:', selectedTender.id)}
                  >
                    Approve
                  </Button>
                  <Button
                    startIcon={<CancelIcon />}
                    variant="contained"
                    color="error"
                    onClick={() => console.log('Reject tender:', selectedTender.id)}
                  >
                    Reject
                  </Button>
                </>
              )}
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default TenderReview; 