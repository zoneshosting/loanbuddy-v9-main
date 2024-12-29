import { Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

const ActiveLoans = () => (
  <MainCard title="Active Loans">
    <Typography variant="body2">
      View and manage your active loans here. This section will show all current loans with their status, payment schedules, and actions.
    </Typography>
  </MainCard>
);

export default ActiveLoans;