import { Grid, Paper, Typography, Box } from '@mui/material';
import { IconMessage, IconUsers, IconMessageDots } from '@tabler/icons-react';

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

const CampaignStats = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Messages Sent"
          value="5,842"
          subtitle="Last 30 days"
          icon={IconMessage}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Delivery Rate"
          value="98.5%"
          subtitle="Industry avg: 97%"
          icon={IconUsers}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Response Rate"
          value="12.8%"
          subtitle="Industry avg: 8.5%"
          icon={IconMessageDots}
        />
      </Grid>
    </Grid>
  );
};

export default CampaignStats;