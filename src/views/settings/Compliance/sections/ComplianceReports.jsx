
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Button,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
  Typography
} from '@mui/material';
import { IconDownload, IconRefresh } from '@tabler/icons-react';

const ComplianceReports = ({ onSave }) => {
  const [loading, setLoading] = useState(false);

  // Mock data - replace with actual reports
  const reports = [
    {
      id: 1,
      name: 'Data Privacy Audit',
      type: 'Monthly',
      lastGenerated: '2024-02-15',
      status: 'completed'
    },
    {
      id: 2,
      name: 'Security Assessment',
      type: 'Quarterly',
      lastGenerated: '2024-01-31',
      status: 'completed'
    },
    {
      id: 3,
      name: 'User Access Review',
      type: 'Monthly',
      lastGenerated: '2024-02-14',
      status: 'completed'
    },
    {
      id: 4,
      name: 'Compliance Checklist',
      type: 'Weekly',
      lastGenerated: '2024-02-12',
      status: 'completed'
    }
  ];

  const handleGenerateReport = (reportId) => {
    setLoading(true);
    // TODO: Implement report generation
    console.log('Generating report:', reportId);
    setTimeout(() => setLoading(false), 1000);
  };

  const handleDownloadReport = (reportId) => {
    // TODO: Implement report download
    console.log('Downloading report:', reportId);
  };

  return (
    <Card>
      <CardHeader 
        title="Compliance Reports" 
        action={
          <Button
            startIcon={<IconRefresh />}
            onClick={() => handleGenerateReport('all')}
            disabled={loading}
          >
            Refresh All
          </Button>
        }
      />
      <Divider />
      <CardContent>
        <List>
          {reports.map((report) => (
            <ListItem key={report.id} divider>
              <ListItemText
                primary={report.name}
                secondary={
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="caption" color="textSecondary" display="block">
                      Last Generated: {report.lastGenerated}
                    </Typography>
                    <Box sx={{ mt: 0.5 }}>
                      <Chip 
                        label={report.type}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ mr: 1 }}
                      />
                      <Chip 
                        label={report.status}
                        size="small"
                        color={report.status === 'completed' ? 'success' : 'warning'}
                      />
                    </Box>
                  </Box>
                }
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  onClick={() => handleDownloadReport(report.id)}
                  disabled={loading}
                >
                  <IconDownload size="1.1rem" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

ComplianceReports.propTypes = {
  onSave: PropTypes.func.isRequired
};

export default ComplianceReports;
