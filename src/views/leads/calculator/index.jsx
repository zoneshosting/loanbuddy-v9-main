
import { useState } from 'react';
import { Grid } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import PrimaryCalculator from './components/PrimaryCalculator';
import PaymentBreakdown from './components/PaymentBreakdown';
import AffordabilityCalculator from './components/AffordabilityCalculator';

const Calculator = () => {
  const [payment, setPayment] = useState({
    monthlyPI: 0,
    monthlyTax: 0,
    monthlyInsurance: 0,
    monthlyPMI: 0,
    totalMonthly: 0
  });

  const handleCalculate = (results) => {
    setPayment(results);
  };

  return (
    <MainCard title="Mortgage Calculator">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <PrimaryCalculator onCalculate={handleCalculate} />
        </Grid>
        <Grid item xs={12}>
          <PaymentBreakdown payment={payment} />
        </Grid>
        <Grid item xs={12}>
          <AffordabilityCalculator />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Calculator;
