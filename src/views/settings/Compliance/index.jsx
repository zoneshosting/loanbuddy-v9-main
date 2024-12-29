
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import PrivacySettings from './sections/PrivacySettings';
import SecuritySettings from './sections/SecuritySettings';
import ComplianceReports from './sections/ComplianceReports';

const Compliance = () => {
  const [saving, setSaving] = useState(false);

  const handleSave = async (section, values) => {
    setSaving(true);
    try {
      // TODO: Implement settings update API call
      console.log('Saving compliance settings:', section, values);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    } catch (error) {
      console.error('Error saving settings:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <MainCard title="Compliance Settings">
      <Typography variant="body2" gutterBottom>
        Configure privacy, security, and compliance settings. Ensure adherence to regulatory requirements and industry standards.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <PrivacySettings onSave={handleSave} saving={saving} />
        </Grid>
        <Grid item xs={12}>
          <SecuritySettings onSave={handleSave} saving={saving} />
        </Grid>
        <Grid item xs={12}>
          <ComplianceReports onSave={handleSave} saving={saving} />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Compliance;
