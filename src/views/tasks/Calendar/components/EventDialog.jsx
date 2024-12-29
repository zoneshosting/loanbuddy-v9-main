
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
import { useState, useEffect } from 'react';

const EventDialog = ({ open, event, onClose, onSave }) => {
  const [values, setValues] = useState({
    title: '',
    type: 'task',
    description: '',
    start: '',
    end: '',
    assignee: '',
    client: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (event) {
      setValues({
        ...event,
        start: event.start.slice(0, 16), // Format datetime for input
        end: event.end.slice(0, 16)
      });
    } else {
      setValues({
        title: '',
        type: 'task',
        description: '',
        start: '',
        end: '',
        assignee: '',
        client: ''
      });
    }
  }, [event]);

  const handleChange = (field) => (event) => {
    setValues({ ...values, [field]: event.target.value });
    setErrors({ ...errors, [field]: '' });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!values.title.trim()) newErrors.title = 'Title is required';
    if (!values.start) newErrors.start = 'Start time is required';
    if (!values.end) newErrors.end = 'End time is required';
    if (!values.assignee) newErrors.assignee = 'Assignee is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave(values);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{event ? 'Edit Event' : 'Create New Event'}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoFocus
              label="Title"
              fullWidth
              value={values.title}
              onChange={handleChange('title')}
              error={Boolean(errors.title)}
              helperText={errors.title}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Event Type"
              fullWidth
              value={values.type}
              onChange={handleChange('type')}
            >
              <MenuItem value="task">Task</MenuItem>
              <MenuItem value="appointment">Appointment</MenuItem>
              <MenuItem value="deadline">Deadline</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="datetime-local"
              label="Start Time"
              fullWidth
              value={values.start}
              onChange={handleChange('start')}
              error={Boolean(errors.start)}
              helperText={errors.start}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="datetime-local"
              label="End Time"
              fullWidth
              value={values.end}
              onChange={handleChange('end')}
              error={Boolean(errors.end)}
              helperText={errors.end}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Assignee"
              fullWidth
              value={values.assignee}
              onChange={handleChange('assignee')}
              error={Boolean(errors.assignee)}
              helperText={errors.assignee}
            >
              <MenuItem value="1">John Smith</MenuItem>
              <MenuItem value="2">Sarah Johnson</MenuItem>
              <MenuItem value="3">Mike Brown</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Related Client"
              fullWidth
              value={values.client}
              onChange={handleChange('client')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={3}
              value={values.description}
              onChange={handleChange('description')}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          {event ? 'Save Changes' : 'Create Event'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

EventDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  event: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default EventDialog;
