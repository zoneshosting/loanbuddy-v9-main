
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import CompanySettings from './sections/CompanySettings';
import SystemSettings from './sections/SystemSettings';
import LocalizationSettings from './sections/LocalizationSettings';

const GeneralSettings = () => {
  const [saving, setSaving] = useState(false);

  const handleSave = async (section, values) => {
    setSaving(true);
    try {
      // TODO: Implement settings update API call
      console.log('Saving settings:', section, values);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    } catch (error) {
      console.error('Error saving settings:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <MainCard title="General Settings">
      <Typography variant="body2" gutterBottom>
        Configure general system settings including company information, system preferences, and localization options.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CompanySettings onSave={handleSave} saving={saving} />
        </Grid>
        <Grid item xs={12}>
          <SystemSettings onSave={handleSave} saving={saving} />
        </Grid>
        <Grid item xs={12}>
          <LocalizationSettings onSave={handleSave} saving={saving} />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default GeneralSettings;
