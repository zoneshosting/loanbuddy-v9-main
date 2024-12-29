import { Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import FormSelect from '../components/FormSelect';
import FormInput from '../components/FormInput';

const leadSources = [
  { value: 'website', label: 'Website' },
  { value: 'referral', label: 'Referral' },
  { value: 'social', label: 'Social Media' },
  { value: 'other', label: 'Other' }
];

const leadStatuses = [
  { value: 'new', label: 'New' },
  { value: 'contacted', label: 'Contacted' },
  { value: 'qualified', label: 'Qualified' },
  { value: 'lost', label: 'Lost' }
];

const LeadDetails = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <FormSelect
          name="source"
          label="Lead Source"
          value={values.source}
          error={touched.source && errors.source}
          onChange={handleChange}
          onBlur={handleBlur}
          options={leadSources}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormSelect
          name="status"
          label="Lead Status"
          value={values.status}
          error={touched.status && errors.status}
          onChange={handleChange}
          onBlur={handleBlur}
          options={leadStatuses}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <FormInput
          name="notes"
          label="Notes"
          multiline
          rows={4}
          value={values.notes}
          error={touched.notes && errors.notes}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>
    </Grid>
  );
};

export default LeadDetails;