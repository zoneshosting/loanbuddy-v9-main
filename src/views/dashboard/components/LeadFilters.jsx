import PropTypes from 'prop-types';
import { Grid, MenuItem, TextField } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

const LeadFilters = ({ filters, onFilterChange }) => {
  const handleChange = (field) => (event) => {
    onFilterChange({
      ...filters,
      [field]: event.target.value
    });
  };

  return (
    <MainCard>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            fullWidth
            label="Date Range"
            value={filters.dateRange}
            onChange={handleChange('dateRange')}
          >
            <MenuItem value="today">Today</MenuItem>
            <MenuItem value="last7">Last 7 Days</MenuItem>
            <MenuItem value="last30">Last 30 Days</MenuItem>
            <MenuItem value="last90">Last 90 Days</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            fullWidth
            label="Lead Source"
            value={filters.leadSource}
            onChange={handleChange('leadSource')}
          >
            <MenuItem value="all">All Sources</MenuItem>
            <MenuItem value="website">Website</MenuItem>
            <MenuItem value="referral">Referral</MenuItem>
            <MenuItem value="social">Social Media</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            fullWidth
            label="Lead Status"
            value={filters.leadStatus}
            onChange={handleChange('leadStatus')}
          >
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="hot">Hot Leads</MenuItem>
            <MenuItem value="warm">Warm Leads</MenuItem>
            <MenuItem value="cold">Cold Leads</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            fullWidth
            label="Assigned Agent"
            value={filters.assignedAgent}
            onChange={handleChange('assignedAgent')}
          >
            <MenuItem value="all">All Agents</MenuItem>
            <MenuItem value="1">John Smith</MenuItem>
            <MenuItem value="2">Sarah Johnson</MenuItem>
            <MenuItem value="3">Mike Brown</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </MainCard>
  );
};

LeadFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default LeadFilters;