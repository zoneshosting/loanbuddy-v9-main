
import PropTypes from 'prop-types';
import { Paper, Typography } from '@mui/material';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';

const SalesTrendChart = () => {
  const theme = useTheme();

  const chartData = {
    series: [
      {
        name: 'Sales Volume',
        data: [2.4, 2.8, 2.2, 3.1, 2.6, 2.9, 3.2, 2.7, 2.9, 3.3, 3.0, 3.4]
      },
      {
        name: 'Revenue',
        data: [0.12, 0.14, 0.11, 0.16, 0.13, 0.14, 0.16, 0.13, 0.14, 0.17, 0.15, 0.17]
      }
    ],
    options: {
      chart: {
        type: 'line',
        toolbar: {
          show: false
        }
      },
      colors: [theme.palette.primary.main, theme.palette.success.main],
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
      yaxis: [
        {
          title: {
            text: 'Sales Volume (M)',
            style: {
              color: theme.palette.text.secondary
            }
          },
          labels: {
            formatter: (value) => `$${value}M`,
            style: {
              colors: theme.palette.text.secondary
            }
          }
        },
        {
          opposite: true,
          title: {
            text: 'Revenue (M)',
            style: {
              color: theme.palette.text.secondary
            }
          },
          labels: {
            formatter: (value) => `$${value}M`,
            style: {
              colors: theme.palette.text.secondary
            }
          }
        }
      ],
      grid: {
        borderColor: theme.palette.divider
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        labels: {
          colors: theme.palette.text.secondary
        }
      },
      tooltip: {
        y: {
          formatter: (value) => `$${value}M`
        }
      }
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Sales & Revenue Trend
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

SalesTrendChart.propTypes = {
  filters: PropTypes.object.isRequired
};

export default SalesTrendChart;
