// src/pages/Home.js
import React from 'react';
import { Container, Typography, Grid, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h3" align="center" gutterBottom>
                Welcome to Our Insurance Platform
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
                Get the best insurance policies tailored to your needs.
            </Typography>
            <Box sx={{ mt: 4 }}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" gutterBottom>
                                Auto Insurance
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Protect your vehicle with comprehensive coverage.
                            </Typography>
                            <Button variant="contained" color="primary" component={Link} to="/quote">
                                Get a Quote
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" gutterBottom>
                                Home Insurance
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Secure your home with our reliable policies.
                            </Typography>
                            <Button variant="contained" color="primary" component={Link} to="/quote">
                                Get a Quote
                            </Button>
                        </Box>
                    </Grid>
                    {/* Add more insurance types as needed */}
                </Grid>
            </Box>
        </Container>
    );
};

export default Home;
