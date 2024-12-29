
import PropTypes from 'prop-types';
import { Grid, MenuItem, TextField } from '@mui/material';

const ReportFilters = ({ filters, onFilterChange }) => {
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
          <MenuItem value="week">Last 7 Days</MenuItem>
          <MenuItem value="month">Last 30 Days</MenuItem>
          <MenuItem value="quarter">Last 90 Days</MenuItem>
          <MenuItem value="year">Last Year</MenuItem>
          <MenuItem value="custom">Custom Range</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          select
          fullWidth
          label="Lead Source"
          value={filters.source}
          onChange={handleChange('source')}
        >
          <MenuItem value="all">All Sources</MenuItem>
          <MenuItem value="website">Website</MenuItem>
          <MenuItem value="referral">Referral</MenuItem>
          <MenuItem value="social">Social Media</MenuItem>
          <MenuItem value="email">Email Campaign</MenuItem>
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

ReportFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default ReportFilters;
