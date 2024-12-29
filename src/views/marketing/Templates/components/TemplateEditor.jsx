
import PropTypes from 'prop-types';
import { TextField, Typography, Box } from '@mui/material';

const TemplateEditor = ({ type, content, onChange, error }) => {
  const maxSmsLength = 160;

  return (
    <>
      <TextField
        label="Content"
        fullWidth
        multiline
        rows={type === 'sms' ? 3 : 8}
        value={content}
        onChange={onChange}
        error={Boolean(error)}
        helperText={error}
      />
      {type === 'sms' && (
        <Box sx={{ mt: 1, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="caption" color="textSecondary">
            Available variables: {'{name}'}, {'{phone}'}, {'{link}'}
          </Typography>
          <Typography 
            variant="caption" 
            color={content.length > maxSmsLength ? 'error' : 'textSecondary'}
          >
            {content.length}/{maxSmsLength} characters
          </Typography>
        </Box>
      )}
      {type === 'email' && (
        <Box sx={{ mt: 1 }}>
          <Typography variant="caption" color="textSecondary">
            Available variables: {'{name}'}, {'{email}'}, {'{phone}'}, {'{link}'}, {'{company}'}
          </Typography>
        </Box>
      )}
    </>
  );
};

TemplateEditor.propTypes = {
  type: PropTypes.oneOf(['email', 'sms']).isRequired,
  content: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default TemplateEditor;
