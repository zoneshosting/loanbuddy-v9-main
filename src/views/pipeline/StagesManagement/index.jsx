
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import StagesList from './components/StagesList';
import AddStageDialog from './components/AddStageDialog';

const StagesManagement = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [stages, setStages] = useState([
    { id: 1, name: 'Application', description: 'Initial loan application', order: 1, active: true },
    { id: 2, name: 'Processing', description: 'Document collection and review', order: 2, active: true },
    { id: 3, name: 'Underwriting', description: 'Risk assessment and evaluation', order: 3, active: true },
    { id: 4, name: 'Conditional Approval', description: 'Pending final conditions', order: 4, active: true },
    { id: 5, name: 'Clear to Close', description: 'Final approval stage', order: 5, active: true },
    { id: 6, name: 'Closed', description: 'Loan has been funded', order: 6, active: true }
  ]);

  const handleAddStage = (newStage) => {
    setStages([...stages, { ...newStage, id: stages.length + 1, order: stages.length + 1 }]);
    setOpenDialog(false);
  };

  const handleUpdateStage = (updatedStage) => {
    setStages(stages.map(stage => 
      stage.id === updatedStage.id ? updatedStage : stage
    ));
  };

  const handleDeleteStage = (stageId) => {
    setStages(stages.filter(stage => stage.id !== stageId));
  };

  return (
    <MainCard title="Pipeline Stages Management">
      <Typography variant="body2" gutterBottom>
        Configure and manage your pipeline stages. Define the workflow for your mortgage process.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StagesList 
            stages={stages}
            onAddClick={() => setOpenDialog(true)}
            onUpdate={handleUpdateStage}
            onDelete={handleDeleteStage}
          />
        </Grid>
      </Grid>

      <AddStageDialog 
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onAdd={handleAddStage}
      />
    </MainCard>
  );
};

export default StagesManagement;
