import { Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import FormInput from '../components/FormInput';

const PersonalInfo = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <FormInput
          name="firstName"
          label="First Name"
          value={values.firstName}
          error={touched.firstName && errors.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormInput
          name="lastName"
          label="Last Name"
          value={values.lastName}
          error={touched.lastName && errors.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;