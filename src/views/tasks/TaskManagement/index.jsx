
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';
import CreateTaskDialog from './components/CreateTaskDialog';
import TaskStats from './components/TaskStats';

const TaskManagement = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    assignee: 'all',
    dueDate: 'all'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleCreateTask = (taskData) => {
    console.log('Creating task:', taskData);
    setOpenDialog(false);
  };

  return (
    <MainCard title="Task Management">
      <Typography variant="body2" gutterBottom>
        Manage and track tasks related to mortgage applications, client follow-ups, and team activities.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TaskStats />
        </Grid>
        <Grid item xs={12}>
          <TaskFilters 
            filters={filters} 
            onFilterChange={handleFilterChange}
            onCreateClick={() => setOpenDialog(true)}
          />
        </Grid>
        <Grid item xs={12}>
          <TaskList filters={filters} />
        </Grid>
      </Grid>

      <CreateTaskDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmit={handleCreateTask}
      />
    </MainCard>
  );
};

export default TaskManagement;
