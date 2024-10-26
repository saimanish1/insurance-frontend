// src/components/QuoteSummary.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";

const QuoteSummary = ({ quoteData, prevStep }) => {
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    debugger;
    // Navigate to Checkout and pass the quoteData
    navigate("/checkout", { state: { quote: quoteData } });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Quote Summary
      </Typography>
      {/* Display quote details */}
      <Typography variant="subtitle1">Premium: ${quoteData.premium}</Typography>
      <Typography variant="subtitle1">
        Driver: {quoteData.driverDetails.name}, Age:{" "}
        {quoteData.driverDetails.age}
      </Typography>
      <Typography variant="subtitle1">
        Vehicle: {quoteData.vehicleInformation.year}{" "}
        {quoteData.vehicleInformation.make} {quoteData.vehicleInformation.model}
      </Typography>
      <Typography variant="subtitle1">
        Coverage Amount: ${quoteData.coveragePreferences.coverageAmount},
        Deductible: ${quoteData.coveragePreferences.deductible}
      </Typography>
      {/* Include other details as needed */}
      <Box mt={2}>
        <Button variant="contained" onClick={prevStep}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleProceedToCheckout}
          sx={{ ml: 2 }}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Container>
  );
};

export default QuoteSummary;
