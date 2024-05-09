import React, { useState } from 'react';
import {
  Stepper, Step, StepLabel, Button, Typography, Container, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box, Checkbox, TextareaAutosize,
  Card,
  CardContent
} from '@mui/material';

function getSteps() {
    return ['Contact Information', 'Service Inquiry', 'Additional Comments'];
}

function getStepContent(stepIndex, form, handleChange, handleServiceChange) {
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
                    <FormLabel component="legend">Select Service</FormLabel>
                    <RadioGroup
                        name="serviceType"
                        value={form.serviceType}
                        onChange={handleServiceChange}
                    >
                        <FormControlLabel value="SEO" control={<Radio />} label="SEO Services" />
                        <FormControlLabel value="Web Development" control={<Radio />} label="Web Development" />
                        <FormControlLabel value="Mobile App Development" control={<Radio />} label="Mobile App Development" />
                        <FormControlLabel value="Hosting" control={<Radio />} label="Hosting Services" />
                    </RadioGroup>
                </FormControl>
            );
        case 2:
            return (
                <Box padding={2}>
                    <Typography variant="body1" gutterBottom>Additional Comments:</Typography>
                    <TextareaAutosize
                        minRows={3}
                        placeholder="Please enter any specific queries or requirements here."
                        style={{ width: '100%' }}
                        name="comments"
                        value={form.comments}
                        onChange={handleChange}
                    />
                </Box>
            );
        default:
            return 'Unknown step';
    }
}

function ContactUsComponent() {
    const [activeStep, setActiveStep] = useState(0);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        comments: ''
    });

    const steps = getSteps();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleServiceChange = (event) => {
        handleChange(event);  // You can handle additional logic here if needed
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
            serviceType: '',
            comments: ''
        });
    };

    return (
        <Container>
            <Card sx={{ p: 2, mb: 2, marginTop:3}}>
            <Typography variant="h4" gutterBottom align="center">
                Contact Us
            </Typography>
            <CardContent>
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
                        <Typography>All steps completed - Thank you for contacting us.</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                ) : (
                    <div>
                        {getStepContent(activeStep, form, handleChange, handleServiceChange)}
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

export default ContactUsComponent;
