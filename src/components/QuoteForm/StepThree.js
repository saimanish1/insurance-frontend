// src/components/StepThree.js
import React, { useState } from "react";
import { Container, TextField, Button, Box } from "@mui/material";

const StepThree = ({ nextStep, prevStep, updateQuoteData, quoteData }) => {
  const [coveragePreferences, setCoveragePreferences] = useState(() => {
    return (
      quoteData.coveragePreferences || {
        coverageAmount: "",
        deductible: "",
      }
    );
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update local state
    const newCoveragePreferences = {
      ...coveragePreferences,
      [name]: value,
    };
    setCoveragePreferences(newCoveragePreferences);

    // Update parent quoteData immediately
    const coveragePreferencesWithNumbers = {
      ...newCoveragePreferences,
      coverageAmount: Number(newCoveragePreferences.coverageAmount),
      deductible: Number(newCoveragePreferences.deductible),
    };
    updateQuoteData({ coveragePreferences: coveragePreferencesWithNumbers });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handleBack = () => {
    prevStep();
  };

  return (
    <Container>
      <h2>Step Three: Coverage Preferences</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Coverage Amount"
          name="coverageAmount"
          type="number"
          value={coveragePreferences.coverageAmount}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Deductible"
          name="deductible"
          type="number"
          value={coveragePreferences.deductible}
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
            type="submit"
            sx={{ ml: 2 }}
          >
            Get Quote
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default StepThree;
