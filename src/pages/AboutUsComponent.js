import React from 'react';
import { Typography, Container, Paper, Grid, Box } from '@mui/material';

function AboutUsComponent() {
    return (
        <Container>
            <Paper sx={{ p: 3, m: 2, bgcolor: 'rgba(255, 255, 255, 0.8)', borderRadius: '12px' }}>
                <Typography variant="h3" gutterBottom component="div">
                    About Us
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    Who We Are
                </Typography>
                <Typography variant="body1" gutterBottom>
                    ASC is a leading provider of innovative solutions, specializing in software development, digital marketing, and IT services. 
                    Our mission is to help businesses succeed in the digital era.
                </Typography>

                <Typography variant="h6" gutterBottom component="div">
                    Our Mission
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Our mission is to empower businesses with cutting-edge technology solutions that drive growth and efficiency. 
                    We believe in building long-term partnerships based on trust and mutual success.
                </Typography>

                <Typography variant="h6" gutterBottom component="div">
                    Our Vision
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Our vision is to be a global leader in technology solutions, known for our innovation, customer-centric approach, and commitment to excellence.
                </Typography>

                <Typography variant="h6" gutterBottom component="div">
                    Our Team
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Our team comprises talented professionals with diverse expertise in software development, digital marketing, and IT services. 
                    We are passionate about delivering solutions that exceed our clients' expectations.
                </Typography>
            </Paper>

            <Box sx={{ mt: 3 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper sx={{ p: 3, bgcolor: 'rgba(255, 255, 255, 0.8)', borderRadius: '12px' }}>
                            <Typography variant="h6" gutterBottom>
                                John Doe
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                CEO
                            </Typography>
                            <Typography variant="body1">
                                John is a visionary leader with over 20 years of experience in technology and business development.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Paper sx={{ p: 3, bgcolor: 'rgba(255, 255, 255, 0.8)', borderRadius: '12px' }}>
                            <Typography variant="h6" gutterBottom>
                                Jane Smith
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                CTO
                            </Typography>
                            <Typography variant="body1">
                                Jane is a tech guru with a passion for innovation and a track record of developing cutting-edge solutions.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Paper sx={{ p: 3, bgcolor: 'rgba(255, 255, 255, 0.8)', borderRadius: '12px' }}>
                            <Typography variant="h6" gutterBottom>
                                Alice Brown
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                CMO
                            </Typography>
                            <Typography variant="body1">
                                Alice is a marketing expert who specializes in digital strategies that drive brand awareness and customer engagement.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default AboutUsComponent;
