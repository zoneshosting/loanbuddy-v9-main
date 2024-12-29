
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import TemplateList from './components/TemplateList';
import TemplateFilters from './components/TemplateFilters';
import CreateTemplateDialog from './components/CreateTemplateDialog';
import EditTemplateDialog from './components/EditTemplateDialog';

const Templates = () => {
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [filters, setFilters] = useState({
    type: 'all',
    category: 'all'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleCreateTemplate = (templateData) => {
    console.log('Creating template:', templateData);
    setOpenCreateDialog(false);
  };

  const handleEditTemplate = (templateData) => {
    console.log('Updating template:', templateData);
    setOpenEditDialog(false);
    setSelectedTemplate(null);
  };

  const handleEditClick = (template) => {
    setSelectedTemplate(template);
    setOpenEditDialog(true);
  };

  return (
    <MainCard title="Message Templates">
      <Typography variant="body2" gutterBottom>
        Create and manage templates for your email and SMS campaigns. Standardize your messaging and save time with reusable templates.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TemplateFilters 
            filters={filters} 
            onFilterChange={handleFilterChange}
            onCreateClick={() => setOpenCreateDialog(true)}
          />
        </Grid>
        <Grid item xs={12}>
          <TemplateList 
            filters={filters} 
            onEditClick={handleEditClick}
          />
        </Grid>
      </Grid>

      <CreateTemplateDialog
        open={openCreateDialog}
        onClose={() => setOpenCreateDialog(false)}
        onSubmit={handleCreateTemplate}
      />

      {selectedTemplate && (
        <EditTemplateDialog
          open={openEditDialog}
          template={selectedTemplate}
          onClose={() => {
            setOpenEditDialog(false);
            setSelectedTemplate(null);
          }}
          onSubmit={handleEditTemplate}
        />
      )}
    </MainCard>
  );
};

export default Templates;
