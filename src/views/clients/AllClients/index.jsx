
import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import ClientList from './components/ClientList';
import ClientFilters from './components/ClientFilters';
import { Typography } from '@mui/material';

const AllClients = () => {
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    dateRange: 'all'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <MainCard title="All Clients">
      <Typography variant="body2" gutterBottom>
        View and manage all your mortgage clients. Filter, sort, and access client details.
      </Typography>
      <ClientFilters filters={filters} onFilterChange={handleFilterChange} />
      <ClientList filters={filters} />
    </MainCard>
  );
};

export default AllClients;
