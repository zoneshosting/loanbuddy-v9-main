import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import MainCard from "ui-component/cards/MainCard";
import AffordabilityCalculator from "./calculator/components/AffordabilityCalculator"; // Code 2
import PaymentBreakdown from "./calculator/components/PaymentBreakdown"; // Code 3
import PrimaryCalculator from "./calculator/components/PrimaryCalculator"; // Code 4

const Calculator = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    monthlyPI: 0,
    monthlyTax: 0,
    monthlyInsurance: 0,
    monthlyPMI: 0,
    totalMonthly: 0,
  });

  const handlePaymentCalculation = (details) => {
    setPaymentDetails(details);
  };

  return (
    <MainCard title="Mortgage Calculator">
      <Typography variant="body2" gutterBottom>
        Calculate mortgage payments, interest rates, and amortization schedules. Help leads understand their financing options and monthly payments.
      </Typography>
      <Grid container spacing={3}>
        {/* Primary Mortgage Calculator */}
        <Grid item xs={12} md={6}>
          <PrimaryCalculator onCalculate={handlePaymentCalculation} />
        </Grid>
        {/* Payment Breakdown */}
        <Grid item xs={12} md={6}>
          <PaymentBreakdown payment={paymentDetails} />
        </Grid>
        {/* Affordability Calculator */}
        <Grid item xs={12}>
          <AffordabilityCalculator />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Calculator;
