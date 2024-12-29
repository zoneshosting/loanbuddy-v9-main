
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import UserList from './components/UserList';
import UserFilters from './components/UserFilters';
import AddUserDialog from './components/AddUserDialog';
import UserStats from './components/UserStats';

const AllUsers = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [filters, setFilters] = useState({
    role: 'all',
    status: 'all'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleAddUser = (userData) => {
    console.log('Adding user:', userData);
    setOpenDialog(false);
  };

  return (
    <MainCard title="User Management">
      <Typography variant="body2" gutterBottom>
        Manage system users, their roles, and access permissions. Add new users and monitor user activity.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <UserStats />
        </Grid>
        <Grid item xs={12}>
          <UserFilters 
            filters={filters} 
            onFilterChange={handleFilterChange}
            onAddClick={() => setOpenDialog(true)}
          />
        </Grid>
        <Grid item xs={12}>
          <UserList filters={filters} />
        </Grid>
      </Grid>

      <AddUserDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmit={handleAddUser}
      />
    </MainCard>
  );
};

export default AllUsers;
