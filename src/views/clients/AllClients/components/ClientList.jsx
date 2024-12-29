
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
  Chip
} from '@mui/material';
import { IconDotsVertical } from '@tabler/icons-react';
import { useState } from 'react';
import useClients from '../hooks/useClients';

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'success';
    case 'pending':
      return 'warning';
    case 'inactive':
      return 'error';
    default:
      return 'default';
  }
};

const ClientList = ({ filters }) => {
  const { clients, isLoading } = useClients(filters);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleMenuOpen = (event, client) => {
    setAnchorEl(event.currentTarget);
    setSelectedClient(client);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedClient(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Loan Type</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.phone}</TableCell>
              <TableCell>
                <Chip 
                  label={client.status} 
                  color={getStatusColor(client.status)}
                  size="small"
                />
              </TableCell>
              <TableCell>{client.loanType}</TableCell>
              <TableCell>
                <IconButton onClick={(e) => handleMenuOpen(e, client)}>
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
        <MenuItem onClick={handleMenuClose}>View Details</MenuItem>
        <MenuItem onClick={handleMenuClose}>Edit Client</MenuItem>
        <MenuItem onClick={handleMenuClose}>View Documents</MenuItem>
        <MenuItem onClick={handleMenuClose}>Send Message</MenuItem>
      </Menu>
    </TableContainer>
  );
};

ClientList.propTypes = {
  filters: PropTypes.object.isRequired
};

export default ClientList;
