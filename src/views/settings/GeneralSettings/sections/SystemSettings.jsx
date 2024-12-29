
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  MenuItem,
  FormControlLabel,
  Switch,
  Button,
  Box,
  Divider
} from '@mui/material';

const SystemSettings = ({ onSave, saving }) => {
  const [values, setValues] = useState({
    defaultLeadStatus: 'new',
    defaultLoanType: 'conventional',
    autoAssignment: true,
    taskReminders: true,
    documentExpiry: 30,
    sessionTimeout: 60
  });

  const handleChange = (field) => (event) => {
    setValues({ 
      ...values, 
      [field]: field.includes('auto') || field.includes('task') 
        ? event.target.checked 
        : event.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave('system', values);
  };

  return (
    <Card>
      <CardHeader title="System Preferences" />
      <Divider />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Default Lead Status"
                value={values.defaultLeadStatus}
                onChange={handleChange('defaultLeadStatus')}
              >
                <MenuItem value="new">New</MenuItem>
                <MenuItem value="contacted">Contacted</MenuItem>
                <MenuItem value="qualified">Qualified</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Default Loan Type"
                value={values.defaultLoanType}
                onChange={handleChange('defaultLoanType')}
              >
                <MenuItem value="conventional">Conventional</MenuItem>
                <MenuItem value="fha">FHA</MenuItem>
                <MenuItem value="va">VA</MenuItem>
                <MenuItem value="jumbo">Jumbo</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Document Expiry (days)"
                value={values.documentExpiry}
                onChange={handleChange('documentExpiry')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Session Timeout (minutes)"
                value={values.sessionTimeout}
                onChange={handleChange('sessionTimeout')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.autoAssignment}
                    onChange={handleChange('autoAssignment')}
                  />
                }
                label="Enable Auto Lead Assignment"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.taskReminders}
                    onChange={handleChange('taskReminders')}
                  />
                }
                label="Enable Task Reminders"
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

SystemSettings.propTypes = {
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default SystemSettings;
