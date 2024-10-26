// src/components/Footer.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mt: 'auto' }}>
        <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} Insurance Company
        </Typography>
    </Box>
);

export default Footer;
