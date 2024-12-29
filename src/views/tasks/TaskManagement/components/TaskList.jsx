
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Chip,
  Avatar,
  Box,
  Typography
} from '@mui/material';
import { IconDotsVertical } from '@tabler/icons-react';
import { useState } from 'react';

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'completed':
      return 'success';
    case 'in_progress':
      return 'warning';
    case 'overdue':
      return 'error';
    default:
      return 'default';
  }
};

const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case 'high':
      return 'error';
    case 'medium':
      return 'warning';
    case 'low':
      return 'info';
    default:
      return 'default';
  }
};

const TaskList = ({ filters }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleMenuOpen = (event, task) => {
    setAnchorEl(event.currentTarget);
    setSelectedTask(task);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedTask(null);
  };

  // Mock data - replace with actual API call
  const tasks = [
    {
      id: 1,
      title: 'Review Mortgage Application',
      description: 'Review and process new mortgage application for John Doe',
      status: 'in_progress',
      priority: 'high',
      assignee: {
        id: 1,
        name: 'John Smith',
        avatar: null
      },
      dueDate: '2024-02-20',
      client: 'John Doe'
    },
    {
      id: 2,
      title: 'Document Collection',
      description: 'Collect missing documents from Sarah Johnson',
      status: 'pending',
      priority: 'medium',
      assignee: {
        id: 2,
        name: 'Sarah Johnson',
        avatar: null
      },
      dueDate: '2024-02-22',
      client: 'Sarah Johnson'
    },
    {
      id: 3,
      title: 'Follow-up Call',
      description: 'Schedule follow-up call with potential client',
      status: 'completed',
      priority: 'low',
      assignee: {
        id: 3,
        name: 'Mike Brown',
        avatar: null
      },
      dueDate: '2024-02-18',
      client: 'Michael Wilson'
    }
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Assignee</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Client</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>
                <Box>
                  <Typography variant="subtitle2">{task.title}</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {task.description}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Chip 
                  label={task.status.replace('_', ' ')} 
                  color={getStatusColor(task.status)}
                  size="small"
                />
              </TableCell>
              <TableCell>
                <Chip 
                  label={task.priority} 
                  color={getPriorityColor(task.priority)}
                  size="small"
                  variant="outlined"
                />
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar 
                    sx={{ width: 24, height: 24, mr: 1 }}
                    src={task.assignee.avatar}
                  >
                    {task.assignee.name.charAt(0)}
                  </Avatar>
                  <Typography variant="body2">
                    {task.assignee.name}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>{task.dueDate}</TableCell>
              <TableCell>{task.client}</TableCell>
              <TableCell align="right">
                <IconButton onClick={(e) => handleMenuOpen(e, task)}>
                  <IconDotsVertical size="1.1rem" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Edit Task</MenuItem>
        <MenuItem onClick={handleMenuClose}>Mark as Complete</MenuItem>
        <MenuItem onClick={handleMenuClose}>Reassign</MenuItem>
        <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
      </Menu>
    </TableContainer>
  );
};

TaskList.propTypes = {
  filters: PropTypes.object.isRequired
};

export default TaskList;
