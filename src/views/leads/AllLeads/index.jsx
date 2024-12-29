import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import LeadList from './LeadList';
import LeadFilters from './LeadFilters';
import { Typography } from '@mui/material';

const AllLeads = () => {
  const [filters, setFilters] = useState({
    status: 'all',
    source: 'all',
    dateRange: 'all'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <MainCard title="All Leads">
      <Typography variant="body2" gutterBottom>
        View and manage all leads in the system. Filter, sort, and take actions on your leads.
      </Typography>
      <LeadFilters filters={filters} onFilterChange={handleFilterChange} />
      <LeadList filters={filters} />
    </MainCard>
  );
};

export default AllLeads;