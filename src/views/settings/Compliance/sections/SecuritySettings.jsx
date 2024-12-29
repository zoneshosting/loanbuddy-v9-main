
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

const SecuritySettings = ({ onSave, saving }) => {
  const [values, setValues] = useState({
    twoFactorAuth: true,
    passwordExpiry: '90',
    passwordComplexity: 'high',
    sessionTimeout: '30',
    ipWhitelisting: false,
    auditLogging: true
  });

  const handleChange = (field) => (event) => {
    setValues({ 
      ...values, 
      [field]: field === 'twoFactorAuth' || field === 'ipWhitelisting' || field === 'auditLogging'
        ? event.target.checked 
        : event.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave('security', values);
  };

  return (
    <Card>
      <CardHeader title="Security Settings" />
      <Divider />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.twoFactorAuth}
                    onChange={handleChange('twoFactorAuth')}
                  />
                }
                label="Require Two-Factor Authentication"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Password Expiry"
                value={values.passwordExpiry}
                onChange={handleChange('passwordExpiry')}
              >
                <MenuItem value="30">30 days</MenuItem>
                <MenuItem value="60">60 days</MenuItem>
                <MenuItem value="90">90 days</MenuItem>
                <MenuItem value="180">180 days</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Password Complexity"
                value={values.passwordComplexity}
                onChange={handleChange('passwordComplexity')}
              >
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Session Timeout"
                value={values.sessionTimeout}
                onChange={handleChange('sessionTimeout')}
              >
                <MenuItem value="15">15 minutes</MenuItem>
                <MenuItem value="30">30 minutes</MenuItem>
                <MenuItem value="60">60 minutes</MenuItem>
                <MenuItem value="120">120 minutes</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.ipWhitelisting}
                    onChange={handleChange('ipWhitelisting')}
                  />
                }
                label="Enable IP Whitelisting"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.auditLogging}
                    onChange={handleChange('auditLogging')}
                  />
                }
                label="Enable Audit Logging"
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

SecuritySettings.propTypes = {
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default SecuritySettings;
