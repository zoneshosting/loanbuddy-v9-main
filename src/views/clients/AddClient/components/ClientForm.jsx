
import PropTypes from 'prop-types';
import { Grid, Button, Box } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PersonalInfo from './sections/PersonalInfo';
import ContactInfo from './sections/ContactInfo';
import LoanInfo from './sections/LoanInfo';
import EmploymentInfo from './sections/EmploymentInfo';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  loanType: Yup.string().required('Loan type is required'),
  loanAmount: Yup.number().required('Loan amount is required').positive('Must be positive'),
  employer: Yup.string().required('Employer is required'),
  income: Yup.number().required('Annual income is required').positive('Must be positive')
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  loanType: '',
  loanAmount: '',
  employer: '',
  income: '',
  notes: ''
};

const ClientForm = ({ onSubmit, isSubmitting }) => {
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
              <LoanInfo />
            </Grid>
            <Grid item xs={12}>
              <EmploymentInfo />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting || !isValid}
                >
                  {isSubmitting ? 'Saving...' : 'Save Client'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

ClientForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool
};

export default ClientForm;
