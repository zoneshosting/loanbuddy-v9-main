
import PropTypes from 'prop-types';
import {
  Paper,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Box,
  Button
} from '@mui/material';
import { IconDeviceFloppy, IconRefresh } from '@tabler/icons-react';

const metrics = [
  { value: 'leads', label: 'Lead Count' },
  { value: 'conversion', label: 'Conversion Rate' },
  { value: 'volume', label: 'Sales Volume' },
  { value: 'revenue', label: 'Revenue' },
  { value: 'count', label: 'Loan Count' }
];

const groupings = [
  { value: 'source', label: 'Lead Source' },
  { value: 'loanType', label: 'Loan Type' },
  { value: 'officer', label: 'Loan Officer' },
  { value: 'status', label: 'Status' }
];

const chartTypes = [
  { value: 'bar', label: 'Bar Chart' },
  { value: 'line', label: 'Line Chart' },
  { value: 'pie', label: 'Pie Chart' },
  { value: 'table', label: 'Table' }
];

const ReportBuilder = ({ config, onConfigChange }) => {
  const handleMetricChange = (event) => {
    onConfigChange({
      ...config,
      metrics: event.target.value
    });
  };

  const handleGroupByChange = (event) => {
    onConfigChange({
      ...config,
      groupBy: event.target.value
    });
  };

  const handleChartTypeChange = (event) => {
    onConfigChange({
      ...config,
      chartType: event.target.value
    });
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6">Report Builder</Typography>
        <Box>
          <Button
            startIcon={<IconRefresh />}
            sx={{ mr: 1 }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            startIcon={<IconDeviceFloppy />}
          >
            Save Report
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Select Metrics</InputLabel>
            <Select
              multiple
              value={config.metrics}
              onChange={handleMetricChange}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip 
                      key={value} 
                      label={metrics.find(m => m.value === value)?.label} 
                      size="small"
                    />
                  ))}
                </Box>
              )}
            >
              {metrics.map((metric) => (
                <MenuItem key={metric.value} value={metric.value}>
                  {metric.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Group By</InputLabel>
            <Select
              value={config.groupBy}
              onChange={handleGroupByChange}
            >
              {groupings.map((group) => (
                <MenuItem key={group.value} value={group.value}>
                  {group.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Chart Type</InputLabel>
            <Select
              value={config.chartType}
              onChange={handleChartTypeChange}
            >
              {chartTypes.map((chart) => (
                <MenuItem key={chart.value} value={chart.value}>
                  {chart.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

ReportBuilder.propTypes = {
  config: PropTypes.object.isRequired,
  onConfigChange: PropTypes.func.isRequired
};

export default ReportBuilder;
