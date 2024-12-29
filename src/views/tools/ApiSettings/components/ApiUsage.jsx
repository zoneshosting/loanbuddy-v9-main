
import PropTypes from 'prop-types';
import { Paper, Typography } from '@mui/material';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';

const ApiUsage = ({ refresh }) => {
  const theme = useTheme();

  const chartData = {
    series: [{
      name: 'API Calls',
      data: [2800, 3200, 2950, 3800, 3100, 3500, 3200]
    }],
    options: {
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          show: false
        }
      },
      colors: [theme.palette.primary.main],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.3,
          stops: [0, 90, 100]
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
          style: {
            colors: theme.palette.text.secondary
          }
        }
      },
      yaxis: {
        title: {
          text: 'API Calls',
          style: {
            color: theme.palette.text.secondary
          }
        },
        labels: {
          style: {
            colors: theme.palette.text.secondary
          }
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      }
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        API Usage
      </Typography>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </Paper>
  );
};

ApiUsage.propTypes = {
  refresh: PropTypes.bool
};

export default ApiUsage;
