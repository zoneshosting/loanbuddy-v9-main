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

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'sent':
      return 'success';
    case 'scheduled':
      return 'warning';
    case 'draft':
      return 'default';
    default:
      return 'default';
  }
};

const CampaignList = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const handleMenuOpen = (event, campaign) => {
    setAnchorEl(event.currentTarget);
    setSelectedCampaign(campaign);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedCampaign(null);
  };

  // Mock data - replace with actual API call
  const campaigns = [
    {
      id: 1,
      name: 'Welcome Series',
      subject: 'Welcome to Our Mortgage Services',
      status: 'sent',
      sent: 1250,
      opened: 450,
      clicked: 85,
      date: '2024-02-15'
    },
    {
      id: 2,
      name: 'Rate Update',
      subject: 'New Lower Rates Available',
      status: 'scheduled',
      sent: 0,
      opened: 0,
      clicked: 0,
      date: '2024-02-20'
    },
    {
      id: 3,
      name: 'Follow-up Campaign',
      subject: 'Your Mortgage Application Status',
      status: 'draft',
      sent: 0,
      opened: 0,
      clicked: 0,
      date: '-'
    }
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Campaign Name</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Sent</TableCell>
            <TableCell align="right">Opened</TableCell>
            <TableCell align="right">Clicked</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell>{campaign.name}</TableCell>
              <TableCell>{campaign.subject}</TableCell>
              <TableCell>
                <Chip 
                  label={campaign.status} 
                  color={getStatusColor(campaign.status)}
                  size="small"
                />
              </TableCell>
              <TableCell align="right">{campaign.sent}</TableCell>
              <TableCell align="right">
                {campaign.opened > 0 ? `${campaign.opened} (${Math.round(campaign.opened/campaign.sent*100)}%)` : '-'}
              </TableCell>
              <TableCell align="right">
                {campaign.clicked > 0 ? `${campaign.clicked} (${Math.round(campaign.clicked/campaign.sent*100)}%)` : '-'}
              </TableCell>
              <TableCell align="right">{campaign.date}</TableCell>
              <TableCell align="right">
                <IconButton onClick={(e) => handleMenuOpen(e, campaign)}>
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
        <MenuItem onClick={handleMenuClose}>View Report</MenuItem>
        <MenuItem onClick={handleMenuClose}>Edit Campaign</MenuItem>
        <MenuItem onClick={handleMenuClose}>Duplicate</MenuItem>
        <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
      </Menu>
    </TableContainer>
  );
};

CampaignList.propTypes = {
  filters: PropTypes.object.isRequired
};

export default CampaignList;