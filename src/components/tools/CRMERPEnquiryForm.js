import React, { useState } from 'react';
import {
  Stepper, Step, StepLabel, Button, Typography, Container,
  TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box, Checkbox
} from '@mui/material';

function getSteps() {
    return ['Basic Information', 'Project Requirements', 'Additional Services'];
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
                    <FormLabel component="legend">Type of Project</FormLabel>
                    <RadioGroup
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="CRM" control={<Radio />} label="CRM System" />
                        <FormControlLabel value="ERP" control={<Radio />} label="ERP System" />
                        <FormControlLabel value="Both" control={<Radio />} label="Both CRM and ERP" />
                    </RadioGroup>
                </FormControl>
            );
        case 2:
            return (
                <FormControl component="fieldset" fullWidth margin="normal">
                    <FormLabel component="legend">Additional Services</FormLabel>
                    <FormControlLabel
                        control={<Checkbox checked={form.integration} onChange={handleChange} name="integration" />}
                        label="System Integration"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={form.customization} onChange={handleChange} name="customization" />}
                        label="Customization"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={form.training} onChange={handleChange} name="training" />}
                        label="Training and Support"
                    />
                </FormControl>
            );
        default:
            return 'Unknown step';
    }
}

function CRMERPEnquiryForm() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [activeStep, setActiveStep] = useState(0);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        integration: false,
        customization: false,
        training: false
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
            integration: false,
            customization: false,
            training: false
        });
    };

    return (
        <Container>
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
        </Container>
    );
}

export default CRMERPEnquiryForm;
