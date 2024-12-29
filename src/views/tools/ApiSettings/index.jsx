
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import ApiKeys from './components/ApiKeys';
import WebhookSettings from './components/WebhookSettings';
import ApiUsage from './components/ApiUsage';
import ApiLogs from './components/ApiLogs';

const ApiSettings = () => {
  const [refreshData, setRefreshData] = useState(false);

  const handleDataRefresh = () => {
    setRefreshData(prev => !prev);
  };

  return (
    <MainCard title="API Settings">
      <Typography variant="body2" gutterBottom>
        Manage your API keys, webhooks, and monitor API usage. Configure integrations with third-party services.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ApiKeys onUpdate={handleDataRefresh} />
        </Grid>
        <Grid item xs={12} md={6}>
          <WebhookSettings onUpdate={handleDataRefresh} />
        </Grid>
        <Grid item xs={12}>
          <ApiUsage refresh={refreshData} />
        </Grid>
        <Grid item xs={12}>
          <ApiLogs refresh={refreshData} />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default ApiSettings;
