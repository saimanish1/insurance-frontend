// src/components/StepOne.js
import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Box } from "@mui/material";

const StepOne = ({ nextStep, updateQuoteData, quoteData }) => {
  const [driverDetails, setDriverDetails] = useState({
    name: "",
    age: "",
  });

  // Initialize form fields with values from quoteData if available
  useEffect(() => {
    if (quoteData.driverDetails) {
      setDriverDetails(quoteData.driverDetails);
    }
  }, [quoteData.driverDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriverDetails({
      ...driverDetails,
      [name]: value,
    });
  };

  const handleNext = () => {
    // Update quoteData with driverDetails
    updateQuoteData({ driverDetails });
    nextStep();
  };

  return (
    <Container>
      <h2>Step One: Driver Details</h2>
      <TextField
        label="Name"
        name="name"
        value={driverDetails.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Age"
        name="age"
        type="number"
        value={driverDetails.age}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default StepOne;
