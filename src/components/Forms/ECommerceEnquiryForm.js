import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Checkbox,
} from "@mui/material";

const steps = [
  "Contact Information",
  "E-commerce Details",
  "Additional Features",
];

function getStepContent(stepIndex, form, handleChange) {
  switch (stepIndex) {
    case 0:
      return (
        <Box sx={{ padding: 3 }}>
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
        <Box sx={{ padding: 3 }}>
          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">
              Type of E-commerce Platform
            </FormLabel>
            <RadioGroup
              aria-label="platformType"
              name="platformType"
              value={form.platformType}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="smallBusiness"
                control={<Radio />}
                label="Small Business"
              />
              <FormControlLabel
                value="enterprise"
                control={<Radio />}
                label="Enterprise"
              />
              <FormControlLabel
                value="marketplace"
                control={<Radio />}
                label="Marketplace"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      );
    case 2:
      return (
        <Box sx={{ padding: 3 }}>
          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">
              Select Additional Features:
            </FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={form.paymentIntegration}
                  onChange={handleChange}
                  name="paymentIntegration"
                />
              }
              label="Payment Integration"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={form.customization}
                  onChange={handleChange}
                  name="customization"
                />
              }
              label="Customization Options"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={form.analytics}
                  onChange={handleChange}
                  name="analytics"
                />
              }
              label="Analytics Tools"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={form.crmIntegration}
                  onChange={handleChange}
                  name="crmIntegration"
                />
              }
              label="CRM Integration"
            />
          </FormControl>
        </Box>
      );
    default:
      return "Unknown step";
  }
}

const ECommerceEnquiryForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    platformType: "",
    paymentIntegration: false,
    customization: false,
    analytics: false,
    crmIntegration: false,
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
      name: "",
      email: "",
      phone: "",
      platformType: "",
      paymentIntegration: false,
      customization: false,
      analytics: false,
      crmIntegration: false,
    });
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ pt: 3, pb: 2 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <Box sx={{ mt: 2, mb: 1, textAlign: "center" }}>
            <Typography>All steps completed - you're finished</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        ) : (
          <div>
            {getStepContent(activeStep, form, handleChange)}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 2,
                justifyContent: "flex-end",
                m: 3,
              }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Button onClick={handleNext} variant="contained" color="primary">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </div>
        )}
      </div>
    </Container>
  );
}

export default ECommerceEnquiryForm;
