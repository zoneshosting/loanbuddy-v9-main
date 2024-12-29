import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import PipelineStats from './components/PipelineStats';
import PipelineStages from './components/PipelineStages';
import PipelineFilters from './components/PipelineFilters';

const Overview = () => {
  const [filters, setFilters] = useState({
    dateRange: 'month',
    loanType: 'all',
    agent: 'all'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <MainCard title="Pipeline Overview">
      <Typography variant="body2" gutterBottom component="div">
        Track your mortgage pipeline progress and monitor deals across different stages.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <PipelineFilters filters={filters} onFilterChange={handleFilterChange} />
        </Grid>
        <Grid item xs={12}>
          <PipelineStats filters={filters} />
        </Grid>
        <Grid item xs={12}>
          <PipelineStages filters={filters} />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Overview;