
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid
} from '@mui/material';
import { useState } from 'react';

const AddRoleDialog = ({ open, onClose, onSubmit }) => {
  const [values, setValues] = useState({
    name: '',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (event) => {
    setValues({ ...values, [field]: event.target.value });
    setErrors({ ...errors, [field]: '' });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = 'Role name is required';
    if (!values.description.trim()) newErrors.description = 'Description is required';

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
      description: ''
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
      <DialogTitle>Add New Role</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              label="Role Name"
              fullWidth
              value={values.name}
              onChange={handleChange('name')}
              error={Boolean(errors.name)}
              helperText={errors.name}
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
              error={Boolean(errors.description)}
              helperText={errors.description}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Add Role
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddRoleDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default AddRoleDialog;
