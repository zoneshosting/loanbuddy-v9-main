import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  MenuItem,
  Typography
} from '@mui/material';
import { useState } from 'react';

const CreateCampaignDialog = ({ open, onClose, onSubmit }) => {
  const [values, setValues] = useState({
    name: '',
    message: '',
    template: '',
    sendDate: '',
    status: 'draft'
  });

  const [errors, setErrors] = useState({});
  const maxMessageLength = 160;

  const handleChange = (field) => (event) => {
    if (field === 'message' && event.target.value.length > maxMessageLength) {
      return;
    }
    setValues({ ...values, [field]: event.target.value });
    setErrors({ ...errors, [field]: '' });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!values.name.trim()) {
      newErrors.name = 'Campaign name is required';
    }
    if (!values.message.trim()) {
      newErrors.message = 'Message is required';
    }
    if (!values.template) {
      newErrors.template = 'Template is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(values);
    setValues({
      name: '',
      message: '',
      template: '',
      sendDate: '',
      status: 'draft'
    });
    setErrors({});
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Create New SMS Campaign</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              label="Campaign Name"
              fullWidth
              value={values.name}
              onChange={handleChange('name')}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              fullWidth
              multiline
              rows={3}
              value={values.message}
              onChange={handleChange('message')}
              error={Boolean(errors.message)}
              helperText={errors.message || `${values.message.length}/${maxMessageLength} characters`}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Message Template"
              fullWidth
              value={values.template}
              onChange={handleChange('template')}
              error={Boolean(errors.template)}
              helperText={errors.template}
            >
              <MenuItem value="rate-alert">Rate Alert</MenuItem>
              <MenuItem value="reminder">Application Reminder</MenuItem>
              <MenuItem value="document">Document Request</MenuItem>
              <MenuItem value="follow-up">Follow-up</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="datetime-local"
              label="Send Date"
              fullWidth
              value={values.sendDate}
              onChange={handleChange('sendDate')}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Status"
              fullWidth
              value={values.status}
              onChange={handleChange('status')}
            >
              <MenuItem value="draft">Save as Draft</MenuItem>
              <MenuItem value="scheduled">Schedule</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Create Campaign
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CreateCampaignDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CreateCampaignDialog;