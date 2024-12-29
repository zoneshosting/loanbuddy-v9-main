
import { Grid, Paper, Typography, Box } from '@mui/material';
import { IconCalendarEvent, IconCalendarTime, IconCalendarDue } from '@tabler/icons-react';

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

const CalendarStats = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Today's Events"
          value="8"
          subtitle="Tasks and appointments"
          icon={IconCalendarEvent}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Upcoming Events"
          value="24"
          subtitle="Next 7 days"
          icon={IconCalendarTime}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Due Tasks"
          value="12"
          subtitle="This week"
          icon={IconCalendarDue}
        />
      </Grid>
    </Grid>
  );
};

export default CalendarStats;
