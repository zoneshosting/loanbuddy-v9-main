
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
  Box,
  Tooltip
} from '@mui/material';
import { IconPlus, IconTrash, IconArrowUp, IconArrowDown } from '@tabler/icons-react';

const StagesList = ({ stages, onAddClick, onUpdate, onDelete }) => {
  const handleToggleStatus = (stage) => {
    onUpdate({ ...stage, active: !stage.active });
  };

  const handleMoveUp = (index) => {
    if (index === 0) return;
    const newStages = [...stages];
    const temp = newStages[index].order;
    newStages[index].order = newStages[index - 1].order;
    newStages[index - 1].order = temp;
    newStages.sort((a, b) => a.order - b.order);
    newStages.forEach(stage => onUpdate(stage));
  };

  const handleMoveDown = (index) => {
    if (index === stages.length - 1) return;
    const newStages = [...stages];
    const temp = newStages[index].order;
    newStages[index].order = newStages[index + 1].order;
    newStages[index + 1].order = temp;
    newStages.sort((a, b) => a.order - b.order);
    newStages.forEach(stage => onUpdate(stage));
  };

  return (
    <Box>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          startIcon={<IconPlus />}
          onClick={onAddClick}
        >
          Add Stage
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>Stage Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stages.map((stage, index) => (
              <TableRow key={stage.id}>
                <TableCell>{stage.order}</TableCell>
                <TableCell>{stage.name}</TableCell>
                <TableCell>{stage.description}</TableCell>
                <TableCell align="center">
                  <Switch
                    checked={stage.active}
                    onChange={() => handleToggleStatus(stage)}
                  />
                </TableCell>
                <TableCell align="right">
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Tooltip title="Move Up">
                      <IconButton 
                        onClick={() => handleMoveUp(index)}
                        disabled={index === 0}
                      >
                        <IconArrowUp size="1.1rem" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Move Down">
                      <IconButton 
                        onClick={() => handleMoveDown(index)}
                        disabled={index === stages.length - 1}
                      >
                        <IconArrowDown size="1.1rem" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton 
                        color="error"
                        onClick={() => onDelete(stage.id)}
                      >
                        <IconTrash size="1.1rem" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

StagesList.propTypes = {
  stages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired,
      active: PropTypes.bool.isRequired
    })
  ).isRequired,
  onAddClick: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default StagesList;
