import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import { IconStars } from '@tabler/icons-react';

const LeadQualityScore = ({ isLoading }) => {
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
                bgcolor: theme.palette.secondary.light,
                color: theme.palette.secondary.dark
              }}
            >
              <IconStars stroke={1.5} size="1.3rem" />
            </Avatar>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="h3">8.7</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">Avg. Lead Quality Score</Typography>
          </Grid>
        </Grid>
      </Box>
    </MainCard>
  );
};

LeadQualityScore.propTypes = {
  isLoading: PropTypes.bool
};

export default LeadQualityScore;