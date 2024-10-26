// src/pages/Register.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Container, Typography } from '@mui/material';
import * as Yup from 'yup';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const initialValues = { fullName: '', email: '', password: '', confirmPassword: '' };

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const { fullName, email, password } = values;
            await api.post('/auth/register', { fullName, email, password });
            navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error);
            alert('Registration failed');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Register
            </Typography>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <Field name="fullName">
                            {({ field }) => (
                                <TextField
                                    {...field}
                                    label="Full Name"
                                    fullWidth
                                    margin="normal"
                                    error={Boolean(errors.fullName && touched.fullName)}
                                    helperText={touched.fullName && errors.fullName}
                                />
                            )}
                        </Field>
                        <Field name="email">
                            {({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email"
                                    type="email"
                                    fullWidth
                                    margin="normal"
                                    error={Boolean(errors.email && touched.email)}
                                    helperText={touched.email && errors.email}
                                />
                            )}
                        </Field>
                        <Field name="password">
                            {({ field }) => (
                                <TextField
                                    {...field}
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                    error={Boolean(errors.password && touched.password)}
                                    helperText={touched.password && errors.password}
                                />
                            )}
                        </Field>
                        <Field name="confirmPassword">
                            {({ field }) => (
                                <TextField
                                    {...field}
                                    label="Confirm Password"
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                    error={Boolean(errors.confirmPassword && touched.confirmPassword)}
                                    helperText={touched.confirmPassword && errors.confirmPassword}
                                />
                            )}
                        </Field>
                        <Button type="submit" variant="contained" color="primary" disabled={isSubmitting} sx={{ mt: 2 }}>
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

export default Register;
