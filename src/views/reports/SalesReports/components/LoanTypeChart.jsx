
import PropTypes from 'prop-types';
import { Paper, Typography } from '@mui/material';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';

const LoanTypeChart = () => {
  const theme = useTheme();

  const chartData = {
    series: [45, 25, 20, 10],
    options: {
      chart: {
        type: 'donut'
      },
      labels: ['Conventional', 'FHA', 'VA', 'Jumbo'],
      colors: [
        theme.palette.primary.main,
        theme.palette.success.main,
        theme.palette.warning.main,
        theme.palette.error.main
      ],
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: theme.typography.fontFamily,
        labels: {
          colors: theme.palette.text.secondary
        }
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                label: 'Total Value',
                formatter: () => '$24.5M'
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => `${val}%`
      },
      tooltip: {
        y: {
          formatter: (val) => `${val}%`
        }
      }
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Loan Type Distribution
      </Typography>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        height={350}
      />
    </Paper>
  );
};

LoanTypeChart.propTypes = {
  filters: PropTypes.object.isRequired
};

export default LoanTypeChart;
