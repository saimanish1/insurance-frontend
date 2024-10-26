// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import api from "../services/api";

const Dashboard = () => {
  const [policies, setPolicies] = useState([]);
  const [selectedPolicyId, setSelectedPolicyId] = useState(null);
  const [claimOpen, setClaimOpen] = useState(false);
  const [claimDescription, setClaimDescription] = useState("");

  useEffect(() => {
    fetchPolicies();
  }, []);

  const fetchPolicies = async () => {
    try {
      const response = await api.get("/policy");
      setPolicies(response.data);
    } catch (error) {
      console.error("Error fetching policies:", error);
    }
  };

  const handleRenewPolicy = async (policyId) => {
    try {
      await api.post(`/policy/${policyId}/renew`);
      alert("Policy renewed successfully");
      fetchPolicies();
    } catch (error) {
      console.error("Error renewing policy:", error);
      alert("Failed to renew policy");
    }
  };

  const handleOpenClaimDialog = (policyId) => {
    setSelectedPolicyId(policyId);
    setClaimOpen(true);
  };

  const handleCloseClaimDialog = () => {
    setClaimOpen(false);
    setClaimDescription("");
  };

  const handleFileClaim = async () => {
    try {
      await api.post(`/policy/${selectedPolicyId}/claim`, {
        description: claimDescription,
      });
      alert("Claim filed successfully");
      handleCloseClaimDialog();
    } catch (error) {
      console.error("Error filing claim:", error);
      alert("Failed to file claim");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="h5">Your Policies</Typography>
      <List>
        {policies.map((policy) => (
          <ListItem
            key={policy.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Typography variant="subtitle1">
                {policy.type} - {policy.status} - Expires on{" "}
                {new Date(policy.createdAt).toLocaleDateString()}
              </Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleRenewPolicy(policy.id)}
                sx={{ mr: 1 }}
              >
                Renew Policy
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleOpenClaimDialog(policy.id)}
              >
                File a Claim
              </Button>
            </div>
          </ListItem>
        ))}
      </List>
      {/* Claim Dialog */}
      <Dialog open={claimOpen} onClose={handleCloseClaimDialog}>
        <DialogTitle>File a Claim</DialogTitle>
        <DialogContent>
          <TextField
            label="Description"
            multiline
            rows={4}
            fullWidth
            value={claimDescription}
            onChange={(e) => setClaimDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseClaimDialog}>Cancel</Button>
          <Button onClick={handleFileClaim} variant="contained" color="primary">
            Submit Claim
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Dashboard;
