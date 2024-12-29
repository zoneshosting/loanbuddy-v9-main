
import { Grid, Paper, Typography, Box } from '@mui/material';
import { IconUsers, IconUserCheck, IconUserX } from '@tabler/icons-react';

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

const UserStats = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Total Users"
          value="24"
          subtitle="Active and inactive users"
          icon={IconUsers}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Active Users"
          value="18"
          subtitle="Currently active"
          icon={IconUserCheck}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Inactive Users"
          value="6"
          subtitle="Deactivated accounts"
          icon={IconUserX}
        />
      </Grid>
    </Grid>
  );
};

export default UserStats;
