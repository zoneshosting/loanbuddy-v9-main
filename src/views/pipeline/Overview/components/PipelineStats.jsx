import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { IconArrowUpRight, IconCurrencyDollar, IconPercentage } from '@tabler/icons-react';

const StatCard = ({ title, value, icon: Icon, trend }) => (
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
          {trend}% from last period
        </Typography>
      </Box>
    )}
  </Paper>
);

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.elementType.isRequired,
  trend: PropTypes.number
};

const PipelineStats = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Total Pipeline Value"
          value="$24.5M"
          icon={IconCurrencyDollar}
          trend={15}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Average Loan Size"
          value="$325K"
          icon={IconCurrencyDollar}
          trend={8}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Conversion Rate"
          value="32%"
          icon={IconPercentage}
          trend={12}
        />
      </Grid>
    </Grid>
  );
};

export default PipelineStats;