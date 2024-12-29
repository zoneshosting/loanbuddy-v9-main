import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import Chart from 'react-apexcharts';

const LeadTrends = ({ isLoading }) => {
  const theme = useTheme();

  const chartData = {
    series: [
      {
        name: 'New Leads',
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      },
      {
        name: 'Converted',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      }
    ],
    options: {
      chart: {
        type: 'line',
        toolbar: {
          show: true
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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yaxis: {
        title: {
          text: 'Number of Leads'
        }
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (value) => `${value} leads`
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right'
      }
    }
  };

  return (
    <MainCard title="Lead Acquisition Trends">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            defaultValue="monthly"
            size="small"
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height={350}
          />
        </Grid>
      </Grid>
    </MainCard>
  );
};

LeadTrends.propTypes = {
  isLoading: PropTypes.bool
};

export default LeadTrends;