
import PropTypes from 'prop-types';
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Box,
  Button
} from '@mui/material';
import { useState } from 'react';

const permissions = {
  leads: [
    { id: 'leads.view', name: 'View Leads' },
    { id: 'leads.create', name: 'Create Leads' },
    { id: 'leads.edit', name: 'Edit Leads' },
    { id: 'leads.delete', name: 'Delete Leads' }
  ],
  clients: [
    { id: 'clients.view', name: 'View Clients' },
    { id: 'clients.create', name: 'Create Clients' },
    { id: 'clients.edit', name: 'Edit Clients' },
    { id: 'clients.delete', name: 'Delete Clients' }
  ],
  loans: [
    { id: 'loans.view', name: 'View Loans' },
    { id: 'loans.create', name: 'Create Loans' },
    { id: 'loans.edit', name: 'Edit Loans' },
    { id: 'loans.approve', name: 'Approve Loans' }
  ],
  reports: [
    { id: 'reports.view', name: 'View Reports' },
    { id: 'reports.create', name: 'Create Reports' },
    { id: 'reports.export', name: 'Export Reports' }
  ],
  settings: [
    { id: 'settings.view', name: 'View Settings' },
    { id: 'settings.edit', name: 'Edit Settings' },
    { id: 'settings.system', name: 'System Settings' }
  ]
};

const PermissionMatrix = ({ selectedRole }) => {
  const [modified, setModified] = useState(false);
  const [selectedPermissions, setSelectedPermissions] = useState({});

  const handlePermissionChange = (permissionId) => {
    setSelectedPermissions(prev => ({
      ...prev,
      [permissionId]: !prev[permissionId]
    }));
    setModified(true);
  };

  const handleSave = () => {
    console.log('Saving permissions:', selectedPermissions);
    setModified(false);
  };

  if (!selectedRole) {
    return (
      <Paper sx={{ p: 3, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography color="textSecondary">
          Select a role to view and edit permissions
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper sx={{ height: '100%' }}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">
          Permissions for {selectedRole.name}
        </Typography>
        <Button 
          variant="contained"
          disabled={!modified}
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Module/Feature</TableCell>
              <TableCell>Permission</TableCell>
              <TableCell align="center">Allowed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(permissions).map(([module, modulePermissions]) => (
              modulePermissions.map((permission, index) => (
                <TableRow key={permission.id}>
                  {index === 0 && (
                    <TableCell 
                      rowSpan={modulePermissions.length}
                      sx={{ verticalAlign: 'top', pt: 2 }}
                    >
                      <Typography variant="subtitle2">
                        {module.charAt(0).toUpperCase() + module.slice(1)}
                      </Typography>
                    </TableCell>
                  )}
                  <TableCell>{permission.name}</TableCell>
                  <TableCell align="center">
                    <Checkbox
                      checked={selectedPermissions[permission.id] || false}
                      onChange={() => handlePermissionChange(permission.id)}
                    />
                  </TableCell>
                </TableRow>
              ))
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

PermissionMatrix.propTypes = {
  selectedRole: PropTypes.object
};

export default PermissionMatrix;
