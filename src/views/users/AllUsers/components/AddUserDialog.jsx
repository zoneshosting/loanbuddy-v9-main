
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

const AddUserDialog = ({ open, onClose, onSubmit }) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    team: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (event) => {
    setValues({ ...values, [field]: event.target.value });
    setErrors({ ...errors, [field]: '' });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!values.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!values.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!values.email.trim()) newErrors.email = 'Email is required';
    if (!values.role) newErrors.role = 'Role is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(values);
    handleReset();
  };

  const handleReset = () => {
    setValues({
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      team: ''
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
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Add New User</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoFocus
              label="First Name"
              fullWidth
              value={values.firstName}
              onChange={handleChange('firstName')}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              fullWidth
              value={values.lastName}
              onChange={handleChange('lastName')}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={values.email}
              onChange={handleChange('email')}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Role"
              fullWidth
              value={values.role}
              onChange={handleChange('role')}
              error={Boolean(errors.role)}
              helperText={errors.role}
            >
              <MenuItem value="admin">Administrator</MenuItem>
              <MenuItem value="manager">Manager</MenuItem>
              <MenuItem value="agent">Loan Officer</MenuItem>
              <MenuItem value="processor">Loan Processor</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Team"
              fullWidth
              value={values.team}
              onChange={handleChange('team')}
            >
              <MenuItem value="sales">Sales Team</MenuItem>
              <MenuItem value="processing">Processing Team</MenuItem>
              <MenuItem value="underwriting">Underwriting Team</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Add User
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddUserDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default AddUserDialog;
