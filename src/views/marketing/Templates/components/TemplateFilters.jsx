
import PropTypes from 'prop-types';
import { Grid, MenuItem, TextField, Button, Box } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';

const TemplateFilters = ({ filters, onFilterChange, onCreateClick }) => {
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
            label="Template Type"
            value={filters.type}
            onChange={handleChange('type')}
          >
            <MenuItem value="all">All Types</MenuItem>
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="sms">SMS</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            select
            fullWidth
            label="Category"
            value={filters.category}
            onChange={handleChange('category')}
          >
            <MenuItem value="all">All Categories</MenuItem>
            <MenuItem value="onboarding">Onboarding</MenuItem>
            <MenuItem value="marketing">Marketing</MenuItem>
            <MenuItem value="follow-up">Follow-up</MenuItem>
            <MenuItem value="reminder">Reminder</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            startIcon={<IconPlus />}
            onClick={onCreateClick}
            fullWidth
          >
            Create Template
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

TemplateFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onCreateClick: PropTypes.func.isRequired
};

export default TemplateFilters;
