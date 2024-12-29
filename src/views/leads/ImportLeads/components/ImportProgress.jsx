
import PropTypes from 'prop-types';
import { Box, LinearProgress, Typography } from '@mui/material';

const ImportProgress = ({ progress }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(progress)}%`}</Typography>
        </Box>
      </Box>
      <Typography variant="caption" color="text.secondary">
        Importing leads... Please wait
      </Typography>
    </Box>
  );
};

ImportProgress.propTypes = {
  progress: PropTypes.number.isRequired
};

export default ImportProgress;
