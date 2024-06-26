import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Container,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { toast } from "react-toastify";

const steps = ["Basic Information", "Project Details", "Additional Services"];

const initialState = {
  name: "",
  email: "",
  phone: "",
  project_type: "",
  additional_services: "",
};

const WebDevelopmentForm = ({ handleClose }) => {
  const [form, setForm] = useState(initialState);
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 0) {
      if (!form.name.trim()) newErrors.name = "Name is required";
      if (!form.email.trim()) newErrors.email = "Email is required";
      if (!form.phone.trim()) newErrors.phone = "Phone is required";
    } else if (step === 1) {
      if (!form.project_type) newErrors.project_type = "Project type is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
    data.append("project_type", form.project_type);
    data.append("additional_services", form.additional_services);

    try {
      const response = await fetch(
        "https://newone.anantsoftcomputing.com/api/create-webdevelopment-enquiry/",
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

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
      <Typography variant="h5" align="center" sx={{ mt: 4, mb: 2 }}>
        Web Development Enquiry Form
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
                  name="project_type"
                  value={form.project_type}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="E-commerce"
                    control={<Radio />}
                    label="E-commerce"
                  />
                  <FormControlLabel
                    value="Business Website"
                    control={<Radio />}
                    label="Business Website"
                  />
                  <FormControlLabel
                    value="Portfolio Website"
                    control={<Radio />}
                    label="Portfolio Website"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
                {errors.project_type && (
                  <Typography variant="body2" color="error">
                    {errors.project_type}
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
                  name="additional_services"
                  value={form.additional_services}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Search Engine Optimization (SEO)"
                    control={<Radio />}
                    label="Search Engine Optimization (SEO)"
                  />
                  <FormControlLabel
                    value="Ongoing Maintenance"
                    control={<Radio />}
                    label="Ongoing Maintenance"
                  />
                </RadioGroup>
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
            disabled={loading}
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

export default WebDevelopmentForm;
