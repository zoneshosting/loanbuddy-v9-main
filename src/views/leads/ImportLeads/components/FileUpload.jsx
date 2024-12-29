
import PropTypes from 'prop-types';
import { Box, Button, Typography } from '@mui/material';
import { IconUpload } from '@tabler/icons-react';
import { useRef } from 'react';

const FileUpload = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <Box
      sx={{
        border: '2px dashed',
        borderColor: 'grey.300',
        borderRadius: 1,
        p: 3,
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover': {
          borderColor: 'primary.main',
          bgcolor: 'primary.lighter'
        }
      }}
      onClick={handleClick}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".csv,.xlsx,.xls"
        style={{ display: 'none' }}
      />
      <IconUpload size={48} stroke={1} />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Click to upload or drag and drop
      </Typography>
      <Typography variant="body2" color="textSecondary">
        CSV, Excel files are supported
      </Typography>
      <Button variant="outlined" sx={{ mt: 2 }}>
        Select File
      </Button>
    </Box>
  );
};

FileUpload.propTypes = {
  onFileSelect: PropTypes.func.isRequired
};

export default FileUpload;
