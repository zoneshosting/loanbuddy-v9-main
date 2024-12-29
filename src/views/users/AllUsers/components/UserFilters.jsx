
import PropTypes from 'prop-types';
import { Grid, MenuItem, TextField, Button, Box } from '@mui/material';
import { IconUserPlus } from '@tabler/icons-react';

const UserFilters = ({ filters, onFilterChange, onAddClick }) => {
  const handleChange = (field) => (event) => {
    onFilterChange({
      ...filters,
      [field]: event.target.value
    });
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
          <TextField
            select
            fullWidth
            label="Role"
            value={filters.role}
            onChange={handleChange('role')}
          >
            <MenuItem value="all">All Roles</MenuItem>
            <MenuItem value="admin">Administrator</MenuItem>
            <MenuItem value="manager">Manager</MenuItem>
            <MenuItem value="agent">Loan Officer</MenuItem>
            <MenuItem value="processor">Loan Processor</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            select
            fullWidth
            label="Status"
            value={filters.status}
            onChange={handleChange('status')}
          >
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            startIcon={<IconUserPlus />}
            onClick={onAddClick}
            fullWidth
          >
            Add User
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

UserFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired
};

export default UserFilters;
