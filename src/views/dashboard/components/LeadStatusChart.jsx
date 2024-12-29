import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import Chart from 'react-apexcharts';

const LeadStatusChart = ({ isLoading }) => {
  const theme = useTheme();

  const chartData = {
    series: [856, 432, 150],
    options: {
      chart: {
        type: 'donut'
      },
      labels: ['Hot Leads', 'Warm Leads', 'Cold Leads'],
      colors: [theme.palette.success.main, theme.palette.warning.main, theme.palette.error.main],
      legend: {
        show: true,
        position: 'bottom'
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true
              },
              value: {
                show: true,
                formatter: (val) => `${val} leads`
              },
              total: {
                show: true,
                label: 'Total Leads',
                formatter: () => '1,438'
              }
            }
          }
        }
      }
    }
  };

  return (
    <MainCard title="Lead Status Distribution">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="donut"
            height={350}
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
            <Box>
              <Typography variant="h4" color="success.main">59.5%</Typography>
              <Typography variant="body2">Hot Leads</Typography>
            </Box>
            <Box>
              <Typography variant="h4" color="warning.main">30.0%</Typography>
              <Typography variant="body2">Warm Leads</Typography>
            </Box>
            <Box>
              <Typography variant="h4" color="error.main">10.5%</Typography>
              <Typography variant="body2">Cold Leads</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </MainCard>
  );
};

LeadStatusChart.propTypes = {
  isLoading: PropTypes.bool
};

export default LeadStatusChart;