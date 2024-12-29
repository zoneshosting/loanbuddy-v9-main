
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import ReportBuilder from './components/ReportBuilder';
import SavedReports from './components/SavedReports';
import ReportPreview from './components/ReportPreview';

const CustomReports = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [reportConfig, setReportConfig] = useState({
    metrics: [],
    filters: {},
    groupBy: '',
    chartType: ''
  });

  const handleReportSelect = (report) => {
    setSelectedReport(report);
    setReportConfig(report.config);
  };

  const handleConfigChange = (newConfig) => {
    setReportConfig(newConfig);
  };

  return (
    <MainCard title="Custom Reports">
      <Typography variant="body2" gutterBottom>
        Build and customize your own reports. Select metrics, filters, and visualizations to create tailored reports for your needs.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <SavedReports 
            selectedReport={selectedReport}
            onReportSelect={handleReportSelect}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ReportBuilder 
                config={reportConfig}
                onConfigChange={handleConfigChange}
              />
            </Grid>
            <Grid item xs={12}>
              <ReportPreview config={reportConfig} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default CustomReports;
