
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Chip,
  Avatar,
  Box,
  Typography
} from '@mui/material';
import { IconDotsVertical } from '@tabler/icons-react';
import { useState } from 'react';

const getRoleColor = (role) => {
  switch (role.toLowerCase()) {
    case 'admin':
      return 'error';
    case 'manager':
      return 'warning';
    case 'agent':
      return 'info';
    case 'processor':
      return 'success';
    default:
      return 'default';
  }
};

const UserList = ({ filters }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleMenuOpen = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

  // Mock data - replace with actual API call
  const users = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'Manager',
      status: 'active',
      lastActive: '2024-02-15 14:30',
      avatar: null
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      role: 'Agent',
      status: 'active',
      lastActive: '2024-02-15 13:45',
      avatar: null
    },
    {
      id: 3,
      name: 'Mike Brown',
      email: 'm.brown@example.com',
      role: 'Processor',
      status: 'inactive',
      lastActive: '2024-02-14 16:20',
      avatar: null
    }
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Last Active</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar 
                    sx={{ width: 32, height: 32, mr: 2 }}
                    src={user.avatar}
                  >
                    {user.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2">
                      {user.name}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {user.email}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Chip 
                  label={user.role}
                  size="small"
                  color={getRoleColor(user.role)}
                />
              </TableCell>
              <TableCell>
                <Chip 
                  label={user.status}
                  size="small"
                  color={user.status === 'active' ? 'success' : 'default'}
                />
              </TableCell>
              <TableCell>{user.lastActive}</TableCell>
              <TableCell align="right">
                <IconButton onClick={(e) => handleMenuOpen(e, user)}>
                  <IconDotsVertical size="1.1rem" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Edit User</MenuItem>
        <MenuItem onClick={handleMenuClose}>Change Role</MenuItem>
        <MenuItem onClick={handleMenuClose}>Reset Password</MenuItem>
        <MenuItem onClick={handleMenuClose}>
          {selectedUser?.status === 'active' ? 'Deactivate' : 'Activate'}
        </MenuItem>
      </Menu>
    </TableContainer>
  );
};

UserList.propTypes = {
  filters: PropTypes.object.isRequired
};

export default UserList;
