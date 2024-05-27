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
  "E-commerce Details",
  "Additional Features",
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  platformType: "",
  additionalService: "",
};

const ECommerceEnquiryForm = ({ handleClose }) => {
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

  const validateECommerceDetails = () => {
    const eCommerceErrors = {};
    if (!form.platformType)
      eCommerceErrors.platformType = "Platform type is required";
    setErrors(eCommerceErrors);
    return Object.keys(eCommerceErrors).length === 0;
  };

  const validateAdditionalFeatures = () => {
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
      isValid = validateECommerceDetails();
    } else if (activeStep === 2) {
      isValid = validateAdditionalFeatures();
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
    data.append("platformType", form.platformType);
    data.append("additionalService", form.additionalService);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxJPLfHRcl3_ZSl6e1LI-uJ_b2bV9uOlJd5nG-dFAPnygwjGiHImEeQuZLIrPHFOgy0oQ/exec",
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
        E-Commerce Enquiry Form
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
                  aria-label="platformType"
                  name="platformType"
                  value={form.platformType}
                  onChange={handleChange}
                  row
                >
                  <FormControlLabel
                    value="Small Business"
                    control={<Radio />}
                    label="Small Business"
                  />
                  <FormControlLabel
                    value="Enterprise"
                    control={<Radio />}
                    label="Enterprise"
                  />
                  <FormControlLabel
                    value="Marketplace"
                    control={<Radio />}
                    label="Marketplace"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
                {errors.platformType && (
                  <Typography variant="body2" color="error">
                    {errors.platformType}
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
                    value="Payment Integration"
                    control={<Radio />}
                    label="Payment Integration"
                  />
                  <FormControlLabel
                    value="Customization Options"
                    control={<Radio />}
                    label="Customization Options"
                  />
                  <FormControlLabel
                    value="Analytics Tools"
                    control={<Radio />}
                    label="Analytics Tools"
                  />
                  <FormControlLabel
                    value="CRM Integration"
                    control={<Radio />}
                    label="CRM Integration"
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
            m: 3,
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

export default ECommerceEnquiryForm;
