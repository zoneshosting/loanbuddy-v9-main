import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import { IconUsers } from '@tabler/icons-react';

const TotalLeads = ({ isLoading }) => {
  const theme = useTheme();

  if (isLoading) return <SkeletonEarningCard />;

  return (
    <MainCard>
      <Box>
        <Grid container alignItems="center">
          <Grid item>
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: theme.palette.primary.light,
                color: theme.palette.primary.dark
              }}
            >
              <IconUsers stroke={1.5} size="1.3rem" />
            </Avatar>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="h3">2,647</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">Total Mortgage Leads</Typography>
          </Grid>
        </Grid>
      </Box>
    </MainCard>
  );
};

TotalLeads.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalLeads;