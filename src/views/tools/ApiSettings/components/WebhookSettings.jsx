
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
  Box,
  MenuItem
} from '@mui/material';
import { IconTrash, IconPlus } from '@tabler/icons-react';
import { useState } from 'react';

const events = [
  { value: 'lead.created', label: 'Lead Created' },
  { value: 'lead.updated', label: 'Lead Updated' },
  { value: 'application.submitted', label: 'Application Submitted' },
  { value: 'loan.approved', label: 'Loan Approved' }
];

const WebhookSettings = ({ onUpdate }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [newWebhook, setNewWebhook] = useState({
    url: '',
    event: '',
    description: ''
  });

  // Mock data - replace with actual webhooks
  const webhooks = [
    {
      id: 1,
      url: 'https://api.example.com/webhook1',
      event: 'lead.created',
      description: 'New lead notifications',
      status: 'active'
    },
    {
      id: 2,
      url: 'https://api.example.com/webhook2',
      event: 'application.submitted',
      description: 'Application tracking',
      status: 'active'
    }
  ];

  const handleCreateWebhook = () => {
    if (!newWebhook.url.trim() || !newWebhook.event) return;
    
    // TODO: Implement webhook creation
    console.log('Creating new webhook:', newWebhook);
    setNewWebhook({ url: '', event: '', description: '' });
    setOpenDialog(false);
    onUpdate();
  };

  const handleDeleteWebhook = (webhookId) => {
    // TODO: Implement webhook deletion
    console.log('Deleting webhook:', webhookId);
    onUpdate();
  };

  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Webhooks</Typography>
          <Button
            variant="contained"
            startIcon={<IconPlus />}
            onClick={() => setOpenDialog(true)}
          >
            Add Webhook
          </Button>
        </Box>

        <List>
          {webhooks.map((webhook) => (
            <ListItem key={webhook.id} divider>
              <ListItemText
                primary={webhook.url}
                secondary={
                  <>
                    <Chip 
                      label={webhook.event}
                      size="small"
                      color="primary"
                      variant="outlined"
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="caption" color="textSecondary">
                      {webhook.description}
                    </Typography>
                  </>
                }
              />
              <ListItemSecondaryAction>
                <Chip 
                  label={webhook.status} 
                  color={webhook.status === 'active' ? 'success' : 'default'}
                  size="small"
                  sx={{ mr: 1 }}
                />
                <IconButton 
                  onClick={() => handleDeleteWebhook(webhook.id)}
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

      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Add New Webhook</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Webhook URL"
            fullWidth
            value={newWebhook.url}
            onChange={(e) => setNewWebhook({ ...newWebhook, url: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            select
            margin="dense"
            label="Event"
            fullWidth
            value={newWebhook.event}
            onChange={(e) => setNewWebhook({ ...newWebhook, event: e.target.value })}
            sx={{ mb: 2 }}
          >
            {events.map((event) => (
              <MenuItem key={event.value} value={event.value}>
                {event.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            value={newWebhook.description}
            onChange={(e) => setNewWebhook({ ...newWebhook, description: e.target.value })}
            multiline
            rows={2}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleCreateWebhook} variant="contained">
            Add Webhook
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

WebhookSettings.propTypes = {
  onUpdate: PropTypes.func.isRequired
};

export default WebhookSettings;
