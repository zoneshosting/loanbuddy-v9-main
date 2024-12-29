
import PropTypes from 'prop-types';
import { Paper, Typography } from '@mui/material';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';

const LeadSourceChart = () => {
  const theme = useTheme();

  const chartData = {
    series: [35, 25, 20, 15, 5],
    options: {
      chart: {
        type: 'donut'
      },
      labels: ['Website', 'Referral', 'Social Media', 'Email', 'Other'],
      colors: [
        theme.palette.primary.main,
        theme.palette.success.main,
        theme.palette.warning.main,
        theme.palette.error.main,
        theme.palette.secondary.main
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
                label: 'Total Leads',
                formatter: () => '2,547'
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
        Lead Sources Distribution
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

LeadSourceChart.propTypes = {
  filters: PropTypes.object.isRequired
};

export default LeadSourceChart;
