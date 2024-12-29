
import PropTypes from 'prop-types';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
  IconButton,
  Box
} from '@mui/material';
import { IconPlus, IconTrash } from '@tabler/icons-react';

const SourcesList = ({ sources, onAddClick, onToggleStatus, onDelete }) => {
  return (
    <Box>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          startIcon={<IconPlus />}
          onClick={onAddClick}
        >
          Add Source
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Source Name</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="right">Total Leads</TableCell>
              <TableCell align="right">Conversion Rate</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sources.map((source) => (
              <TableRow key={source.id}>
                <TableCell>{source.name}</TableCell>
                <TableCell align="center">
                  <Switch
                    checked={source.active}
                    onChange={() => onToggleStatus(source.id)}
                  />
                </TableCell>
                <TableCell align="right">{source.totalLeads}</TableCell>
                <TableCell align="right">{source.conversionRate}%</TableCell>
                <TableCell align="right">
                  <IconButton 
                    color="error"
                    onClick={() => onDelete(source.id)}
                  >
                    <IconTrash size="1.1rem" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

SourcesList.propTypes = {
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      totalLeads: PropTypes.number.isRequired,
      conversionRate: PropTypes.number.isRequired
    })
  ).isRequired,
  onAddClick: PropTypes.func.isRequired,
  onToggleStatus: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default SourcesList;
