
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import GettingStarted from './sections/GettingStarted';
import Features from './sections/Features';
import ApiDocs from './sections/ApiDocs';
import Faqs from './sections/Faqs';

const Documentation = () => {
  return (
    <MainCard title="Documentation">
      <Typography variant="body2" gutterBottom>
        Welcome to the LoanBuddy documentation. Here you'll find guides, tutorials, and reference materials to help you get the most out of the system.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <GettingStarted />
        </Grid>
        <Grid item xs={12}>
          <Features />
        </Grid>
        <Grid item xs={12}>
          <ApiDocs />
        </Grid>
        <Grid item xs={12}>
          <Faqs />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Documentation;
