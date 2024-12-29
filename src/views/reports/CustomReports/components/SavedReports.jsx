
import PropTypes from 'prop-types';
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box
} from '@mui/material';
import { IconDotsVertical, IconPlus } from '@tabler/icons-react';
import { useState } from 'react';

const SavedReports = ({ selectedReport, onReportSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // Mock data - replace with actual saved reports
  const savedReports = [
    {
      id: 1,
      name: 'Monthly Lead Performance',
      description: 'Lead volume and conversion by source',
      lastRun: '2024-02-15',
      config: {
        metrics: ['leads', 'conversion'],
        filters: { dateRange: 'month' },
        groupBy: 'source',
        chartType: 'bar'
      }
    },
    {
      id: 2,
      name: 'Sales by Loan Type',
      description: 'Sales volume breakdown by loan type',
      lastRun: '2024-02-14',
      config: {
        metrics: ['volume', 'count'],
        filters: { dateRange: 'quarter' },
        groupBy: 'loanType',
        chartType: 'pie'
      }
    },
    {
      id: 3,
      name: 'Team Performance',
      description: 'Individual loan officer performance metrics',
      lastRun: '2024-02-13',
      config: {
        metrics: ['volume', 'conversion', 'revenue'],
        filters: { dateRange: 'year' },
        groupBy: 'officer',
        chartType: 'line'
      }
    }
  ];

  const handleMenuOpen = (event, report) => {
    setAnchorEl(event.currentTarget);
    setSelectedItem(report);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedItem(null);
  };

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Saved Reports</Typography>
        <Button
          variant="contained"
          startIcon={<IconPlus />}
          size="small"
        >
          New Report
        </Button>
      </Box>

      <List>
        {savedReports.map((report) => (
          <ListItem
            key={report.id}
            button
            selected={selectedReport?.id === report.id}
            onClick={() => onReportSelect(report)}
          >
            <ListItemText
              primary={report.name}
              secondary={
                <>
                  <Typography variant="caption" display="block">
                    {report.description}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Last run: {report.lastRun}
                  </Typography>
                </>
              }
            />
            <ListItemSecondaryAction>
              <IconButton 
                edge="end" 
                onClick={(e) => handleMenuOpen(e, report)}
                size="small"
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
        <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
        <MenuItem onClick={handleMenuClose}>Duplicate</MenuItem>
        <MenuItem onClick={handleMenuClose}>Share</MenuItem>
        <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
      </Menu>
    </Paper>
  );
};

SavedReports.propTypes = {
  selectedReport: PropTypes.object,
  onReportSelect: PropTypes.func.isRequired
};

export default SavedReports;
