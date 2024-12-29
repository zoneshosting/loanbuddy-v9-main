
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
  Chip,
  Avatar
} from '@mui/material';

const SalesTable = () => {
  // Mock data - replace with actual API call
  const salesData = [
    {
      id: 1,
      officer: {
        name: 'John Smith',
        avatar: null
      },
      loanType: 'Conventional',
      totalLoans: 45,
      volume: 12500000,
      revenue: 625000,
      conversion: 28
    },
    {
      id: 2,
      officer: {
        name: 'Sarah Johnson',
        avatar: null
      },
      loanType: 'FHA',
      totalLoans: 38,
      volume: 8900000,
      revenue: 445000,
      conversion: 32
    },
    {
      id: 3,
      officer: {
        name: 'Mike Brown',
        avatar: null
      },
      loanType: 'VA',
      totalLoans: 32,
      volume: 7600000,
      revenue: 380000,
      conversion: 25
    }
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Sales Performance by Officer
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Loan Officer</TableCell>
              <TableCell>Loan Type</TableCell>
              <TableCell align="right">Total Loans</TableCell>
              <TableCell align="right">Volume</TableCell>
              <TableCell align="right">Revenue</TableCell>
              <TableCell align="right">Conversion Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salesData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar 
                      sx={{ width: 24, height: 24, mr: 1 }}
                      src={row.officer.avatar}
                    >
                      {row.officer.name.charAt(0)}
                    </Avatar>
                    <Typography variant="body2">
                      {row.officer.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={row.loanType}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell align="right">{row.totalLoans}</TableCell>
                <TableCell align="right">${(row.volume / 1000000).toFixed(1)}M</TableCell>
                <TableCell align="right">${(row.revenue / 1000).toFixed(0)}K</TableCell>
                <TableCell align="right">{row.conversion}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

SalesTable.propTypes = {
  filters: PropTypes.object.isRequired
};

export default SalesTable;
