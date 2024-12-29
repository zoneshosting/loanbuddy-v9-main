
import PropTypes from 'prop-types';
import { Grid, MenuItem, TextField, Button, Box } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';

const TaskFilters = ({ filters, onFilterChange, onCreateClick }) => {
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
            label="Status"
            value={filters.status}
            onChange={handleChange('status')}
          >
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in_progress">In Progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="overdue">Overdue</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            fullWidth
            label="Priority"
            value={filters.priority}
            onChange={handleChange('priority')}
          >
            <MenuItem value="all">All Priority</MenuItem>
            <MenuItem value="high">High</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="low">Low</MenuItem>
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
            onClick={onCreateClick}
            fullWidth
          >
            Create Task
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

TaskFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onCreateClick: PropTypes.func.isRequired
};

export default TaskFilters;
