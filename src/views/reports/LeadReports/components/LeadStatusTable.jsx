
import PropTypes from 'prop-types';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  LinearProgress
} from '@mui/material';

const LeadStatusTable = () => {
  // Mock data - replace with actual API call
  const statusData = [
    {
      status: 'New Leads',
      count: 856,
      percentage: 35,
      trend: '+12%',
      value: '$245,000'
    },
    {
      status: 'Contacted',
      count: 642,
      percentage: 25,
      trend: '+8%',
      value: '$185,000'
    },
    {
      status: 'Qualified',
      count: 485,
      percentage: 20,
      trend: '+15%',
      value: '$142,000'
    },
    {
      status: 'Application',
      count: 325,
      percentage: 15,
      trend: '+5%',
      value: '$98,000'
    },
    {
      status: 'Closed',
      count: 239,
      percentage: 5,
      trend: '+3%',
      value: '$72,000'
    }
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Lead Status Breakdown
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell>Distribution</TableCell>
              <TableCell align="right">Trend</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statusData.map((row) => (
              <TableRow key={row.status}>
                <TableCell>{row.status}</TableCell>
                <TableCell align="right">{row.count}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={row.percentage}
                        sx={{ height: 8, borderRadius: 1 }}
                      />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                      <Typography variant="body2" color="textSecondary">
                        {row.percentage}%
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="body2"
                    color={row.trend.startsWith('+') ? 'success.main' : 'error.main'}
                  >
                    {row.trend}
                  </Typography>
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

LeadStatusTable.propTypes = {
  filters: PropTypes.object.isRequired
};

export default LeadStatusTable;
