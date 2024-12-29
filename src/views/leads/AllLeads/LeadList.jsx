import PropTypes from 'prop-types';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Paper
} from '@mui/material';
import LeadRow from './LeadRow';
import useLeads from '../../../hooks/useLeads';

const LeadList = ({ filters }) => {
  const { leads, isLoading } = useLeads(filters);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Source</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leads.map((lead) => (
            <LeadRow key={lead.id} lead={lead} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

LeadList.propTypes = {
  filters: PropTypes.object.isRequired
};

export default LeadList;