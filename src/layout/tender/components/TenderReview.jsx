
// Importing React and the useState hook from the React library for state management
import React, { useState } from 'react';

// Importing components from Material-UI for building the UI
import {
  Box, // A wrapper component for layout
  Table, // Component for displaying data in a table format
  TableBody, // Represents the body section of the table
  TableCell, // Represents a cell in the table
  TableContainer, // A container for the table, usually wrapped in Paper
  TableHead, // Represents the header section of the table
  TableRow, // Represents a row in the table
  Paper, // A component that gives a material design look
  Chip, // A small component for displaying tags or status
  IconButton, // A button that displays an icon
  TextField, // A component for text input
  InputAdornment, // Component for adding adornments to inputs
  Button, // A component for buttons
  Dialog, // A modal dialog component
  DialogTitle, // The title section of the dialog
  DialogContent, // The content section of the dialog
  DialogActions, // The action buttons in the dialog
  Typography, // A component for displaying text with various styles
  Grid, // A component for grid layout
  MenuItem, // An item in a dropdown menu
  Select, // A dropdown select component
  FormControl, // A wrapper component for form elements
  InputLabel // A label for input fields
} from '@mui/material'; // Importing from Material-UI library

// Importing specific icons from Material-UI icons
import {
  Search as SearchIcon, // Icon for search functionality
  Visibility as VisibilityIcon, // Icon for viewing details
  FilterList as FilterListIcon, // Icon for filtering
  CheckCircle as CheckCircleIcon, // Icon for approving
  Cancel as CancelIcon, // Icon for rejecting
  Download as DownloadIcon // Icon for downloading documents
} from '@mui/icons-material'; // Importing from Material-UI icons

// Defining the TenderReview functional component
const TenderReview = () => {
  // Setting up state variables using the useState hook
  const [selectedTender, setSelectedTender] = useState(null); // State to store the currently selected tender for details
  const [openDialog, setOpenDialog] = useState(false); // State to control the visibility of the details dialog
  const [filterStatus, setFilterStatus] = useState('all'); // State to filter tenders based on status
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search input value

  // Mock data representing tenders - replace with actual API data later
  const [tenders] = useState([
    {
      id: "TEN-2024-001", // Unique identifier for the tender
      projectTitle: "Road Construction Project", // Title of the project
      contractor: "Construction Corp Ltd", // Name of the contractor
      submissionDate: "2024-03-15", // Date when the tender was submitted
      deadline: "2024-04-15", // Deadline for the tender submission
      budget: 500000000, // Budget allocated for the project
      status: "pending", // Current status of the tender
      type: "Open Tender", // Type of the tender
      description: "Construction of 5km road with drainage system", // Description of the project
      documents: [ // List of documents associated with the tender
        { name: "Technical Proposal.pdf", size: "2.5 MB" }, // Document 1
        { name: "Financial Proposal.pdf", size: "1.8 MB" }, // Document 2
        { name: "Company Profile.pdf", size: "3.2 MB" } // Document 3
      ],
      technicalScore: null, // Technical score if applicable
      financialScore: null // Financial score if applicable
    },
    // Additional tender objects can be added similarly...
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

  // Function to get the status chip for a given tender status
  const getStatusChip = (status) => {
    // Configuration object mapping status to labels and colors
    const statusConfig = {
      pending: { label: 'Pending Review', color: 'warning' }, // Configuration for pending status
      under_review: { label: 'Under Review', color: 'info' }, // Configuration for under review status
      approved: { label: 'Approved', color: 'success' }, // Configuration for approved status
      rejected: { label: 'Rejected', color: 'error' } // Configuration for rejected status
    };

    // Get the configuration for the given status or default to a generic configuration
    const config = statusConfig[status] || { label: status, color: 'default' };
    // Return a Chip component displaying the status label and color
    return <Chip label={config.label} color={config.color} size="small" />;
  };

  // Function to handle the viewing of tender details
  const handleViewDetails = (tender) => {
    setSelectedTender(tender); // Set the selected tender in state
    setOpenDialog(true); // Open the dialog for viewing details
  };

  // Filtering the tenders based on search query and selected status
  const filteredTenders = tenders.filter(tender => {
    // Check if the tender's status matches the selected filter
    const matchesStatus = filterStatus === 'all' || tender.status === filterStatus;
    // Check if the tender matches the search query in title, contractor, or ID
    const matchesSearch = tender.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tender.contractor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tender.id.toLowerCase().includes(searchQuery.toLowerCase());
    // Return true if both conditions are met
    return matchesStatus && matchesSearch;
  });

  // Returning the main component structure
  return (
    // Main container for the component
    <Box> 
    {/* Container for search and filter controls */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'center' }}> 
        <TextField // Input field for searching tenders
          placeholder="Search tenders..." // Placeholder text for the input
          size="small" // Size of the input field
          sx={{ width: 300 }} // Styling for width
          value={searchQuery} // Controlled value for the input
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          InputProps={{
            startAdornment: ( // Adding a search icon as an adornment
              <InputAdornment position="start"> 
                <SearchIcon />  
              </InputAdornment>
            ),
          }}
        />

        {/* Form control for status filter */}
        <FormControl size="small" sx={{ minWidth: 150 }}>  
        {/* Label for the select menu */}
          <InputLabel>Status Filter</InputLabel> 
          <Select // Dropdown select for filtering by status
            value={filterStatus} // Controlled value for the select
            label="Status Filter" // Label for accessibility
            onChange={(e) => setFilterStatus(e.target.value)} // Update filter status on change
          >
            {/* Option for showing all statuses */}
            <MenuItem value="all">All Status</MenuItem> 
            <MenuItem value="pending">Pending</MenuItem> 
            <MenuItem value="under_review">Under Review</MenuItem>  
            <MenuItem value="approved">Approved</MenuItem>  
            <MenuItem value="rejected">Rejected</MenuItem>  
          </Select>
        </FormControl>
      </Box>

      {/* Container for the table */}
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
            {filteredTenders.map((tender) => ( // Mapping over filtered tenders to create rows
              <TableRow key={tender.id}>  
                <TableCell>{tender.id}</TableCell>  
                <TableCell>{tender.projectTitle}</TableCell>  
                <TableCell>{tender.contractor}</TableCell>  
                <TableCell>
                  {/* Displaying the submission date in a formatted manner */}
                  {new Date(tender.submissionDate).toLocaleDateString()}  
                </TableCell>
                <TableCell>
                  {/* Displaying the budget in a formatted manner */}
                  {tender.budget.toLocaleString()}  
                </TableCell>
                <TableCell>
                  <Chip // Displaying tender type with a Chip
                    label={tender.type}
                    variant="outlined"

                    size="small"
                  />
                </TableCell>
                <TableCell>

                  {getStatusChip(tender.status)}  
                </TableCell>
                <TableCell>
                  <IconButton // Button for viewing tender details
                    size="small"
                    onClick={() => handleViewDetails(tender)} // Open details dialog on click
                    color="primary" // Primary color for the button
                  >
                    <VisibilityIcon />  
                  </IconButton>
                </TableCell>
              </TableRow> // End of tender row


            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog // Dialog for displaying tender details
        open={openDialog} // Control open state of the dialog
        onClose={() => setOpenDialog(false)} // Close dialog function
        maxWidth="md" // Maximum width of the dialog
        fullWidth // Make dialog full width
      >
        {selectedTender && ( // Check if a tender is selected
          <>
            {/* Title of the dialog */}
            <DialogTitle>  
              <Typography variant="h6">  
                Tender Details - {selectedTender.id}  
              </Typography>
            </DialogTitle>
            <DialogContent>  
              {/* Grid layout for tender details */}
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
                    {selectedTender.budget.toLocaleString()}  
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
                  {selectedTender.documents.map((doc, index) => ( // Mapping over submitted documents
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
                    // Check if technical score is available
                  <Grid item xs={12} sm={6}> // Grid item for technical score
                    <Typography variant="subtitle2">Technical Score</Typography>  
                    <Typography>{selectedTender.technicalScore}/100</Typography>  
                  </Grid>
                )}

                {selectedTender.financialScore !== null && ( // Check if financial score is available
                  <Grid item xs={12} sm={6}>  
                    <Typography variant="subtitle2">Financial Score</Typography>  
                    <Typography>{selectedTender.financialScore}/100</Typography>  
                  </Grid>
                )}
              </Grid>
            </DialogContent>
            <DialogActions>  
              <Button onClick={() => setOpenDialog(false)}>Close</Button>  
              {selectedTender.status === 'pending' && ( // Check if the tender status is pending
                <>
                  <Button // Button to approve the tender
                    startIcon={<CheckCircleIcon />} // Icon for approve button
                    variant="contained" // Button variant
                    color="success" // Success color for the button
                    onClick={() => console.log('Approve tender:', selectedTender.id)} // Approve action
                  >
                    Approve
                  </Button>
                  <Button // Button to reject the tender
                    startIcon={<CancelIcon />} // Icon for reject button
                    variant="contained" // Button variant
                    color="error" // Error color for the button
                    onClick={() => console.log('Reject tender:', selectedTender.id)} // Reject action
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

// Exporting the TenderReview component for use in other files
export default TenderReview;

