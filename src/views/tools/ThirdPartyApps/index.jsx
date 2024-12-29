
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import AppList from './components/AppList';
import AppFilters from './components/AppFilters';
import ConnectAppDialog from './components/ConnectAppDialog';
import AppStats from './components/AppStats';

const ThirdPartyApps = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    status: 'all'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleConnect = (appData) => {
    console.log('Connecting app:', appData);
    setOpenDialog(false);
  };

  return (
    <MainCard title="Third-Party Apps">
      <Typography variant="body2" gutterBottom>
        Connect and manage integrations with third-party applications. Configure settings and monitor app usage.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AppStats />
        </Grid>
        <Grid item xs={12}>
          <AppFilters 
            filters={filters} 
            onFilterChange={handleFilterChange}
            onConnectClick={() => setOpenDialog(true)}
          />
        </Grid>
        <Grid item xs={12}>
          <AppList filters={filters} />
        </Grid>
      </Grid>

      <ConnectAppDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onConnect={handleConnect}
      />
    </MainCard>
  );
};

export default ThirdPartyApps;
