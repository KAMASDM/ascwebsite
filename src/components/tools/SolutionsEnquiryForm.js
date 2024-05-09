import React, { useState } from 'react';
import {
  Stepper, Step, StepLabel, Button, Typography, Container, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box, Checkbox, TextareaAutosize
} from '@mui/material';

function getSteps() {
    return ['Contact Information', 'Select Your Solution', 'Additional Requirements'];
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
                    <FormLabel component="legend">Please select the solution you are interested in:</FormLabel>
                    <RadioGroup
                        name="solutionType"
                        value={form.solutionType}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Cloud Solutions" control={<Radio />} label="Cloud Solutions" />
                        <FormControlLabel value="IT Consulting" control={<Radio />} label="IT Consulting" />
                        <FormControlLabel value="Custom Software Development" control={<Radio />} label="Custom Software Development" />
                        <FormControlLabel value="Digital Marketing" control={<Radio />} label="Digital Marketing" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other (Please specify below)" />
                    </RadioGroup>
                    {form.solutionType === 'Other' && (
                        <TextField
                            label="Specify Other Solution"
                            name="otherSolution"
                            value={form.otherSolution}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                    )}
                </FormControl>
            );
        case 2:
            return (
                <Box padding={2}>
                    <Typography variant="body1" gutterBottom>Additional Requirements (optional):</Typography>
                    <TextareaAutosize
                        minRows={3}
                        placeholder="Describe any specific requirements or questions here."
                        style={{ width: '100%' }}
                        name="additionalRequirements"
                        value={form.additionalRequirements}
                        onChange={handleChange}
                    />
                </Box>
            );
        default:
            return 'Unknown step';
    }
}

function SolutionsEnquiryForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        solutionType: '',
        otherSolution: '',
        additionalRequirements: ''
    });

    const steps = getSteps();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prev => ({
            ...prev,
            [name]: value
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
            solutionType: '',
            otherSolution: '',
            additionalRequirements: ''
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
                        <Typography>All steps completed - your enquiry has been submitted.</Typography>
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
        </Container>
    );
}

export default SolutionsEnquiryForm;
