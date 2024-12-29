
import PropTypes from 'prop-types';
import { TextField, MenuItem } from '@mui/material';

const FormSelect = ({ options, error, ...props }) => {
  return (
    <TextField
      select
      fullWidth
      variant="outlined"
      error={Boolean(error)}
      helperText={error}
      {...props}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

FormSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  error: PropTypes.string
};

export default FormSelect;
