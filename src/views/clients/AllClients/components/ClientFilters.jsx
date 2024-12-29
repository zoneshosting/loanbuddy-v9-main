
import PropTypes from 'prop-types';
import { Grid, MenuItem, TextField } from '@mui/material';

const ClientFilters = ({ filters, onFilterChange }) => {
  const handleChange = (field) => (event) => {
    onFilterChange({
      ...filters,
      [field]: event.target.value
    });
  };

  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
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
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          select
          fullWidth
          label="Loan Type"
          value={filters.type}
          onChange={handleChange('type')}
        >
          <MenuItem value="all">All Types</MenuItem>
          <MenuItem value="conventional">Conventional</MenuItem>
          <MenuItem value="fha">FHA</MenuItem>
          <MenuItem value="va">VA</MenuItem>
          <MenuItem value="jumbo">Jumbo</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          select
          fullWidth
          label="Date Range"
          value={filters.dateRange}
          onChange={handleChange('dateRange')}
        >
          <MenuItem value="all">All Time</MenuItem>
          <MenuItem value="today">Today</MenuItem>
          <MenuItem value="week">This Week</MenuItem>
          <MenuItem value="month">This Month</MenuItem>
          <MenuItem value="quarter">This Quarter</MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
};

ClientFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default ClientFilters;
