
import { Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import FormInput from '../FormInput';
import FormSelect from '../FormSelect';

const loanTypes = [
  { value: 'conventional', label: 'Conventional' },
  { value: 'fha', label: 'FHA' },
  { value: 'va', label: 'VA' },
  { value: 'jumbo', label: 'Jumbo' }
];

const LoanInfo = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <FormSelect
          name="loanType"
          label="Loan Type"
          value={values.loanType}
          error={touched.loanType && errors.loanType}
          onChange={handleChange}
          onBlur={handleBlur}
          options={loanTypes}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormInput
          name="loanAmount"
          label="Loan Amount"
          type="number"
          value={values.loanAmount}
          error={touched.loanAmount && errors.loanAmount}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          InputProps={{
            startAdornment: '$'
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormInput
          name="notes"
          label="Additional Notes"
          value={values.notes}
          error={touched.notes && errors.notes}
          onChange={handleChange}
          onBlur={handleBlur}
          multiline
          rows={3}
        />
      </Grid>
    </Grid>
  );
};

export default LoanInfo;
