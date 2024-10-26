// src/components/EditPolicy.js
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import api from '../services/api';

const EditPolicy = ({ policyId, open, onClose, onPolicyUpdated }) => {
    const [policyData, setPolicyData] = useState({
        type: '',
        coverageAmount: '',
        premium: '',
        termLength: '',
        status: '',
    });

    useEffect(() => {
        if (policyId) {
            fetchPolicy();
        }
    }, [policyId]);

    const fetchPolicy = async () => {
        try {
            const response = await api.get(`/policy/${policyId}`);
            setPolicyData(response.data);
        } catch (error) {
            console.error('Error fetching policy:', error);
        }
    };

    const handleChange = (e) => {
        setPolicyData({ ...policyData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            await api.put(`/policy/${policyId}`, policyData);
            alert('Policy updated successfully');
            onPolicyUpdated(); // Notify parent component to refresh the policy list
            onClose(); // Close the dialog
        } catch (error) {
            console.error('Error updating policy:', error);
            alert('Failed to update policy');
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Policy</DialogTitle>
            <DialogContent>
                <TextField
                    name="type"
                    label="Type"
                    value={policyData.type}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="coverageAmount"
                    label="Coverage Amount"
                    type="number"
                    value={policyData.coverageAmount}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="premium"
                    label="Premium"
                    type="number"
                    value={policyData.premium}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="termLength"
                    label="Term Length"
                    type="number"
                    value={policyData.termLength}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="status"
                    label="Status"
                    value={policyData.status}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">
                    Save Changes
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditPolicy;
