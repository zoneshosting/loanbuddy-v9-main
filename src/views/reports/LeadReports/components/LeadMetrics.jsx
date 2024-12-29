
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { IconUsers, IconArrowUpRight, IconPercentage, IconCurrencyDollar } from '@tabler/icons-react';

const MetricCard = ({ title, value, trend, icon: Icon }) => (
  <Paper sx={{ p: 2 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4">
          {value}
        </Typography>
      </Box>
      <Box sx={{ color: 'primary.main' }}>
        <Icon size={48} stroke={1} />
      </Box>
    </Box>
    {trend && (
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, color: 'success.main' }}>
        <IconArrowUpRight size="1rem" />
        <Typography variant="caption" sx={{ ml: 0.5 }}>
          {trend}% from previous period
        </Typography>
      </Box>
    )}
  </Paper>
);

MetricCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  trend: PropTypes.number,
  icon: PropTypes.elementType.isRequired
};

const LeadMetrics = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <MetricCard
          title="Total Leads"
          value="2,547"
          trend={12}
          icon={IconUsers}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <MetricCard
          title="Conversion Rate"
          value="24.8%"
          trend={8}
          icon={IconPercentage}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <MetricCard
          title="Avg. Lead Value"
          value="$325"
          trend={15}
          icon={IconCurrencyDollar}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <MetricCard
          title="Qualified Leads"
          value="865"
          trend={5}
          icon={IconUsers}
        />
      </Grid>
    </Grid>
  );
};

LeadMetrics.propTypes = {
  filters: PropTypes.object.isRequired
};

export default LeadMetrics;
