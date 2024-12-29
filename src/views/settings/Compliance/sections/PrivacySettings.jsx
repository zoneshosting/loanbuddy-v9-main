
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

const PrivacySettings = ({ onSave, saving }) => {
  const [values, setValues] = useState({
    dataRetention: '12',
    dataEncryption: true,
    anonymizeData: false,
    consentRequired: true,
    privacyPolicy: true,
    thirdPartySharing: false
  });

  const handleChange = (field) => (event) => {
    setValues({ 
      ...values, 
      [field]: field === 'dataRetention' ? event.target.value : event.target.checked 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave('privacy', values);
  };

  return (
    <Card>
      <CardHeader title="Privacy Settings" />
      <Divider />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Data Retention Period"
                value={values.dataRetention}
                onChange={handleChange('dataRetention')}
              >
                <MenuItem value="3">3 months</MenuItem>
                <MenuItem value="6">6 months</MenuItem>
                <MenuItem value="12">12 months</MenuItem>
                <MenuItem value="24">24 months</MenuItem>
                <MenuItem value="36">36 months</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.dataEncryption}
                    onChange={handleChange('dataEncryption')}
                  />
                }
                label="Enable Data Encryption"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.anonymizeData}
                    onChange={handleChange('anonymizeData')}
                  />
                }
                label="Anonymize Exported Data"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.consentRequired}
                    onChange={handleChange('consentRequired')}
                  />
                }
                label="Require User Consent for Data Collection"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.privacyPolicy}
                    onChange={handleChange('privacyPolicy')}
                  />
                }
                label="Display Privacy Policy Notice"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.thirdPartySharing}
                    onChange={handleChange('thirdPartySharing')}
                  />
                }
                label="Allow Third-Party Data Sharing"
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

PrivacySettings.propTypes = {
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default PrivacySettings;
