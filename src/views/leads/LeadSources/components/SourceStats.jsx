
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { IconUsers, IconArrowUpRight, IconSourceCode } from '@tabler/icons-react';

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
          {trend}% from last month
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

const SourceStats = ({ sources }) => {
  const activeSources = sources.filter(source => source.active).length;
  const totalLeads = sources.reduce((sum, source) => sum + source.totalLeads, 0);
  const avgConversion = Math.round(
    sources.reduce((sum, source) => sum + source.conversionRate, 0) / sources.length
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Active Sources"
          value={activeSources}
          icon={IconSourceCode}
          trend={12}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Total Leads"
          value={totalLeads}
          icon={IconUsers}
          trend={8}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Avg. Conversion Rate"
          value={`${avgConversion}%`}
          icon={IconArrowUpRight}
          trend={15}
        />
      </Grid>
    </Grid>
  );
};

SourceStats.propTypes = {
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool.isRequired,
      totalLeads: PropTypes.number.isRequired,
      conversionRate: PropTypes.number.isRequired
    })
  ).isRequired
};

export default SourceStats;
