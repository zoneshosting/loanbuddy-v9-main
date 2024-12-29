import PropTypes from 'prop-types';
import { 
  TableRow, 
  TableCell, 
  IconButton, 
  Menu,
  MenuItem
} from '@mui/material';
import { IconDotsVertical } from '@tabler/icons-react';
import { useState } from 'react';

const LeadRow = ({ lead }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow>
      <TableCell>{lead.name}</TableCell>
      <TableCell>{lead.email}</TableCell>
      <TableCell>{lead.phone}</TableCell>
      <TableCell>{lead.status}</TableCell>
      <TableCell>{lead.source}</TableCell>
      <TableCell>
        <IconButton onClick={handleClick}>
          <IconDotsVertical size="1.1rem" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Edit</MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
          <MenuItem onClick={handleClose}>View Details</MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
};

LeadRow.propTypes = {
  lead: PropTypes.object.isRequired
};

export default LeadRow;