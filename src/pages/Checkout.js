// src/pages/Checkout.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";
import api from "../services/api";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve the quote data passed from the QuoteForm
  const { quote } = location.state || {};

  if (!quote) {
    // If no quote data is available, redirect back to the quote form
    navigate("/quote");
    return null;
  }

  const handlePurchase = async () => {
    try {
      debugger;
      // Send the quote object, which includes premium
      await api.post("/policy/purchase", {
        quote, // Ensure this quote includes premium
      });

      // Notify the user and redirect
      alert("Policy purchased successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error purchasing policy:", error);
      alert("Failed to purchase policy");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Typography variant="h6">Review Your Quote</Typography>
      <Box mt={2}>
        <Typography variant="subtitle1">Premium: ${quote.premium}</Typography>
        {/* Display other quote details as needed */}
      </Box>
      {/* Payment information would go here if integrating with a payment gateway */}
      <Box mt={4}>
        <Button variant="contained" color="primary" onClick={handlePurchase}>
          Confirm Purchase
        </Button>
      </Box>
    </Container>
  );
};

export default Checkout;
