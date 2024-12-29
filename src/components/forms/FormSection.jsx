
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, Divider } from '@mui/material';

const FormSection = ({ title, children }) => {
  return (
    <Card>
      <CardHeader title={title} />
      <Divider />
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

FormSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FormSection;
