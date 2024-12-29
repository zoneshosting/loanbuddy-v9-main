
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  Button,
  Box,
  Divider
} from '@mui/material';

const CompanySettings = ({ onSave, saving }) => {
  const [values, setValues] = useState({
    companyName: 'LoanBuddy Inc.',
    address: '123 Main St, Suite 100',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105',
    phone: '(555) 123-4567',
    email: 'contact@loanbuddy.com',
    website: 'www.loanbuddy.com'
  });

  const handleChange = (field) => (event) => {
    setValues({ ...values, [field]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave('company', values);
  };

  return (
    <Card>
      <CardHeader title="Company Information" />
      <Divider />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Company Name"
                value={values.companyName}
                onChange={handleChange('companyName')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                value={values.address}
                onChange={handleChange('address')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="City"
                value={values.city}
                onChange={handleChange('city')}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="State"
                value={values.state}
                onChange={handleChange('state')}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="ZIP Code"
                value={values.zipCode}
                onChange={handleChange('zipCode')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                value={values.phone}
                onChange={handleChange('phone')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange('email')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Website"
                value={values.website}
                onChange={handleChange('website')}
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

CompanySettings.propTypes = {
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default CompanySettings;
