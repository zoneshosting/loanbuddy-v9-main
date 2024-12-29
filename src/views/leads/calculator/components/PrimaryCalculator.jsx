import { useState, useEffect } from 'react';
import { Grid, TextField, MenuItem, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SubCard from 'ui-component/cards/SubCard';
import { formatCurrency } from '../utils/formatters';

const PrimaryCalculator = ({ onCalculate }) => {
  const theme = useTheme();
  const [values, setValues] = useState({
    loanAmount: 300000,
    downPayment: 60000,
    interestRate: 6.5,
    loanTerm: 30,
    propertyTax: 3600,
    insurance: 1200,
    pmi: 0
  });

  useEffect(() => {
    calculatePayment();
  }, [values]);

  const calculatePayment = () => {
    const principal = values.loanAmount - values.downPayment;
    const monthlyRate = values.interestRate / 100 / 12;
    const numberOfPayments = values.loanTerm * 12;
    
    const monthlyPrincipalAndInterest = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const monthlyPropertyTax = values.propertyTax / 12;
    const monthlyInsurance = values.insurance / 12;
    
    // Calculate PMI if down payment is less than 20%
    const downPaymentPercent = (values.downPayment / values.loanAmount) * 100;
    const monthlyPMI = downPaymentPercent < 20 ? (principal * 0.01) / 12 : 0;

    const totalMonthlyPayment = monthlyPrincipalAndInterest + monthlyPropertyTax + monthlyInsurance + monthlyPMI;

    onCalculate({
      monthlyPI: monthlyPrincipalAndInterest,
      monthlyTax: monthlyPropertyTax,
      monthlyInsurance: monthlyInsurance,
      monthlyPMI: monthlyPMI,
      totalMonthly: totalMonthlyPayment
    });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: Number(event.target.value) });
  };

  return (
    <SubCard title="Primary Mortgage Calculator">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Loan Amount"
            type="number"
            value={values.loanAmount}
            onChange={handleChange('loanAmount')}
            InputProps={{
              startAdornment: <Typography color="textSecondary">$</Typography>
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Interest Rate"
            type="number"
            value={values.interestRate}
            onChange={handleChange('interestRate')}
            InputProps={{
              endAdornment: <Typography color="textSecondary">%</Typography>
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            select
            label="Loan Term"
            value={values.loanTerm}
            onChange={handleChange('loanTerm')}
          >
            <MenuItem value={15}>15 years</MenuItem>
            <MenuItem value={20}>20 years</MenuItem>
            <MenuItem value={30}>30 years</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Annual Property Tax"
            type="number"
            value={values.propertyTax}
            onChange={handleChange('propertyTax')}
            InputProps={{
              startAdornment: <Typography color="textSecondary">$</Typography>
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Annual Home Insurance"
            type="number"
            value={values.insurance}
            onChange={handleChange('insurance')}
            InputProps={{
              startAdornment: <Typography color="textSecondary">$</Typography>
            }}
          />
        </Grid>
      </Grid>
    </SubCard>
  );
};

export default PrimaryCalculator;
