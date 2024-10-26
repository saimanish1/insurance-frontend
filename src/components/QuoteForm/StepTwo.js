// src/components/StepTwo.js
import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Box } from "@mui/material";

const StepTwo = ({ nextStep, prevStep, updateQuoteData, quoteData }) => {
  const [vehicleInformation, setVehicleInformation] = useState({
    make: "",
    model: "",
    year: "",
  });

  // Initialize form fields with values from quoteData if available
  useEffect(() => {
    if (quoteData.vehicleInformation) {
      setVehicleInformation(quoteData.vehicleInformation);
    }
  }, [quoteData.vehicleInformation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleInformation({
      ...vehicleInformation,
      [name]: value,
    });
  };

  const handleNext = () => {
    // Update quoteData with vehicleInformation
    updateQuoteData({ vehicleInformation });
    nextStep();
  };

  const handleBack = () => {
    prevStep();
  };

  return (
    <Container>
      <h2>Step Two: Vehicle Information</h2>
      <TextField
        label="Make"
        name="make"
        value={vehicleInformation.make}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Model"
        name="model"
        value={vehicleInformation.model}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Year"
        name="year"
        type="number"
        value={vehicleInformation.year}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Box mt={2}>
        <Button variant="contained" onClick={handleBack}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          sx={{ ml: 2 }}
        >
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default StepTwo;
