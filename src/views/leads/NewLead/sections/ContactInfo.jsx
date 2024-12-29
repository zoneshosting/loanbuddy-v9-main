import { Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import FormInput from '../components/FormInput';

const ContactInfo = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <FormInput
          name="email"
          label="Email"
          type="email"
          value={values.email}
          error={touched.email && errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormInput
          name="phone"
          label="Phone"
          value={values.phone}
          error={touched.phone && errors.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
      </Grid>
    </Grid>
  );
};

export default ContactInfo;