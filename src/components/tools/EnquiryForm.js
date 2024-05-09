import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Container, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box,Checkbox } from '@mui/material';

function getSteps() {
    return ['Basic Information', 'Project Details', 'Additional Services'];
}

function getStepContent(stepIndex, form, handleChange) {
    switch (stepIndex) {
        case 0:
            return (
                <Box>
                    <TextField
                        label="Your Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Phone Number"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Box>
            );
        case 1:
            return (
                <FormControl component="fieldset" margin="normal">
                    <FormLabel component="legend">Type of Project</FormLabel>
                    <RadioGroup
                        aria-label="projectType"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="ecommerce" control={<Radio />} label="E-commerce" />
                        <FormControlLabel value="business" control={<Radio />} label="Business Website" />
                        <FormControlLabel value="portfolio" control={<Radio />} label="Portfolio Website" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            );
        case 2:
            return (
                <FormControl component="fieldset" margin="normal">
                    <FormLabel component="legend">Additional Services</FormLabel>
                    <FormControlLabel
                        control={<Checkbox checked={form.seo} onChange={handleChange} name="seo" />}
                        label="Search Engine Optimization (SEO)"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={form.maintenance} onChange={handleChange} name="maintenance" />}
                        label="Ongoing Maintenance"
                    />
                </FormControl>
            );
        default:
            return 'Unknown step';
    }
}

function EnquiryForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        seo: false,
        maintenance: false
    });

    const steps = getSteps();

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setForm({
            name: '',
            email: '',
            phone: '',
            projectType: '',
            seo: false,
            maintenance: false
        });
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you're finished</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        {getStepContent(activeStep, form, handleChange)}
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </div>
                )}
            </div>
        </Container>
    );
}

export default EnquiryForm;
