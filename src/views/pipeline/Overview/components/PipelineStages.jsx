import PropTypes from 'prop-types';
import { Paper, Box, Typography, LinearProgress } from '@mui/material';

const stages = [
  { id: 1, name: 'Application', count: 45, value: 2450000, progress: 100 },
  { id: 2, name: 'Processing', count: 32, value: 1850000, progress: 75 },
  { id: 3, name: 'Underwriting', count: 28, value: 1620000, progress: 60 },
  { id: 4, name: 'Conditional Approval', count: 20, value: 1250000, progress: 45 },
  { id: 5, name: 'Clear to Close', count: 15, value: 980000, progress: 30 },
  { id: 6, name: 'Closed', count: 12, value: 750000, progress: 15 }
];

const StageRow = ({ stage }) => (
  <Box sx={{ mb: 3 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
      <Typography variant="subtitle1">{stage.name}</Typography>
      <Box sx={{ textAlign: 'right' }}>
        <Typography variant="subtitle2" color="primary">
          {stage.count} Loans
        </Typography>
        <Typography variant="body2" color="textSecondary">
          ${(stage.value / 1000000).toFixed(1)}M
        </Typography>
      </Box>
    </Box>
    <LinearProgress 
      variant="determinate" 
      value={stage.progress} 
      sx={{ height: 8, borderRadius: 1 }}
    />
  </Box>
);

StageRow.propTypes = {
  stage: PropTypes.shape({
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired
  }).isRequired
};

const PipelineStages = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Pipeline Stages
      </Typography>
      {stages.map((stage) => (
        <StageRow key={stage.id} stage={stage} />
      ))}
    </Paper>
  );
};

export default PipelineStages;
