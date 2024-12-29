
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
  Tooltip
} from '@mui/material';
import { IconDotsVertical, IconMail, IconMessage } from '@tabler/icons-react';
import { useState } from 'react';

const getTypeIcon = (type) => {
  switch (type.toLowerCase()) {
    case 'email':
      return <IconMail size="1.1rem" />;
    case 'sms':
      return <IconMessage size="1.1rem" />;
    default:
      return null;
  }
};

const TemplateList = ({ filters, onEditClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleMenuOpen = (event, template) => {
    setAnchorEl(event.currentTarget);
    setSelectedTemplate(template);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedTemplate(null);
  };

  const handleEdit = () => {
    onEditClick(selectedTemplate);
    handleMenuClose();
  };

  // Mock data - replace with actual API call
  const templates = [
    {
      id: 1,
      name: 'Welcome Email',
      type: 'email',
      category: 'onboarding',
      subject: 'Welcome to Our Mortgage Services',
      content: 'Dear {name}, Welcome to...',
      lastModified: '2024-02-15'
    },
    {
      id: 2,
      name: 'Rate Alert',
      type: 'sms',
      category: 'marketing',
      content: 'New lower rates available! Contact us today.',
      lastModified: '2024-02-14'
    },
    {
      id: 3,
      name: 'Document Request',
      type: 'email',
      category: 'follow-up',
      subject: 'Required Documents for Your Application',
      content: 'Dear {name}, Please submit...',
      lastModified: '2024-02-13'
    }
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Template Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Subject/Preview</TableCell>
            <TableCell align="right">Last Modified</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {templates.map((template) => (
            <TableRow key={template.id}>
              <TableCell>{template.name}</TableCell>
              <TableCell>
                <Chip 
                  icon={getTypeIcon(template.type)}
                  label={template.type.toUpperCase()}
                  size="small"
                  color={template.type === 'email' ? 'primary' : 'secondary'}
                />
              </TableCell>
              <TableCell>
                <Chip 
                  label={template.category}
                  size="small"
                  variant="outlined"
                />
              </TableCell>
              <TableCell>
                {template.type === 'email' ? template.subject : template.content}
              </TableCell>
              <TableCell align="right">{template.lastModified}</TableCell>
              <TableCell align="right">
                <IconButton onClick={(e) => handleMenuOpen(e, template)}>
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
        <MenuItem onClick={handleEdit}>Edit Template</MenuItem>
        <MenuItem onClick={handleMenuClose}>Duplicate</MenuItem>
        <MenuItem onClick={handleMenuClose}>Preview</MenuItem>
        <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
      </Menu>
    </TableContainer>
  );
};

TemplateList.propTypes = {
  filters: PropTypes.object.isRequired,
  onEditClick: PropTypes.func.isRequired
};

export default TemplateList;
