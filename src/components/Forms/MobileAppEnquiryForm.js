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
  CircularProgress,
} from "@mui/material";
import { toast } from "react-toastify";

const steps = [
  "Contact Information",
  "App Specifications",
  "Additional Services",
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  appType: "",
  additionalService: "",
};

const MobileAppEnquiryForm = ({ handleClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateContactInfo = () => {
    const contactErrors = {};
    if (!form.name.trim()) contactErrors.name = "Name is required";
    if (!form.email.trim()) contactErrors.email = "Email is required";
    if (!form.phone.trim()) contactErrors.phone = "Phone is required";
    setErrors(contactErrors);
    return Object.keys(contactErrors).length === 0;
  };

  const validateAppSpecifications = () => {
    const appErrors = {};
    if (!form.appType) appErrors.appType = "App type is required";
    setErrors(appErrors);
    return Object.keys(appErrors).length === 0;
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
      isValid = validateAppSpecifications();
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
    handleClose();
    setErrors({});
    setActiveStep(0);
    setForm(initialState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("appType", form.appType);
    data.append("additionalService", form.additionalService);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyp_KnOJASiVFNt8IOd4F14aNfe5_JjALw_Mdfvgz9PbrDd52IViv8Z4hNcfCFGICQJ/exec",
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
      toast.error("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h5" align="center" sx={{ mt: 4, mb: 2 }}>
        Mobile App Enquiry Form
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
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  name="appType"
                  value={form.appType}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Business"
                    control={<Radio />}
                    label="Business"
                  />
                  <FormControlLabel
                    value="Educational"
                    control={<Radio />}
                    label="Educational"
                  />
                  <FormControlLabel
                    value="E-commerce"
                    control={<Radio />}
                    label="E-commerce"
                  />
                  <FormControlLabel
                    value="Health & Fitness"
                    control={<Radio />}
                    label="Health & Fitness"
                  />
                  <FormControlLabel
                    value="Social Media"
                    control={<Radio />}
                    label="Social Media"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
                {errors.appType && (
                  <Typography variant="body2" color="error">
                    {errors.appType}
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
                    value="Push Notifications"
                    control={<Radio />}
                    label="Push Notifications"
                  />
                  <FormControlLabel
                    value="Multi Language Support"
                    control={<Radio />}
                    label="Multi Language Support"
                  />
                  <FormControlLabel
                    value="Payment Integration"
                    control={<Radio />}
                    label="Payment Integration"
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
            {activeStep === steps.length - 1 ? (
              loading ? (
                <CircularProgress size={24} />
              ) : (
                "Submit"
              )
            ) : (
              "Next"
            )}
          </Button>
        </Box>
      </div>
    </Container>
  );
};

export default MobileAppEnquiryForm;
