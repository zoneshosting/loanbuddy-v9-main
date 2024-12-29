
import PropTypes from 'prop-types';
import { Paper, Typography, Box } from '@mui/material';

const StatCard = ({ title, value, subtitle, icon: Icon, trend }) => (
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
    <Typography variant="body2" component="div" color="textSecondary">
      {subtitle}
    </Typography>
    {trend && (
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, color: 'success.main' }}>
        <Typography variant="caption" component="div">
          {trend}% from previous period
        </Typography>
      </Box>
    )}
  </Paper>
);

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  trend: PropTypes.number
};

export default StatCard;
