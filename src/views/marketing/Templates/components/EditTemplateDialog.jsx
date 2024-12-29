
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  MenuItem
} from '@mui/material';
import { useState, useEffect } from 'react';
import TemplateEditor from './TemplateEditor';

const EditTemplateDialog = ({ open, template, onClose, onSubmit }) => {
  const [values, setValues] = useState({
    name: '',
    type: '',
    category: '',
    subject: '',
    content: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (template) {
      setValues({
        ...template,
        subject: template.subject || ''
      });
    }
  }, [template]);

  const handleChange = (field) => (event) => {
    setValues({ ...values, [field]: event.target.value });
    setErrors({ ...errors, [field]: '' });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = 'Template name is required';
    if (!values.category) newErrors.category = 'Category is required';
    if (values.type === 'email' && !values.subject.trim()) {
      newErrors.subject = 'Subject is required for email templates';
    }
    if (!values.content.trim()) newErrors.content = 'Content is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit({ ...values, id: template.id });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Edit Template</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Template Name"
              fullWidth
              value={values.name}
              onChange={handleChange('name')}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Category"
              fullWidth
              value={values.category}
              onChange={handleChange('category')}
              error={Boolean(errors.category)}
              helperText={errors.category}
            >
              <MenuItem value="onboarding">Onboarding</MenuItem>
              <MenuItem value="marketing">Marketing</MenuItem>
              <MenuItem value="follow-up">Follow-up</MenuItem>
              <MenuItem value="reminder">Reminder</MenuItem>
            </TextField>
          </Grid>
          {values.type === 'email' && (
            <Grid item xs={12}>
              <TextField
                label="Subject"
                fullWidth
                value={values.subject}
                onChange={handleChange('subject')}
                error={Boolean(errors.subject)}
                helperText={errors.subject}
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <TemplateEditor
              type={values.type}
              content={values.content}
              onChange={handleChange('content')}
              error={errors.content}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

EditTemplateDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  template: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default EditTemplateDialog;
