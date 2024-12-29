
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SourcesList from './components/SourcesList';
import AddSourceDialog from './components/AddSourceDialog';
import SourceStats from './components/SourceStats';

const LeadSources = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [sources, setSources] = useState([
    { id: 1, name: 'Website Form', active: true, totalLeads: 145, conversionRate: 23 },
    { id: 2, name: 'Referral Program', active: true, totalLeads: 89, conversionRate: 35 },
    { id: 3, name: 'Social Media', active: true, totalLeads: 67, conversionRate: 18 },
    { id: 4, name: 'Email Campaign', active: false, totalLeads: 42, conversionRate: 15 }
  ]);

  const handleAddSource = (newSource) => {
    setSources([...sources, { ...newSource, id: sources.length + 1 }]);
    setOpenDialog(false);
  };

  const handleToggleStatus = (sourceId) => {
    setSources(sources.map(source => 
      source.id === sourceId 
        ? { ...source, active: !source.active }
        : source
    ));
  };

  const handleDeleteSource = (sourceId) => {
    setSources(sources.filter(source => source.id !== sourceId));
  };

  return (
    <MainCard title="Lead Sources">
      <Typography variant="body2" gutterBottom>
        Manage your lead sources and track their performance. Add new sources, monitor conversion rates, and optimize your lead generation channels.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SourceStats sources={sources} />
        </Grid>
        
        <Grid item xs={12}>
          <SourcesList 
            sources={sources}
            onAddClick={() => setOpenDialog(true)}
            onToggleStatus={handleToggleStatus}
            onDelete={handleDeleteSource}
          />
        </Grid>
      </Grid>

      <AddSourceDialog 
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onAdd={handleAddSource}
      />
    </MainCard>
  );
};

export default LeadSources;
