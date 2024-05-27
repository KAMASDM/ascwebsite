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
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
import { toast } from "react-toastify";

const steps = [
  "Contact Information",
  "Hosting Requirements",
  "Additional Services",
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  hostingType: "",
  additionalService: "",
};

const HostingEnquiryForm = ({ handleClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateContactInfo = () => {
    const contactErrors = {};
    if (!form.name.trim()) contactErrors.name = "Name is required";
    if (!form.email.trim()) contactErrors.email = "Email is required";
    if (!form.phone.trim()) contactErrors.phone = "Phone is required";
    setErrors(contactErrors);
    return Object.keys(contactErrors).length === 0;
  };

  const validateHostingRequirements = () => {
    const hostingErrors = {};
    if (!form.hostingType)
      hostingErrors.hostingType = "Hosting type is required";
    setErrors(hostingErrors);
    return Object.keys(hostingErrors).length === 0;
  };

  const validateAdditionalServices = () => {
    const additionalErrors = {};
    if (!form.additionalService)
      additionalErrors.additionalService = "Additional service is required";
    setErrors(additionalErrors);
    return Object.keys(additionalErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    let isValid = false;
    if (activeStep === 0) {
      isValid = validateContactInfo();
    } else if (activeStep === 1) {
      isValid = validateHostingRequirements();
    } else if (activeStep === 2) {
      isValid = validateAdditionalServices();
    }

    if (isValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setErrors({});
    handleClose();
    setActiveStep(0);
    setForm(initialState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("hostingType", form.hostingType);
    data.append("additionalService", form.additionalService);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxgznUqqmUC9xsXaJuDjD2HkNf0zS8iKqm8Q8hmv0hOyLU2i_Glhc8MF5iBiSqCvA/exec",
        {
          method: "POST",
          body: data,
        }
      );
      if (response.ok) {
        handleReset();
        toast.success("Submitted Successfully.");
      } else {
        toast.error("Submission failed, Please try again.");
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h5" align="center" sx={{ mt: 4, mb: 2 }}>
        Hosting Enquiry Form
      </Typography>
      <Stepper
        sx={{ marginBottom: 2 }}
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <Box sx={{ padding: 2 }}>
          {activeStep === 0 && (
            <>
              <TextField
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name}
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
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </>
          )}
          {activeStep === 1 && (
            <Box display="flex" justifyContent="center">
              <FormControl component="fieldset" margin="normal">
                <RadioGroup
                  row
                  name="hostingType"
                  value={form.hostingType}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Shared Hosting"
                    control={<Radio />}
                    label="Shared Hosting"
                  />
                  <FormControlLabel
                    value="VPS Hosting"
                    control={<Radio />}
                    label="VPS Hosting"
                  />
                  <FormControlLabel
                    value="Dedicated Server"
                    control={<Radio />}
                    label="Dedicated Server"
                  />
                  <FormControlLabel
                    value="Cloud Hosting"
                    control={<Radio />}
                    label="Cloud Hosting"
                  />
                </RadioGroup>
                {errors.hostingType && (
                  <Typography variant="body2" color="error">
                    {errors.hostingType}
                  </Typography>
                )}
              </FormControl>
            </Box>
          )}
          {activeStep === 2 && (
            <Box display="flex" justifyContent="center">
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  name="additionalService"
                  value={form.additionalService}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="SSL Certificates"
                    control={<Radio />}
                    label="SSL Certificates"
                  />
                  <FormControlLabel
                    value="Automatic Backups"
                    control={<Radio />}
                    label="Automatic Backups"
                  />
                  <FormControlLabel
                    value="24/7 Support"
                    control={<Radio />}
                    label="24/7 Support"
                  />
                </RadioGroup>
                {errors.additionalService && (
                  <Typography variant="body2" color="error">
                    {errors.additionalService}
                  </Typography>
                )}
              </FormControl>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            pt: 2,
            justifyContent: "flex-end",
            mt: 2,
          }}
        >
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={
              activeStep === steps.length - 1 ? handleSubmit : handleNext
            }
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </Box>
      </div>
    </Container>
  );
};

export default HostingEnquiryForm;
