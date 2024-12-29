
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  MenuItem
} from '@mui/material';
import { useState } from 'react';

const ConnectAppDialog = ({ open, onClose, onConnect }) => {
  const [values, setValues] = useState({
    app: '',
    environment: 'production',
    apiKey: '',
    webhookUrl: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (event) => {
    setValues({ ...values, [field]: event.target.value });
    setErrors({ ...errors, [field]: '' });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!values.app) newErrors.app = 'Please select an app';
    if (!values.apiKey.trim()) newErrors.apiKey = 'API key is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onConnect(values);
    handleReset();
  };

  const handleReset = () => {
    setValues({
      app: '',
      environment: 'production',
      apiKey: '',
      webhookUrl: ''
    });
    setErrors({});
  };

  return (
    <Dialog 
      open={open} 
      onClose={() => {
        onClose();
        handleReset();
      }}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Connect New App</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              select
              label="Select App"
              fullWidth
              value={values.app}
              onChange={handleChange('app')}
              error={Boolean(errors.app)}
              helperText={errors.app}
            >
              <MenuItem value="salesforce">Salesforce</MenuItem>
              <MenuItem value="mailgun">Mailgun</MenuItem>
              <MenuItem value="google_analytics">Google Analytics</MenuItem>
              <MenuItem value="zapier">Zapier</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Environment"
              fullWidth
              value={values.environment}
              onChange={handleChange('environment')}
            >
              <MenuItem value="production">Production</MenuItem>
              <MenuItem value="sandbox">Sandbox</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="API Key"
              fullWidth
              value={values.apiKey}
              onChange={handleChange('apiKey')}
              error={Boolean(errors.apiKey)}
              helperText={errors.apiKey}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Webhook URL (Optional)"
              fullWidth
              value={values.webhookUrl}
              onChange={handleChange('webhookUrl')}
              placeholder="https://"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Connect App
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ConnectAppDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConnect: PropTypes.func.isRequired
};

export default ConnectAppDialog;
