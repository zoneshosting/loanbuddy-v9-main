
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem,
  TextField
} from '@mui/material';

const FIELD_OPTIONS = [
  { value: 'firstName', label: 'First Name' },
  { value: 'lastName', label: 'Last Name' },
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'source', label: 'Lead Source' },
  { value: 'status', label: 'Status' }
];

const MappingTable = ({ file, mappings, onMappingChange }) => {
  // Mock file headers - in real app, parse the file
  const fileHeaders = ['Name', 'Email Address', 'Phone Number', 'Source'];

  const handleMappingChange = (header) => (event) => {
    onMappingChange({
      ...mappings,
      [header]: event.target.value
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>File Column</TableCell>
            <TableCell>Maps To</TableCell>
            <TableCell>Sample Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fileHeaders.map((header) => (
            <TableRow key={header}>
              <TableCell>{header}</TableCell>
              <TableCell>
                <TextField
                  select
                  fullWidth
                  value={mappings[header] || ''}
                  onChange={handleMappingChange(header)}
                >
                  <MenuItem value="">
                    <em>Do not import</em>
                  </MenuItem>
                  {FIELD_OPTIONS.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </TableCell>
              <TableCell>Sample data here</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

MappingTable.propTypes = {
  file: PropTypes.object.isRequired,
  mappings: PropTypes.object.isRequired,
  onMappingChange: PropTypes.func.isRequired
};

export default MappingTable;
