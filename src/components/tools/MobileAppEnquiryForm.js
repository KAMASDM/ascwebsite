import React, { useState } from 'react';
import {
  Stepper, Step, StepLabel, Button, Typography, Container, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box, Checkbox,
  Card,
  CardContent
} from '@mui/material';

function getSteps() {
    return ['Contact Information', 'App Specifications', 'Additional Services'];
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
                    <FormLabel component="legend">Type of App</FormLabel>
                    <RadioGroup
                        name="appType"
                        value={form.appType}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Business" control={<Radio />} label="Business" />
                        <FormControlLabel value="Educational" control={<Radio />} label="Educational" />
                        <FormControlLabel value="E-commerce" control={<Radio />} label="E-commerce" />
                        <FormControlLabel value="Health & Fitness" control={<Radio />} label="Health & Fitness" />
                        <FormControlLabel value="Social Media" control={<Radio />} label="Social Media" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            );
        case 2:
            return (
                <FormControl component="fieldset" fullWidth margin="normal">
                    <FormLabel component="legend">Select Additional Features:</FormLabel>
                    <FormControlLabel
                        control={<Checkbox checked={form.pushNotifications} onChange={handleChange} name="pushNotifications" />}
                        label="Push Notifications"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={form.multiLanguageSupport} onChange={handleChange} name="multiLanguageSupport" />}
                        label="Multi-language Support"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={form.paymentIntegration} onChange={handleChange} name="paymentIntegration" />}
                        label="Payment Integration"
                    />
                </FormControl>
            );
        default:
            return 'Unknown step';
    }
}

function MobileAppEnquiryForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        appType: '',
        pushNotifications: false,
        multiLanguageSupport: false,
        paymentIntegration: false
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
            appType: '',
            pushNotifications: false,
            multiLanguageSupport: false,
            paymentIntegration: false
        });
    };

    return (
        <Container>
            <Card sx={{ p: 2, mb: 2, marginTop:3}}>
                <CardContent>
                <Typography variant="h5" gutterBottom align='center' paddingBottom={2}>
                    Mobile App Enquiry Form
                </Typography>
            
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
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
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

export default MobileAppEnquiryForm;
