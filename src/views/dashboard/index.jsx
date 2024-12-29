import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

// Custom components
import KPICards from './components/KPICards';
import LeadStatusChart from './components/LeadStatusChart';
import LeadTrends from './components/LeadTrends';
import LeadActivity from './components/LeadActivity';
import LeadFilters from './components/LeadFilters';

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    dateRange: 'last30',
    leadSource: 'all',
    leadStatus: 'all',
    assignedAgent: 'all'
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <LeadFilters filters={filters} onFilterChange={handleFilterChange} />
      </Grid>
      
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <KPICards.TotalLeads isLoading={isLoading} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <KPICards.ActiveLeads isLoading={isLoading} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <KPICards.ConversionRate isLoading={isLoading} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <KPICards.LeadQualityScore isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <LeadTrends isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <LeadStatusChart isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <LeadActivity isLoading={isLoading} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;