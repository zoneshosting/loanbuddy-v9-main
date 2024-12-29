
import { Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import FormInput from '../FormInput';

const EmploymentInfo = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <FormInput
          name="employer"
          label="Current Employer"
          value={values.employer}
          error={touched.employer && errors.employer}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormInput
          name="income"
          label="Annual Income"
          type="number"
          value={values.income}
          error={touched.income && errors.income}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          InputProps={{
            startAdornment: '$'
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormInput
          name="position"
          label="Job Title/Position"
          value={values.position}
          error={touched.position && errors.position}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormInput
          name="employmentLength"
          label="Length of Employment"
          value={values.employmentLength}
          error={touched.employmentLength && errors.employmentLength}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>
    </Grid>
  );
};

export default EmploymentInfo;
