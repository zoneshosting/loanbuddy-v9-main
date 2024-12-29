
import { Card, CardHeader, CardContent, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { IconCircleCheck } from '@tabler/icons-react';

const GettingStarted = () => {
  const steps = [
    {
      title: 'Set Up Your Account',
      description: 'Configure your company profile and user settings'
    },
    {
      title: 'Import Your Data',
      description: 'Import existing leads and client data into the system'
    },
    {
      title: 'Configure Workflows',
      description: 'Set up your pipeline stages and automation rules'
    },
    {
      title: 'Invite Team Members',
      description: 'Add users and assign appropriate roles'
    }
  ];

  return (
    <Card>
      <CardHeader title="Getting Started" />
      <Divider />
      <CardContent>
        <Typography variant="body2" paragraph>
          Follow these steps to get started with LoanBuddy and set up your mortgage lead management system.
        </Typography>

        <List>
          {steps.map((step, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <IconCircleCheck stroke={1.5} color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={step.title}
                secondary={step.description}
                primaryTypographyProps={{ variant: 'subtitle1', gutterBottom: true }}
                secondaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default GettingStarted;
