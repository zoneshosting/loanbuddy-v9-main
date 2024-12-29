
import PropTypes from 'prop-types';
import { Paper, Typography } from '@mui/material';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';

const ConversionChart = () => {
  const theme = useTheme();

  const chartData = {
    series: [{
      name: 'Conversion Rate',
      data: [23, 25, 21, 28, 22, 24, 26, 25, 27, 24, 22, 25]
    }],
    options: {
      chart: {
        type: 'line',
        toolbar: {
          show: false
        }
      },
      colors: [theme.palette.primary.main],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          style: {
            colors: theme.palette.text.secondary
          }
        }
      },
      yaxis: {
        title: {
          text: 'Conversion Rate (%)',
          style: {
            color: theme.palette.text.secondary
          }
        },
        labels: {
          formatter: (value) => `${value}%`,
          style: {
            colors: theme.palette.text.secondary
          }
        }
      },
      grid: {
        borderColor: theme.palette.divider
      },
      tooltip: {
        y: {
          formatter: (value) => `${value}%`
        }
      }
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Conversion Rate Trend
      </Typography>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </Paper>
  );
};

ConversionChart.propTypes = {
  filters: PropTypes.object.isRequired
};

export default ConversionChart;
