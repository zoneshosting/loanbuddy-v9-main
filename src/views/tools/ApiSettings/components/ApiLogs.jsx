
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
  Chip,
  Box
} from '@mui/material';

const getStatusColor = (status) => {
  if (status >= 200 && status < 300) return 'success';
  if (status >= 400 && status < 500) return 'warning';
  if (status >= 500) return 'error';
  return 'default';
};

const ApiLogs = ({ refresh }) => {
  // Mock data - replace with actual API logs
  const logs = [
    {
      id: 1,
      timestamp: '2024-02-15 14:23:45',
      method: 'POST',
      endpoint: '/api/v1/leads',
      status: 201,
      response_time: 245,
      ip_address: '192.168.1.100'
    },
    {
      id: 2,
      timestamp: '2024-02-15 14:22:30',
      method: 'GET',
      endpoint: '/api/v1/applications',
      status: 200,
      response_time: 180,
      ip_address: '192.168.1.101'
    },
    {
      id: 3,
      timestamp: '2024-02-15 14:21:15',
      method: 'PUT',
      endpoint: '/api/v1/leads/123',
      status: 400,
      response_time: 150,
      ip_address: '192.168.1.102'
    }
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        API Logs
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Timestamp</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Endpoint</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Response Time</TableCell>
              <TableCell>IP Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.timestamp}</TableCell>
                <TableCell>
                  <Chip
                    label={log.method}
                    size="small"
                    color={
                      log.method === 'GET' ? 'primary' :
                      log.method === 'POST' ? 'success' :
                      log.method === 'PUT' ? 'warning' :
                      log.method === 'DELETE' ? 'error' :
                      'default'
                    }
                  />
                </TableCell>
                <TableCell>{log.endpoint}</TableCell>
                <TableCell>
                  <Chip
                    label={log.status}
                    size="small"
                    color={getStatusColor(log.status)}
                  />
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {log.response_time}
                    <Typography variant="caption" color="textSecondary" sx={{ ml: 0.5 }}>
                      ms
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{log.ip_address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

ApiLogs.propTypes = {
  refresh: PropTypes.bool
};

export default ApiLogs;
