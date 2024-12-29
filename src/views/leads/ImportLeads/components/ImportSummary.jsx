
import PropTypes from 'prop-types';
import { Box, Button, Typography, Paper } from '@mui/material';
import { IconFileImport } from '@tabler/icons-react';

const ImportSummary = ({ file, mappings, onImport, disabled }) => {
  const mappedFields = Object.values(mappings).filter(Boolean).length;

  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Import Summary
          </Typography>
          <Typography variant="body2" color="textSecondary">
            File: {file.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Mapped Fields: {mappedFields}
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<IconFileImport />}
          onClick={onImport}
          disabled={disabled}
        >
          Start Import
        </Button>
      </Box>
    </Paper>
  );
};

ImportSummary.propTypes = {
  file: PropTypes.object.isRequired,
  mappings: PropTypes.object.isRequired,
  onImport: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default ImportSummary;
