
import PropTypes from 'prop-types';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import { IconDotsVertical, IconBrandSalesforce, IconBrandMailgun, IconBrandGoogle } from '@tabler/icons-react';
import { useState } from 'react';

const getAppIcon = (appId) => {
  switch (appId) {
    case 'salesforce':
      return IconBrandSalesforce;
    case 'mailgun':
      return IconBrandMailgun;
    case 'google':
      return IconBrandGoogle;
    default:
      return IconBrandSalesforce;
  }
};

const AppCard = ({ app, onConnect, onDisconnect }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const Icon = getAppIcon(app.id);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card>
      <CardContent>
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
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6">{app.name}</Typography>
            <Typography variant="caption" color="textSecondary">
              {app.category}
            </Typography>
          </Box>
          <IconButton size="small" onClick={handleMenuOpen}>
            <IconDotsVertical size="1.1rem" />
          </IconButton>
        </Box>
        
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          {app.description}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Chip 
            label={app.status} 
            color={app.status === 'connected' ? 'success' : 'default'}
            size="small"
          />
          {app.status === 'connected' && (
            <Chip 
              label={`${app.usage} API calls`}
              variant="outlined"
              size="small"
            />
          )}
        </Box>
      </CardContent>
      <CardActions>
        {app.status === 'connected' ? (
          <Button 
            size="small" 
            color="error"
            onClick={() => onDisconnect(app.id)}
          >
            Disconnect
          </Button>
        ) : (
          <Button 
            size="small" 
            variant="contained"
            onClick={() => onConnect(app.id)}
          >
            Connect
          </Button>
        )}
        <Button size="small">View Details</Button>
      </CardActions>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
        <MenuItem onClick={handleMenuClose}>View Logs</MenuItem>
        <MenuItem onClick={handleMenuClose}>Documentation</MenuItem>
      </Menu>
    </Card>
  );
};

AppCard.propTypes = {
  app: PropTypes.object.isRequired,
  onConnect: PropTypes.func.isRequired,
  onDisconnect: PropTypes.func.isRequired
};

const AppList = ({ filters }) => {
  // Mock data - replace with actual apps
  const apps = [
    {
      id: 'salesforce',
      name: 'Salesforce',
      category: 'CRM',
      description: 'Sync leads and contacts with Salesforce CRM',
      status: 'connected',
      usage: '1.2K'
    },
    {
      id: 'mailgun',
      name: 'Mailgun',
      category: 'Communication',
      description: 'Send automated emails through Mailgun',
      status: 'connected',
      usage: '850'
    },
    {
      id: 'google',
      name: 'Google Analytics',
      category: 'Analytics',
      description: 'Track website traffic and user behavior',
      status: 'disconnected',
      usage: '0'
    }
  ];

  const handleConnect = (appId) => {
    console.log('Connecting app:', appId);
  };

  const handleDisconnect = (appId) => {
    console.log('Disconnecting app:', appId);
  };

  return (
    <Grid container spacing={3}>
      {apps.map((app) => (
        <Grid item xs={12} sm={6} md={4} key={app.id}>
          <AppCard 
            app={app}
            onConnect={handleConnect}
            onDisconnect={handleDisconnect}
          />
        </Grid>
      ))}
    </Grid>
  );
};

AppList.propTypes = {
  filters: PropTypes.object.isRequired
};

export default AppList;
