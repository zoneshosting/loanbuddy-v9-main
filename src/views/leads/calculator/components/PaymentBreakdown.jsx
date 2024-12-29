import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SubCard from 'ui-component/cards/SubCard';
import Chart from 'react-apexcharts';
import { formatCurrency } from '../utils/formatters';

const PaymentBreakdown = ({ payment }) => {
  const theme = useTheme();

  const chartData = {
    series: [
      payment.monthlyPI,
      payment.monthlyTax,
      payment.monthlyInsurance,
      payment.monthlyPMI
    ],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Principal & Interest', 'Property Tax', 'Insurance', 'PMI'],
      colors: [
        theme.palette.primary.main,
        theme.palette.secondary.main,
        theme.palette.success.main,
        theme.palette.warning.main
      ],
      legend: {
        show: true,
        position: 'bottom'
      }
    }
  };

  return (
    <SubCard title="Monthly Payment Breakdown">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="donut"
            height={300}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3" color="primary">
                Total Monthly Payment: {formatCurrency(payment.totalMonthly)}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Principal & Interest: {formatCurrency(payment.monthlyPI)}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Property Tax: {formatCurrency(payment.monthlyTax)}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Insurance: {formatCurrency(payment.monthlyInsurance)}
              </Typography>
            </Grid>
            {payment.monthlyPMI > 0 && (
              <Grid item xs={12}>
                <Typography variant="body1">
                  PMI: {formatCurrency(payment.monthlyPMI)}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </SubCard>
  );
};

export default PaymentBreakdown;
