
import PropTypes from 'prop-types';
import {
  Paper,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box
} from '@mui/material';
import { IconCopy, IconTrash, IconPlus } from '@tabler/icons-react';
import { useState } from 'react';

const ApiKeys = ({ onUpdate }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');

  // Mock data - replace with actual API keys
  const apiKeys = [
    {
      id: 1,
      name: 'Production API Key',
      key: 'pk_live_123456789',
      status: 'active',
      created: '2024-02-15'
    },
    {
      id: 2,
      name: 'Test API Key',
      key: 'pk_test_987654321',
      status: 'active',
      created: '2024-02-14'
    }
  ];

  const handleCopyKey = (key) => {
    navigator.clipboard.writeText(key);
    // Add toast notification here
  };

  const handleCreateKey = () => {
    if (!newKeyName.trim()) return;
    
    // TODO: Implement API key creation
    console.log('Creating new API key:', newKeyName);
    setNewKeyName('');
    setOpenDialog(false);
    onUpdate();
  };

  const handleDeleteKey = (keyId) => {
    // TODO: Implement API key deletion
    console.log('Deleting API key:', keyId);
    onUpdate();
  };

  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">API Keys</Typography>
          <Button
            variant="contained"
            startIcon={<IconPlus />}
            onClick={() => setOpenDialog(true)}
          >
            Create Key
          </Button>
        </Box>

        <List>
          {apiKeys.map((key) => (
            <ListItem key={key.id} divider>
              <ListItemText
                primary={key.name}
                secondary={
                  <>
                    <Typography variant="body2" component="span">
                      {key.key.substring(0, 12)}...
                    </Typography>
                    <br />
                    <Typography variant="caption" color="textSecondary">
                      Created: {key.created}
                    </Typography>
                  </>
                }
              />
              <ListItemSecondaryAction>
                <Chip 
                  label={key.status} 
                  color={key.status === 'active' ? 'success' : 'default'}
                  size="small"
                  sx={{ mr: 1 }}
                />
                <IconButton 
                  onClick={() => handleCopyKey(key.key)}
                  size="small"
                >
                  <IconCopy size="1.1rem" />
                </IconButton>
                <IconButton 
                  onClick={() => handleDeleteKey(key.id)}
                  color="error"
                  size="small"
                >
                  <IconTrash size="1.1rem" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Create New API Key</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Key Name"
            fullWidth
            value={newKeyName}
            onChange={(e) => setNewKeyName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleCreateKey} variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

ApiKeys.propTypes = {
  onUpdate: PropTypes.func.isRequired
};

export default ApiKeys;
