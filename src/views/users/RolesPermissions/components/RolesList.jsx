
import PropTypes from 'prop-types';
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Typography,
  Box,
  Chip
} from '@mui/material';
import { IconDotsVertical, IconUserPlus } from '@tabler/icons-react';
import { useState } from 'react';

const RolesList = ({ selectedRole, onRoleSelect, onAddClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuRole, setMenuRole] = useState(null);

  // Mock data - replace with actual roles
  const roles = [
    {
      id: 1,
      name: 'Administrator',
      description: 'Full system access',
      users: 3
    },
    {
      id: 2,
      name: 'Manager',
      description: 'Team and pipeline management',
      users: 5
    },
    {
      id: 3,
      name: 'Loan Officer',
      description: 'Lead and client management',
      users: 12
    },
    {
      id: 4,
      name: 'Loan Processor',
      description: 'Document processing',
      users: 8
    }
  ];

  const handleMenuOpen = (event, role) => {
    setAnchorEl(event.currentTarget);
    setMenuRole(role);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuRole(null);
  };

  return (
    <Paper sx={{ height: '100%' }}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Roles</Typography>
        <Button
          variant="contained"
          startIcon={<IconUserPlus />}
          size="small"
          onClick={onAddClick}
        >
          Add Role
        </Button>
      </Box>

      <List>
        {roles.map((role) => (
          <ListItem
            key={role.id}
            button
            selected={selectedRole?.id === role.id}
            onClick={() => onRoleSelect(role)}
          >
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {role.name}
                  <Chip
                    label={`${role.users} users`}
                    size="small"
                    variant="outlined"
                    sx={{ ml: 1 }}
                  />
                </Box>
              }
              secondary={role.description}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                size="small"
                onClick={(e) => handleMenuOpen(e, role)}
              >
                <IconDotsVertical size="1.1rem" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Edit Role</MenuItem>
        <MenuItem onClick={handleMenuClose}>Duplicate Role</MenuItem>
        <MenuItem onClick={handleMenuClose}>Delete Role</MenuItem>
      </Menu>
    </Paper>
  );
};

RolesList.propTypes = {
  selectedRole: PropTypes.object,
  onRoleSelect: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired
};

export default RolesList;
