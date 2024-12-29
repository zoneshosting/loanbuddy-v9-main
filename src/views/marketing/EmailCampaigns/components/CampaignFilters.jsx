import PropTypes from 'prop-types';
import { Grid, MenuItem, TextField, Button, Box } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';

const CampaignFilters = ({ filters, onFilterChange, onCreateClick }) => {
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
            label="Status"
            value={filters.status}
            onChange={handleChange('status')}
          >
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="draft">Draft</MenuItem>
            <MenuItem value="scheduled">Scheduled</MenuItem>
            <MenuItem value="sent">Sent</MenuItem>
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
            <MenuItem value="week">Last 7 Days</MenuItem>
            <MenuItem value="month">Last 30 Days</MenuItem>
            <MenuItem value="quarter">Last 90 Days</MenuItem>
            <MenuItem value="year">Last Year</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            startIcon={<IconPlus />}
            onClick={onCreateClick}
            fullWidth
          >
            Create Campaign
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

CampaignFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onCreateClick: PropTypes.func.isRequired
};

export default CampaignFilters;