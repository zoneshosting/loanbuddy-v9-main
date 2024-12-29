
import { Grid, Paper, Typography, Box } from '@mui/material';
import { IconApps, IconPlugConnected, IconActivity } from '@tabler/icons-react';

const StatCard = ({ title, value, subtitle, icon: Icon }) => (
  <Paper sx={{ p: 2 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Box 
        sx={{ 
          p: 1.5, 
          borderRadius: 2, 
          bgcolor: 'primary.light',
          color: 'primary.dark',
          mr: 2 
        }}
      >
        <Icon size={24} />
      </Box>
      <Typography variant="h6">{title}</Typography>
    </Box>
    <Typography variant="h4" gutterBottom>{value}</Typography>
    <Typography variant="body2" color="textSecondary">{subtitle}</Typography>
  </Paper>
);

const AppStats = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Total Apps"
          value="12"
          subtitle="Available integrations"
          icon={IconApps}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Connected Apps"
          value="8"
          subtitle="Active integrations"
          icon={IconPlugConnected}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="API Calls"
          value="2.5K"
          subtitle="Last 30 days"
          icon={IconActivity}
        />
      </Grid>
    </Grid>
  );
};

export default AppStats;
