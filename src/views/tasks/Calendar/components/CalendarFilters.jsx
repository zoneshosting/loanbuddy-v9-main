
import PropTypes from 'prop-types';
import { Grid, MenuItem, TextField, Button, Box } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';

const CalendarFilters = ({ filters, onFilterChange, onAddClick }) => {
  const handleChange = (field) => (event) => {
    onFilterChange({
      ...filters,
      [field]: event.target.value
    });
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            fullWidth
            label="View"
            value={filters.view}
            onChange={handleChange('view')}
          >
            <MenuItem value="month">Month</MenuItem>
            <MenuItem value="week">Week</MenuItem>
            <MenuItem value="day">Day</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            fullWidth
            label="Task Type"
            value={filters.taskType}
            onChange={handleChange('taskType')}
          >
            <MenuItem value="all">All Types</MenuItem>
            <MenuItem value="task">Tasks</MenuItem>
            <MenuItem value="appointment">Appointments</MenuItem>
            <MenuItem value="deadline">Deadlines</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            fullWidth
            label="Assignee"
            value={filters.assignee}
            onChange={handleChange('assignee')}
          >
            <MenuItem value="all">All Assignees</MenuItem>
            <MenuItem value="1">John Smith</MenuItem>
            <MenuItem value="2">Sarah Johnson</MenuItem>
            <MenuItem value="3">Mike Brown</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            startIcon={<IconPlus />}
            onClick={onAddClick}
            fullWidth
          >
            Add Event
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

CalendarFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired
};

export default CalendarFilters;
