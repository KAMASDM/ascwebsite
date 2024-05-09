import React from 'react';
import { Typography, Container, Paper, Grid, Button } from '@mui/material';

function SEOService() {
    return (
        <Container>
            <Paper sx={{ p: 3, m: 2, bgcolor: 'rgba(255, 255, 255, 0.8)', borderRadius: '12px' }}>
                <Typography variant="h3" gutterBottom component="div">
                    SEO Services
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    Overview
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Our SEO services are designed to boost your online presence and help your business rank higher in search engines. We provide comprehensive strategies tailored to your specific needs.
                </Typography>
                
                <Typography variant="h6" gutterBottom component="div">
                    Features
                </Typography>
                <ul>
                    <li><Typography variant="body1">Keyword Research</Typography></li>
                    <li><Typography variant="body1">On-Page Optimization</Typography></li>
                    <li><Typography variant="body1">Off-Page Optimization</Typography></li>
                    <li><Typography variant="body1">Content Creation</Typography></li>
                    <li><Typography variant="body1">Analytics & Reporting</Typography></li>
                </ul>

                <Typography variant="h6" gutterBottom component="div">
                    Benefits
                </Typography>
                <ul>
                    <li><Typography variant="body1">Increased Visibility</Typography></li>
                    <li><Typography variant="body1">Enhanced Brand Awareness</Typography></li>
                    <li><Typography variant="body1">Improved User Experience</Typography></li>
                    <li><Typography variant="body1">Higher Conversion Rates</Typography></li>
                </ul>

                <Typography variant="h6" gutterBottom component="div">
                    Contact Us
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Ready to take your online presence to the next level? Contact us today to learn more about our SEO services.
                </Typography>

                <Grid container justifyContent="center">
                    <Button variant="contained" color="primary">
                        Get Started
                    </Button>
                </Grid>
            </Paper>
        </Container>
    );
}

export default SEOService;
