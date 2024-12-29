
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import RolesList from './components/RolesList';
import AddRoleDialog from './components/AddRoleDialog';
import PermissionMatrix from './components/PermissionMatrix';

const RolesPermissions = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleAddRole = (roleData) => {
    console.log('Adding role:', roleData);
    setOpenDialog(false);
  };

  return (
    <MainCard title="Roles & Permissions">
      <Typography variant="body2" gutterBottom>
        Define user roles and manage their permissions. Control access to different features and functionalities.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <RolesList 
            selectedRole={selectedRole}
            onRoleSelect={handleRoleSelect}
            onAddClick={() => setOpenDialog(true)}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <PermissionMatrix selectedRole={selectedRole} />
        </Grid>
      </Grid>

      <AddRoleDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmit={handleAddRole}
      />
    </MainCard>
  );
};

export default RolesPermissions;
