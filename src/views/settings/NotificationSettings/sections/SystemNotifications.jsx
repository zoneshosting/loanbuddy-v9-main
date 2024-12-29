
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  FormControlLabel,
  Switch,
  Button,
  Box,
  Divider,
  TextField,
  MenuItem
} from '@mui/material';

const SystemNotifications = ({ onSave, saving }) => {
  const [values, setValues] = useState({
    browserNotifications: true,
    soundEnabled: true,
    desktopNotifications: false,
    notificationDuration: '5',
    priority: 'all'
  });

  const handleChange = (field) => (event) => {
    setValues({ 
      ...values, 
      [field]: field === 'notificationDuration' || field === 'priority'
        ? event.target.value
        : event.target.checked 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave('system', values);
  };

  return (
    <Card>
      <CardHeader title="System Notifications" />
      <Divider />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.browserNotifications}
                    onChange={handleChange('browserNotifications')}
                  />
                }
                label="Browser Notifications"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.soundEnabled}
                    onChange={handleChange('soundEnabled')}
                  />
                }
                label="Sound Notifications"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.desktopNotifications}
                    onChange={handleChange('desktopNotifications')}
                  />
                }
                label="Desktop Notifications"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Notification Duration"
                value={values.notificationDuration}
                onChange={handleChange('notificationDuration')}
              >
                <MenuItem value="3">3 seconds</MenuItem>
                <MenuItem value="5">5 seconds</MenuItem>
                <MenuItem value="10">10 seconds</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Priority Level"
                value={values.priority}
                onChange={handleChange('priority')}
              >
                <MenuItem value="all">All Notifications</MenuItem>
                <MenuItem value="high">High Priority Only</MenuItem>
                <MenuItem value="medium">Medium and High</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={saving}
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

SystemNotifications.propTypes = {
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default SystemNotifications;
