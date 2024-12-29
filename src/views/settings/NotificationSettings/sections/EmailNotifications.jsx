
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

const EmailNotifications = ({ onSave, saving }) => {
  const [values, setValues] = useState({
    leadNotifications: true,
    applicationUpdates: true,
    taskReminders: true,
    marketingEmails: false,
    digestFrequency: 'daily',
    emailFormat: 'html'
  });

  const handleChange = (field) => (event) => {
    setValues({ 
      ...values, 
      [field]: field.includes('Frequency') || field.includes('Format')
        ? event.target.value
        : event.target.checked 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave('email', values);
  };

  return (
    <Card>
      <CardHeader title="Email Notifications" />
      <Divider />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.leadNotifications}
                    onChange={handleChange('leadNotifications')}
                  />
                }
                label="New Lead Notifications"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.applicationUpdates}
                    onChange={handleChange('applicationUpdates')}
                  />
                }
                label="Application Status Updates"
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
                label="Task Reminders"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.marketingEmails}
                    onChange={handleChange('marketingEmails')}
                  />
                }
                label="Marketing and Newsletter Emails"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Digest Frequency"
                value={values.digestFrequency}
                onChange={handleChange('digestFrequency')}
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Email Format"
                value={values.emailFormat}
                onChange={handleChange('emailFormat')}
              >
                <MenuItem value="html">HTML</MenuItem>
                <MenuItem value="text">Plain Text</MenuItem>
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

EmailNotifications.propTypes = {
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default EmailNotifications;
