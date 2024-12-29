import PropTypes from 'prop-types';
import { Grid, MenuItem, TextField } from '@mui/material';

const PipelineFilters = ({ filters, onFilterChange }) => {
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
          label="Date Range"
          value={filters.dateRange}
          onChange={handleChange('dateRange')}
        >
          <MenuItem value="week">This Week</MenuItem>
          <MenuItem value="month">This Month</MenuItem>
          <MenuItem value="quarter">This Quarter</MenuItem>
          <MenuItem value="year">This Year</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          select
          fullWidth
          label="Loan Type"
          value={filters.loanType}
          onChange={handleChange('loanType')}
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
          label="Loan Officer"
          value={filters.agent}
          onChange={handleChange('agent')}
        >
          <MenuItem value="all">All Officers</MenuItem>
          <MenuItem value="1">John Smith</MenuItem>
          <MenuItem value="2">Sarah Johnson</MenuItem>
          <MenuItem value="3">Mike Brown</MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
};

PipelineFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default PipelineFilters;
