// src/pages/Profile.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem } from '@mui/material';
import api from '../services/api';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get('/user/profile');
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Profile
            </Typography>
            <Typography variant="h6">Name: {user.fullName}</Typography>
            <Typography variant="h6">Email: {user.email}</Typography>
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Policies
            </Typography>
            <List>
                {user.policies.map((policy) => (
                    <ListItem key={policy.id}>
                        {policy.type} - {policy.status}
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Profile;
