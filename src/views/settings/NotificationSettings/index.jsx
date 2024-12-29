
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import EmailNotifications from './sections/EmailNotifications';
import SmsNotifications from './sections/SmsNotifications';
import SystemNotifications from './sections/SystemNotifications';

const NotificationSettings = () => {
  const [saving, setSaving] = useState(false);

  const handleSave = async (section, values) => {
    setSaving(true);
    try {
      // TODO: Implement settings update API call
      console.log('Saving notification settings:', section, values);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    } catch (error) {
      console.error('Error saving settings:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <MainCard title="Notification Settings">
      <Typography variant="body2" gutterBottom>
        Configure notification preferences for email, SMS, and system alerts. Customize how you receive updates and alerts.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <EmailNotifications onSave={handleSave} saving={saving} />
        </Grid>
        <Grid item xs={12}>
          <SmsNotifications onSave={handleSave} saving={saving} />
        </Grid>
        <Grid item xs={12}>
          <SystemNotifications onSave={handleSave} saving={saving} />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default NotificationSettings;
