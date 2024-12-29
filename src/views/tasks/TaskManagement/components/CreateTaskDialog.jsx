
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

const CreateTaskDialog = ({ open, onClose, onSubmit }) => {
  const [values, setValues] = useState({
    title: '',
    description: '',
    status: 'pending',
    priority: '',
    assignee: '',
    dueDate: '',
    client: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (event) => {
    setValues({ ...values, [field]: event.target.value });
    setErrors({ ...errors, [field]: '' });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!values.title.trim()) newErrors.title = 'Task title is required';
    if (!values.priority) newErrors.priority = 'Priority is required';
    if (!values.assignee) newErrors.assignee = 'Assignee is required';
    if (!values.dueDate) newErrors.dueDate = 'Due date is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(values);
    handleReset();
  };

  const handleReset = () => {
    setValues({
      title: '',
      description: '',
      status: 'pending',
      priority: '',
      assignee: '',
      dueDate: '',
      client: ''
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
      <DialogTitle>Create New Task</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              label="Task Title"
              fullWidth
              value={values.title}
              onChange={handleChange('title')}
              error={Boolean(errors.title)}
              helperText={errors.title}
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
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Priority"
              fullWidth
              value={values.priority}
              onChange={handleChange('priority')}
              error={Boolean(errors.priority)}
              helperText={errors.priority}
            >
              <MenuItem value="high">High</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="low">Low</MenuItem>
            </TextField>
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
              type="date"
              label="Due Date"
              fullWidth
              value={values.dueDate}
              onChange={handleChange('dueDate')}
              error={Boolean(errors.dueDate)}
              helperText={errors.dueDate}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Related Client"
              fullWidth
              value={values.client}
              onChange={handleChange('client')}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Create Task
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CreateTaskDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CreateTaskDialog;
