
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
  TextField
} from '@mui/material';

const SmsNotifications = ({ onSave, saving }) => {
  const [values, setValues] = useState({
    leadAlerts: true,
    applicationAlerts: true,
    taskReminders: false,
    phoneNumber: '',
    dailyLimit: 10
  });

  const handleChange = (field) => (event) => {
    setValues({ 
      ...values, 
      [field]: field === 'phoneNumber' || field === 'dailyLimit'
        ? event.target.value
        : event.target.checked 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave('sms', values);
  };

  return (
    <Card>
      <CardHeader title="SMS Notifications" />
      <Divider />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.leadAlerts}
                    onChange={handleChange('leadAlerts')}
                  />
                }
                label="New Lead Alerts"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.applicationAlerts}
                    onChange={handleChange('applicationAlerts')}
                  />
                }
                label="Application Status Alerts"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.taskReminders}
                    onChange={handleChange('taskReminders')}
                  />
                }
                label="Task Reminders via SMS"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                value={values.phoneNumber}
                onChange={handleChange('phoneNumber')}
                placeholder="(555) 123-4567"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Daily SMS Limit"
                value={values.dailyLimit}
                onChange={handleChange('dailyLimit')}
                InputProps={{ inputProps: { min: 0, max: 100 } }}
              />
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

SmsNotifications.propTypes = {
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default SmsNotifications;
