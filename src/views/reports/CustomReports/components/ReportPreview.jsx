
import PropTypes from 'prop-types';
import { Paper, Typography, Box } from '@mui/material';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';

const ReportPreview = ({ config }) => {
  const theme = useTheme();

  // Mock data - replace with actual data based on config
  const getChartData = () => {
    switch (config.chartType) {
      case 'bar':
        return {
          series: [{
            name: 'Value',
            data: [44, 55, 57, 56, 61, 58]
          }],
          options: {
            chart: {
              type: 'bar'
            },
            colors: [theme.palette.primary.main],
            xaxis: {
              categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6']
            }
          }
        };
      case 'line':
        return {
          series: [{
            name: 'Value',
            data: [30, 40, 35, 50, 49, 60, 70]
          }],
          options: {
            chart: {
              type: 'line'
            },
            colors: [theme.palette.primary.main],
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
            }
          }
        };
      case 'pie':
        return {
          series: [44, 55, 13, 43],
          options: {
            chart: {
              type: 'pie'
            },
            labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
            colors: [
              theme.palette.primary.main,
              theme.palette.secondary.main,
              theme.palette.success.main,
              theme.palette.warning.main
            ]
          }
        };
      default:
        return null;
    }
  };

  const chartData = getChartData();

  if (!config.chartType || !chartData) {
    return (
      <Paper sx={{ p: 2, minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="body1" color="textSecondary">
          Select metrics and chart type to preview report
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6">Report Preview</Typography>
      </Box>

      <Chart
        options={chartData.options}
        series={chartData.series}
        type={config.chartType}
        height={400}
      />
    </Paper>
  );
};

ReportPreview.propTypes = {
  config: PropTypes.object.isRequired
};

export default ReportPreview;
