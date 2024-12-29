
import PropTypes from 'prop-types';
import { Grid, MenuItem, TextField, Button, Box } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';

const AppFilters = ({ filters, onFilterChange, onConnectClick }) => {
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
            label="Category"
            value={filters.category}
            onChange={handleChange('category')}
          >
            <MenuItem value="all">All Categories</MenuItem>
            <MenuItem value="crm">CRM</MenuItem>
            <MenuItem value="marketing">Marketing</MenuItem>
            <MenuItem value="analytics">Analytics</MenuItem>
            <MenuItem value="communication">Communication</MenuItem>
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
            <MenuItem value="connected">Connected</MenuItem>
            <MenuItem value="disconnected">Disconnected</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            startIcon={<IconPlus />}
            onClick={onConnectClick}
            fullWidth
          >
            Connect New App
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

AppFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onConnectClick: PropTypes.func.isRequired
};

export default AppFilters;
