import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import CampaignList from './components/CampaignList';
import CampaignStats from './components/CampaignStats';
import CampaignFilters from './components/CampaignFilters';
import CreateCampaignDialog from './components/CreateCampaignDialog';

const EmailCampaigns = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    dateRange: 'month'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleCreateCampaign = (campaignData) => {
    console.log('Creating campaign:', campaignData);
    setOpenDialog(false);
  };

  return (
    <MainCard title="Email Campaigns">
      <Typography variant="body2" gutterBottom>
        Create and manage email marketing campaigns for your mortgage leads. Track performance and engagement metrics.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CampaignStats />
        </Grid>
        <Grid item xs={12}>
          <CampaignFilters 
            filters={filters} 
            onFilterChange={handleFilterChange}
            onCreateClick={() => setOpenDialog(true)}
          />
        </Grid>
        <Grid item xs={12}>
          <CampaignList filters={filters} />
        </Grid>
      </Grid>

      <CreateCampaignDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmit={handleCreateCampaign}
      />
    </MainCard>
  );
};

export default EmailCampaigns;