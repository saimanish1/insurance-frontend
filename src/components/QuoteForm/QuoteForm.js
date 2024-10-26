// src/pages/QuoteForm.js
import React, { useState } from "react";
import QuoteSummary from "./QuoteSummary";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import api from "../../services/api";

const QuoteForm = () => {
  const [step, setStep] = useState(1);
  const [quoteData, setQuoteData] = useState({
    driverDetails: {},
    vehicleInformation: {},
    coveragePreferences: {},
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const updateQuoteData = (data) => {
    setQuoteData({
      ...quoteData,
      ...data,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log("Submitting quoteData:", quoteData); // Add this line to debug

      // Send the quoteData to the backend to get the premium
      const response = await api.post("/policy/quote", quoteData);
      const quoteWithPremium = response.data;

      // Update quoteData with the premium
      setQuoteData(quoteWithPremium);

      // Proceed to the QuoteSummary step
      nextStep();
    } catch (err) {
      console.error("Error generating quote:", err);
      setError("Failed to generate quote. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepOne
            nextStep={nextStep}
            updateQuoteData={updateQuoteData}
            quoteData={quoteData}
          />
        );
      case 2:
        return (
          <StepTwo
            nextStep={nextStep}
            prevStep={prevStep}
            updateQuoteData={updateQuoteData}
            quoteData={quoteData}
          />
        );
      case 3:
        return (
          <StepThree
            nextStep={handleSubmit} // Submit the data when the user completes the last step
            prevStep={prevStep}
            updateQuoteData={updateQuoteData}
            quoteData={quoteData}
          />
        );
      case 4:
        return <QuoteSummary quoteData={quoteData} prevStep={prevStep} />;
      default:
        return <div>Error: Invalid step</div>;
    }
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      {renderStep()}
    </div>
  );
};

export default QuoteForm;
