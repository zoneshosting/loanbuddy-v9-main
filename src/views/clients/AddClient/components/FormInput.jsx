
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const FormInput = ({ error, ...props }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      error={Boolean(error)}
      helperText={error}
      {...props}
    />
  );
};

FormInput.propTypes = {
  error: PropTypes.string
};

export default FormInput;
