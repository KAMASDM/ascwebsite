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
  "Hosting Requirements",
  "Additional Services",
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  hosting_type: "",
  additional_services: "",
};

const HostingEnquiryForm = ({ handleClose }) => {
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

  const validateHostingRequirements = () => {
    const hostingErrors = {};
    if (!form.hosting_type)
      hostingErrors.hosting_type = "Hosting type is required";
    setErrors(hostingErrors);
    return Object.keys(hostingErrors).length === 0;
  };

  const validateadditional_servicess = () => {
    const additionalErrors = {};
    if (!form.additional_services)
      additionalErrors.additional_services = "Additional service is required";
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
      isValid = validateadditional_servicess();
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
    setLoading(true);

    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("hosting_type", form.hosting_type);
    data.append("additional_services", form.additional_services);

    try {
      const response = await fetch(
        "https://newone.anantsoftcomputing.com/api/create-hosting-enquiry/",
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
                  name="hosting_type"
                  value={form.hosting_type}
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
                {errors.hosting_type && (
                  <Typography variant="body2" color="error">
                    {errors.hosting_type}
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
                {errors.additional_services && (
                  <Typography variant="body2" color="error">
                    {errors.additional_services}
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

export default HostingEnquiryForm;
