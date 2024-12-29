
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import FileUpload from './components/FileUpload';
import MappingTable from './components/MappingTable';
import ImportSummary from './components/ImportSummary';
import ImportProgress from './components/ImportProgress';

const ImportLeads = () => {
  const [file, setFile] = useState(null);
  const [mappings, setMappings] = useState({});
  const [importing, setImporting] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
    // Reset other states when new file is selected
    setMappings({});
    setProgress(0);
  };

  const handleMappingChange = (newMappings) => {
    setMappings(newMappings);
  };

  const handleImport = async () => {
    setImporting(true);
    try {
      // Simulate import progress
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setProgress(i);
      }
    } catch (error) {
      console.error('Import error:', error);
    } finally {
      setImporting(false);
    }
  };

  return (
    <MainCard title="Import Leads">
      <Typography variant="body2" gutterBottom>
        Import leads from CSV or Excel files. Map your file columns to the correct fields and review before importing.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FileUpload onFileSelect={handleFileSelect} />
        </Grid>

        {file && (
          <>
            <Grid item xs={12}>
              <MappingTable 
                file={file} 
                mappings={mappings} 
                onMappingChange={handleMappingChange} 
              />
            </Grid>

            <Grid item xs={12}>
              <ImportSummary 
                file={file} 
                mappings={mappings} 
                onImport={handleImport}
                disabled={importing || !Object.keys(mappings).length}
              />
            </Grid>

            {importing && (
              <Grid item xs={12}>
                <ImportProgress progress={progress} />
              </Grid>
            )}
          </>
        )}
      </Grid>
    </MainCard>
  );
};

export default ImportLeads;
