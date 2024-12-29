
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  MenuItem
} from '@mui/material';
import { useState } from 'react';
import TemplateEditor from './TemplateEditor';

const CreateTemplateDialog = ({ open, onClose, onSubmit }) => {
  const [values, setValues] = useState({
    name: '',
    type: '',
    category: '',
    subject: '',
    content: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (event) => {
    setValues({ 
      ...values, 
      [field]: event.target.value,
      // Clear subject when switching to SMS
      ...(field === 'type' && event.target.value === 'sms' && { subject: '' })
    });
    setErrors({ ...errors, [field]: '' });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = 'Template name is required';
    if (!values.type) newErrors.type = 'Template type is required';
    if (!values.category) newErrors.category = 'Category is required';
    if (values.type === 'email' && !values.subject.trim()) {
      newErrors.subject = 'Subject is required for email templates';
    }
    if (!values.content.trim()) newErrors.content = 'Content is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(values);
    handleReset();
  };

  const handleReset = () => {
    setValues({
      name: '',
      type: '',
      category: '',
      subject: '',
      content: ''
    });
    setErrors({});
  };

  return (
    <Dialog 
      open={open} 
      onClose={() => {
        onClose();
        handleReset();
      }} 
      maxWidth="md" 
      fullWidth
    >
      <DialogTitle>Create New Template</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoFocus
              label="Template Name"
              fullWidth
              value={values.name}
              onChange={handleChange('name')}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Template Type"
              fullWidth
              value={values.type}
              onChange={handleChange('type')}
              error={Boolean(errors.type)}
              helperText={errors.type}
            >
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="sms">SMS</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Category"
              fullWidth
              value={values.category}
              onChange={handleChange('category')}
              error={Boolean(errors.category)}
              helperText={errors.category}
            >
              <MenuItem value="onboarding">Onboarding</MenuItem>
              <MenuItem value="marketing">Marketing</MenuItem>
              <MenuItem value="follow-up">Follow-up</MenuItem>
              <MenuItem value="reminder">Reminder</MenuItem>
            </TextField>
          </Grid>
          {values.type === 'email' && (
            <Grid item xs={12}>
              <TextField
                label="Subject"
                fullWidth
                value={values.subject}
                onChange={handleChange('subject')}
                error={Boolean(errors.subject)}
                helperText={errors.subject}
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <TemplateEditor
              type={values.type}
              content={values.content}
              onChange={handleChange('content')}
              error={errors.content}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Create Template
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CreateTemplateDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CreateTemplateDialog;
