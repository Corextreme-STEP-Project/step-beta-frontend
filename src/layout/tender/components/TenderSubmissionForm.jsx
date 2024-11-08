
// Importing necessary libraries and components
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // Importing validation schema library
import {
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,

} from '@mui/material'; // Importing Material UI components
import { UploadFile as UploadFileIcon } from '@mui/icons-material'; // Importing icon for file upload button
import FileUploadPreview from './FileUploadPreview'; // Component for previewing uploaded files
import DocumentPreviewDialog from './DocumentPreviewDialog'; // Component for previewing documents in a dialog

// Defining validation schema using Yup

const validationSchema = Yup.object({
  projectTitle: Yup.string()
    .required('Project title is required')
    .min(5, 'Project title must be at least 5 characters'),
  tenderType: Yup.string()
    .required('Tender type is required'),
  budget: Yup.number()
    .required('Budget is required')
    .positive('Budget must be positive')
    .min(1000000, 'Budget must be at least 1,000,000 FCFA'),
  deadline: Yup.date()
    .required('Deadline is required')
    .min(new Date(), 'Deadline cannot be in the past'),
  description: Yup.string()
    .required('Description is required')
    .min(50, 'Description must be at least 50 characters'),
  technicalRequirements: Yup.string()
    .required('Technical requirements are required'),
  documents: Yup.array()
    .min(1, 'At least one document is required')
});


// Main component for the Tender Submission Form
const TenderSubmissionForm = () => {
  const [previewFile, setPreviewFile] = useState(null); // State to hold file for preview
  const [openPreview, setOpenPreview] = useState(false); // State to control document preview dialog

  // Initializing formik for form handling and validation

  const formik = useFormik({
    initialValues: {
      projectTitle: '',
      tenderType: '',
      budget: '',
      deadline: '',
      description: '',
      technicalRequirements: '',
      documents: [],
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {

        const formData = new FormData(); // Create FormData object for file upload

        values.documents.forEach((file, index) => {
          formData.append(`document-${index}`, file);
        });


        console.log('Form submitted:', values);
        
        resetForm(); // Reset form after successful submission
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setSubmitting(false); // Set submitting status to false
      }
    },
  });

  // Handler for file input change
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to array
    formik.setFieldValue('documents', [...formik.values.documents, ...files]); // Update documents field in formik
  };

  // Handler to remove selected file
  const handleRemoveFile = (index) => {
    const newFiles = [...formik.values.documents];
    newFiles.splice(index, 1); // Remove file at specified index
    formik.setFieldValue('documents', newFiles);
  };

  // Handler to open file in preview dialog
  const handlePreviewFile = (file) => {
    setPreviewFile(file); // Set file to preview
    setOpenPreview(true); // Open preview dialog
  };

  // Render form component
  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        {/* Project Title Field */}
        <Grid item xs={12}>

          <TextField
            fullWidth
            id="projectTitle"
            name="projectTitle"
            label="Project Title"
            value={formik.values.projectTitle}
            onChange={formik.handleChange}
            error={formik.touched.projectTitle && Boolean(formik.errors.projectTitle)}
            helperText={formik.touched.projectTitle && formik.errors.projectTitle}
          />
        </Grid>


        {/* Tender Type Dropdown */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>

            <InputLabel>Tender Type</InputLabel>
            <Select
              id="tenderType"
              name="tenderType"
              value={formik.values.tenderType}
              onChange={formik.handleChange}

              error={formik.touched.tenderType && Boolean(formik.errors.tenderType)}
            >
              <MenuItem value="open">Open Tender</MenuItem>
              <MenuItem value="restricted">Restricted Tender</MenuItem>
              <MenuItem value="direct">Direct Award</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Budget Field */}

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="budget"
            name="budget"
            label="Budget (FCFA)"
            type="number"
            value={formik.values.budget}
            onChange={formik.handleChange}
            error={formik.touched.budget && Boolean(formik.errors.budget)}
            helperText={formik.touched.budget && formik.errors.budget}
          />
        </Grid>


        {/* Deadline Field */}

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="deadline"
            name="deadline"
            label="Submission Deadline"
            type="date"

// InputLabelProps={{ shrink: true }}

            value={formik.values.deadline}
            onChange={formik.handleChange}
            error={formik.touched.deadline && Boolean(formik.errors.deadline)}
            helperText={formik.touched.deadline && formik.errors.deadline}

            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        {/* Project Description Field */}

        <Grid item xs={12}>
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Project Description"
            multiline
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>


        {/* Technical Requirements Field */}

        <Grid item xs={12}>
          <TextField
            fullWidth
            id="technicalRequirements"
            name="technicalRequirements"
            label="Technical Requirements"
            multiline
            rows={4}
            value={formik.values.technicalRequirements}
            onChange={formik.handleChange}
            error={formik.touched.technicalRequirements && Boolean(formik.errors.technicalRequirements)}
            helperText={formik.touched.technicalRequirements && formik.errors.technicalRequirements}
          />
        </Grid>


        {/* File Upload Button */}

        <Grid item xs={12}>
          <Button
            variant="contained"
            component="label"

            startIcon={<UploadFileIcon />}
          >
            Upload Documents

            <input
              type="file"
              multiple
              hidden
              onChange={handleFileChange}

              accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
            />
          </Button>

          {/* File Upload Preview Component */}
          {formik.values.documents.length > 0 && (
            <FileUploadPreview
              files={formik.values.documents}
              onRemove={handleRemoveFile}
              onPreview={handlePreviewFile}
            />
          )}

          {/* Document error message */}
          {formik.touched.documents && formik.errors.documents && (
            <Typography color="error" variant="caption">

              {formik.errors.documents}
            </Typography>
          )}
        </Grid>


        {/* Submit Button */}

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"


            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? 'Submitting...' : 'Submit Tender'}
          </Button>
        </Grid>
      </Grid>


      {/* Document Preview Dialog */}
      <DocumentPreviewDialog
        open={openPreview}
        onClose={() => {
          setOpenPreview(false);
          setPreviewFile(null);
        }}
        file={previewFile}
      />

    </Box>
  );
};


export default TenderSubmissionForm;

