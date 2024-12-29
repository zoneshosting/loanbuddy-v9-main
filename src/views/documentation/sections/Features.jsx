
import { Card, CardHeader, CardContent, Typography, Box, Divider } from '@mui/material';

const Features = () => {
  const features = [
    {
      title: 'Lead Management',
      description: 'Efficiently track and manage mortgage leads through the entire pipeline.'
    },
    {
      title: 'Pipeline Management',
      description: 'Visualize and optimize your mortgage application pipeline.'
    },
    {
      title: 'Task Management',
      description: 'Stay organized with built-in task tracking and reminders.'
    }
  ];

  return (
    <Card>
      <CardHeader title="Key Features" />
      <Divider />
      <CardContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" component="div" gutterBottom>
            LoanBuddy provides a comprehensive set of features to streamline your mortgage lead management process.
          </Typography>
        </Box>

        {features.map((feature, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              {feature.title}
            </Typography>
            <Typography variant="body2" component="div" color="textSecondary">
              {feature.description}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default Features;
