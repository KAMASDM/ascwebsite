import React, { useState } from 'react';
import { Typography, Container, Tab, Tabs, Box, Card, CardContent, Grid, CardMedia, Button } from '@mui/material';
import {  TabContext } from '@mui/lab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function CaseStudyPage() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Sample data for case studies
    const serviceCaseStudies = [
        { name: "SEO Success", description: "How we improved a client's traffic by 300%.", imageUrl: "https://source.unsplash.com/random/300x200?business" },
        { name: "Web Development Win", description: "Redesigning a website to enhance usability and increase conversions.", imageUrl: "https://source.unsplash.com/random/300x200?coding" },
    ];

    const solutionCaseStudies = [
        { name: "Cloud Integration", description: "Implementing a scalable cloud solution for a growing startup.", imageUrl: "https://source.unsplash.com/random/300x200?cloud" },
        { name: "Digital Marketing Strategy", description: "A comprehensive digital campaign that boosted brand awareness significantly.", imageUrl: "https://source.unsplash.com/random/300x200?marketing" },
    ];

    return (
        <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom>
                Case Studies
            </Typography>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="case study tabs">
                        <Tab label="Services" value="1" {...a11yProps(0)} />
                        <Tab label="Solutions" value="2" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value="1" index="0">
                    <Grid container spacing={4}>
                        {serviceCaseStudies.map((study, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={study.imageUrl}
                                        alt={study.name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {study.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {study.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </TabPanel>
                <TabPanel value="2" index="1">
                    <Grid container spacing={4}>
                        {solutionCaseStudies.map((study, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={study.imageUrl}
                                        alt={study.name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {study.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {study.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </TabPanel>
            </TabContext>
        </Container>
    );
}

export default CaseStudyPage;
