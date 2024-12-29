
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import ReportFilters from './components/ReportFilters';
import LeadMetrics from './components/LeadMetrics';
import LeadSourceChart from './components/LeadSourceChart';
import ConversionChart from './components/ConversionChart';
import LeadStatusTable from './components/LeadStatusTable';

const LeadReports = () => {
  const [filters, setFilters] = useState({
    dateRange: 'month',
    source: 'all',
    agent: 'all'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <MainCard title="Lead Reports">
      <Typography variant="body2" gutterBottom>
        Analyze lead performance metrics, conversion rates, and source effectiveness. Make data-driven decisions to optimize your lead generation strategy.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ReportFilters filters={filters} onFilterChange={handleFilterChange} />
        </Grid>
        <Grid item xs={12}>
          <LeadMetrics filters={filters} />
        </Grid>
        <Grid item xs={12} md={6}>
          <LeadSourceChart filters={filters} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ConversionChart filters={filters} />
        </Grid>
        <Grid item xs={12}>
          <LeadStatusTable filters={filters} />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default LeadReports;
