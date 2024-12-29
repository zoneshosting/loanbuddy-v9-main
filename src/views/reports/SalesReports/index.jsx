
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import ReportFilters from './components/ReportFilters';
import SalesMetrics from './components/SalesMetrics';
import SalesTrendChart from './components/SalesTrendChart';
import LoanTypeChart from './components/LoanTypeChart';
import SalesTable from './components/SalesTable';

const SalesReports = () => {
  const [filters, setFilters] = useState({
    dateRange: 'month',
    loanType: 'all',
    agent: 'all'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <MainCard title="Sales Reports">
      <Typography variant="body2" gutterBottom>
        Track and analyze mortgage sales performance, loan types, and revenue metrics. Monitor team performance and identify growth opportunities.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ReportFilters filters={filters} onFilterChange={handleFilterChange} />
        </Grid>
        <Grid item xs={12}>
          <SalesMetrics filters={filters} />
        </Grid>
        <Grid item xs={12} md={8}>
          <SalesTrendChart filters={filters} />
        </Grid>
        <Grid item xs={12} md={4}>
          <LoanTypeChart filters={filters} />
        </Grid>
        <Grid item xs={12}>
          <SalesTable filters={filters} />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default SalesReports;
