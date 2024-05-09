import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

function MobileAppDevelopmentComponent() {
    return (
        <Container>
            <Paper elevation={6} sx={{ p: 4, m: 2 }}>
                <Typography variant="h4" gutterBottom>
                    Mobile App Development
                </Typography>
                <Typography variant="body1">
                    We build mobile applications that offer excellent performance, scalability, and seamless user experiences. Our apps are designed to meet your business needs and enhance customer engagement.
                </Typography>
            </Paper>
        </Container>
    );
}

export default MobileAppDevelopmentComponent;
