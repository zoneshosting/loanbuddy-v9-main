import PropTypes from 'prop-types';
import { Grid, MenuItem, TextField } from '@mui/material';

const LeadFilters = ({ filters, onFilterChange }) => {
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
          <MenuItem value="new">New</MenuItem>
          <MenuItem value="contacted">Contacted</MenuItem>
          <MenuItem value="qualified">Qualified</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          select
          fullWidth
          label="Source"
          value={filters.source}
          onChange={handleChange('source')}
        >
          <MenuItem value="all">All Sources</MenuItem>
          <MenuItem value="website">Website</MenuItem>
          <MenuItem value="referral">Referral</MenuItem>
          <MenuItem value="social">Social Media</MenuItem>
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
        </TextField>
      </Grid>
    </Grid>
  );
};

LeadFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default LeadFilters;