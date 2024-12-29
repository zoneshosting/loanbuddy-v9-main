import PropTypes from 'prop-types';
import { Grid, Button, Box } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PersonalInfo from './sections/PersonalInfo';
import ContactInfo from './sections/ContactInfo';
import LeadDetails from './sections/LeadDetails';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  source: Yup.string().required('Lead source is required'),
  status: Yup.string().required('Lead status is required')
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  source: '',
  status: 'new',
  notes: ''
};

const LeadForm = ({ onSubmit, isSubmitting }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isValid }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <PersonalInfo />
            </Grid>
            <Grid item xs={12}>
              <ContactInfo />
            </Grid>
            <Grid item xs={12}>
              <LeadDetails />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting || !isValid}
                >
                  {isSubmitting ? 'Saving...' : 'Save Lead'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

LeadForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool
};

export default LeadForm;