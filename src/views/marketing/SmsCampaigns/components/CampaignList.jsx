
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
      name: 'Rate Alert',
      message: 'New lower rates available! Contact us today.',
      status: 'sent',
      recipients: 850,
      delivered: 842,
      responses: 68,
      date: '2024-02-15'
    },
    {
      id: 2,
      name: 'Application Reminder',
      message: 'Complete your mortgage application today!',
      status: 'scheduled',
      recipients: 0,
      delivered: 0,
      responses: 0,
      date: '2024-02-20'
    },
    {
      id: 3,
      name: 'Document Request',
      message: 'Please submit your required documents.',
      status: 'draft',
      recipients: 0,
      delivered: 0,
      responses: 0,
      date: '-'
    }
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Campaign Name</TableCell>
            <TableCell>Message</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Recipients</TableCell>
            <TableCell align="right">Delivered</TableCell>
            <TableCell align="right">Responses</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell>{campaign.name}</TableCell>
              <TableCell>{campaign.message}</TableCell>
              <TableCell>
                <Chip 
                  label={campaign.status} 
                  color={getStatusColor(campaign.status)}
                  size="small"
                />
              </TableCell>
              <TableCell align="right">{campaign.recipients}</TableCell>
              <TableCell align="right">
                {campaign.delivered > 0 ? `${campaign.delivered} (${Math.round(campaign.delivered/campaign.recipients*100)}%)` : '-'}
              </TableCell>
              <TableCell align="right">
                {campaign.responses > 0 ? `${campaign.responses} (${Math.round(campaign.responses/campaign.delivered*100)}%)` : '-'}
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