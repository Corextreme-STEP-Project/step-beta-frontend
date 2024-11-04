import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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
  Alert
} from '@mui/material';
import { UploadFile as UploadFileIcon } from '@mui/icons-material';
import FileUploadPreview from './FileUploadPreview';
import DocumentPreviewDialog from './DocumentPreviewDialog';
import { validateFile, MAX_FILE_SIZE, MAX_TOTAL_SIZE, FILE_TYPES } from '../../../utils/fileUtils';

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

const TenderSubmissionForm = () => {
  const [fileLoading, setFileLoading] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);
  const [openPreview, setOpenPreview] = useState(false);

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
        // Handle file uploads first
        const formData = new FormData();
        values.documents.forEach((file, index) => {
          formData.append(`document-${index}`, file);
        });

        // Add other form data
        Object.keys(values).forEach(key => {
          if (key !== 'documents') {
            formData.append(key, values[key]);
          }
        });

        // TODO: Replace with your API call
        console.log('Form submitted:', values);
        
        // Reset form after successful submission
        resetForm();
        
        // Show success message
        alert('Tender submitted successfully!');
      } catch (error) {
        console.error('Submission error:', error);
        alert('Error submitting tender. Please try again.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    formik.setFieldValue('documents', [...formik.values.documents, ...files]);
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...formik.values.documents];
    newFiles.splice(index, 1);
    formik.setFieldValue('documents', newFiles);
  };

  const handlePreviewFile = (file) => {
    setPreviewFile(file);
    setOpenPreview(true);
  };

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Submit New Tender
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
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

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth error={formik.touched.tenderType && Boolean(formik.errors.tenderType)}>
            <InputLabel>Tender Type</InputLabel>
            <Select
              id="tenderType"
              name="tenderType"
              value={formik.values.tenderType}
              onChange={formik.handleChange}
              label="Tender Type"
            >
              <MenuItem value="open">Open Procurement</MenuItem>
              <MenuItem value="restricted">Restricted Procurement</MenuItem>
              <MenuItem value="direct">Direct Award (Gré à Gré)</MenuItem>
            </Select>
            {formik.touched.tenderType && formik.errors.tenderType && (
              <Typography color="error" variant="caption">
                {formik.errors.tenderType}
              </Typography>
            )}
          </FormControl>
        </Grid>

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

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="deadline"
            name="deadline"
            label="Submission Deadline"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formik.values.deadline}
            onChange={formik.handleChange}
            error={formik.touched.deadline && Boolean(formik.errors.deadline)}
            helperText={formik.touched.deadline && formik.errors.deadline}
          />
        </Grid>

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

          {formik.values.documents.length > 0 && (
            <FileUploadPreview
              files={formik.values.documents}
              onRemove={handleRemoveFile}
              onPreview={handlePreviewFile}
            />
          )}

          {formik.touched.documents && formik.errors.documents && (
            <Typography color="error" variant="caption">
              {formik.errors.documents}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? 'Submitting...' : 'Submit Tender'}
          </Button>
        </Grid>
      </Grid>

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