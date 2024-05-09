import React, { useState } from 'react';
import {
  Stepper, Step, StepLabel, Button, Typography, Container, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box, Checkbox,
  Card, CardContent
} from '@mui/material';

function getSteps() {
    return ['Contact Information', 'Hosting Requirements', 'Additional Services'];
}

function getStepContent(stepIndex, form, handleChange) {
    switch (stepIndex) {
        case 0:
            return (
                <Box padding={2}>
                    <TextField
                        label="Your Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        label="Phone Number"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                </Box>
            );
        case 1:
            return (
                <FormControl component="fieldset" fullWidth margin="normal">
                    <FormLabel component="legend">Hosting Type</FormLabel>
                    <RadioGroup
                        name="hostingType"
                        value={form.hostingType}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Shared" control={<Radio />} label="Shared Hosting" />
                        <FormControlLabel value="VPS" control={<Radio />} label="VPS Hosting" />
                        <FormControlLabel value="Dedicated" control={<Radio />} label="Dedicated Server" />
                        <FormControlLabel value="Cloud" control={<Radio />} label="Cloud Hosting" />
                    </RadioGroup>
                </FormControl>
            );
        case 2:
            return (
                <FormControl component="fieldset" fullWidth margin="normal">
                    <FormLabel component="legend">Select Additional Features:</FormLabel>
                    <FormControlLabel
                        control={<Checkbox checked={form.ssl} onChange={handleChange} name="ssl" />}
                        label="SSL Certificates"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={form.backup} onChange={handleChange} name="backup" />}
                        label="Automatic Backups"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={form.support} onChange={handleChange} name="support" />}
                        label="24/7 Support"
                    />
                </FormControl>
            );
        default:
            return 'Unknown step';
    }
}

function HostingEnquiryForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        hostingType: '',
        ssl: false,
        backup: false,
        support: false
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
            hostingType: '',
            ssl: false,
            backup: false,
            support: false
        });
    };

    return (
        <Container>
            <Card sx={{ p: 2, my: 2 }}>
                <CardContent>
            <Typography variant="h4" gutterBottom align="center">Hosting Enquiry Form</Typography>


            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            

            <div>
                {activeStep === steps.length ? (
                    <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                        <Typography>All steps completed - you're finished</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                ) : (
                    <div>
                        {getStepContent(activeStep, form, handleChange)}
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'flex-end', mt: 2 }}>
                            <Button disabled={activeStep === 0} onClick={handleBack}>
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                            </Button>
                        </Box>
                    </div>
                )}
            </div>
            </CardContent>
            </Card>
        </Container>
    );
}

export default HostingEnquiryForm;
