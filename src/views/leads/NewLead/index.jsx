import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import LeadForm from './LeadForm';
import { useNavigate } from 'react-router-dom';

const NewLead = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (leadData) => {
    setIsSubmitting(true);
    try {
      // TODO: Implement API call to save lead
      console.log('Saving lead:', leadData);
      navigate('/leads/all');
    } catch (error) {
      console.error('Error saving lead:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainCard title="Add New Lead">
      <Typography variant="body2" gutterBottom>
        Add a new lead manually by filling out the form below. All fields marked with * are required.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <LeadForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default NewLead;