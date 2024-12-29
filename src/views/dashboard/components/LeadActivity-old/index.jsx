import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { 
  Avatar,
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography 
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { IconPhone, IconMail, IconNotes } from '@tabler/icons-react';

const activities = [
  {
    type: 'call',
    icon: IconPhone,
    title: 'Call with John Smith',
    description: 'Discussed loan requirements and income verification',
    time: '10 minutes ago',
    status: 'completed'
  },
  {
    type: 'email',
    icon: IconMail,
    title: 'Email to Sarah Johnson',
    description: 'Sent pre-approval documentation',
    time: '1 hour ago',
    status: 'completed'
  },
  {
    type: 'note',
    icon: IconNotes,
    title: 'Added note for Mike Brown',
    description: 'Needs to provide additional employment history',
    time: '2 hours ago',
    status: 'pending'
  },
  {
    type: 'call',
    icon: IconPhone,
    title: 'Missed call from David Wilson',
    description: 'Attempted follow-up on application status',
    time: '3 hours ago',
    status: 'pending'
  }
];

const LeadActivity = ({ isLoading }) => {
  const theme = useTheme();

  return (
    <MainCard title="Recent Lead Activity">
      <List>
        {activities.map((activity, index) => (
          <Box key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: 
                      activity.type === 'call' 
                        ? 'primary.light'
                        : activity.type === 'email'
                        ? 'success.light'
                        : 'warning.light',
                    color:
                      activity.type === 'call'
                        ? 'primary.dark'
                        : activity.type === 'email'
                        ? 'success.dark'
                        : 'warning.dark'
                  }}
                >
                  <activity.icon stroke={1.5} size="1.3rem" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={activity.title}
                secondary={
                  <Box component="span">
                    <Typography 
                      component="span" 
                      variant="body2" 
                      color="textSecondary"
                      display="block"
                    >
                      {activity.description}
                    </Typography>
                    <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography 
                        component="span" 
                        variant="caption" 
                        color="textSecondary"
                      >
                        {activity.time}
                      </Typography>
                      <Chip
                        label={activity.status}
                        size="small"
                        color={activity.status === 'completed' ? 'success' : 'warning'}
                      />
                    </Box>
                  </Box>
                }
              />
            </ListItem>
            {index < activities.length - 1 && <Divider variant="inset" component="li" />}
          </Box>
        ))}
      </List>
    </MainCard>
  );
};

LeadActivity.propTypes = {
  isLoading: PropTypes.bool
};

export default LeadActivity;