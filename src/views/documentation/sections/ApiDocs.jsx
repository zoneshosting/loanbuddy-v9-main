
import { Card, CardHeader, CardContent, Typography, Box, Divider, Button } from '@mui/material';
import { IconBrandGithub } from '@tabler/icons-react';

const ApiDocs = () => {
  const handleViewDocs = () => {
    window.open('https://api-docs.example.com', '_blank');
  };

  return (
    <Card>
      <CardHeader title="API Documentation" />
      <Divider />
      <CardContent>
        <Typography variant="body2" paragraph>
          Integrate LoanBuddy with your existing systems using our comprehensive API. Access leads, manage applications, and automate workflows.
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" gutterBottom>
            API Features:
          </Typography>
          <Typography component="div" variant="body2">
            <ul>
              <li>RESTful API endpoints</li>
              <li>Secure authentication</li>
              <li>Comprehensive data access</li>
              <li>Webhook integrations</li>
              <li>Rate limiting and usage monitoring</li>
            </ul>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            onClick={handleViewDocs}
          >
            View API Documentation
          </Button>
          <Button
            variant="outlined"
            startIcon={<IconBrandGithub />}
            onClick={() => window.open('https://github.com/example/api-sdk', '_blank')}
          >
            API SDK on GitHub
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ApiDocs;
