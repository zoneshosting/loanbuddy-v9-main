import { useState } from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SubCard from 'ui-component/cards/SubCard';
import { formatCurrency } from '../utils/formatters';

const AffordabilityCalculator = () => {
  const theme = useTheme();
  const [values, setValues] = useState({
    annualIncome: 100000,
    monthlyDebts: 500,
    downPayment: 60000
  });

  const calculateAffordability = () => {
    // 28% front-end ratio
    const maxMonthlyPayment = (values.annualIncome / 12) * 0.28;
    
    // 36% back-end ratio (including other debts)
    const maxTotalMonthlyDebt = (values.annualIncome / 12) * 0.36;
    const availableForMortgage = maxTotalMonthlyDebt - values.monthlyDebts;

    // Use the lower of the two values
    const maxPayment = Math.min(maxMonthlyPayment, availableForMortgage);

    // Estimate max home price (rough calculation)
    const maxHomePrice = (maxPayment * 12 * 30) + values.downPayment;

    return {
      maxPayment,
      maxHomePrice
    };
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: Number(event.target.value) });
  };

  const affordability = calculateAffordability();

  return (
    <SubCard title="Affordability Calculator">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Annual Income"
            type="number"
            value={values.annualIncome}
            onChange={handleChange('annualIncome')}
            InputProps={{
              startAdornment: <Typography color="textSecondary">$</Typography>
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Monthly Debts"
            type="number"
            value={values.monthlyDebts}
            onChange={handleChange('monthlyDebts')}
            InputProps={{
              startAdornment: <Typography color="textSecondary">$</Typography>
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Down Payment"
            type="number"
            value={values.downPayment}
            onChange={handleChange('downPayment')}
            InputProps={{
              startAdornment: <Typography color="textSecondary">$</Typography>
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Based on your income and debts:
          </Typography>
          <Typography variant="body1" gutterBottom>
            Maximum Monthly Payment: {formatCurrency(affordability.maxPayment)}
          </Typography>
          <Typography variant="body1">
            Maximum Home Price: {formatCurrency(affordability.maxHomePrice)}
          </Typography>
        </Grid>
      </Grid>
    </SubCard>
  );
};

export default AffordabilityCalculator;
