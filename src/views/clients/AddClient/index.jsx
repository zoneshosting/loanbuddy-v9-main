
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import ClientForm from './components/ClientForm';
import { useNavigate } from 'react-router-dom';

const AddClient = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (clientData) => {
    setIsSubmitting(true);
    try {
      // TODO: Implement API call to save client
      console.log('Saving client:', clientData);
      navigate('/clients/all');
    } catch (error) {
      console.error('Error saving client:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainCard title="Add New Client">
      <Typography variant="body2" gutterBottom>
        Add a new mortgage client by filling out the form below. All fields marked with * are required.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ClientForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default AddClient;
