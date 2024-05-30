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
  "E-commerce Details",
  "Additional Features",
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  e_commerce_type: "",
  additional_features: "",
};

const ECommerceEnquiryForm = ({ handleClose }) => {
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

  const validateECommerceDetails = () => {
    const eCommerceErrors = {};
    if (!form.e_commerce_type)
      eCommerceErrors.e_commerce_type = "Platform type is required";
    setErrors(eCommerceErrors);
    return Object.keys(eCommerceErrors).length === 0;
  };

  const validateAdditionalFeatures = () => {
    const additionalErrors = {};
    if (!form.additional_features)
      additionalErrors.additional_features = "Additional service is required";
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
    setLoading(true);

    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("e_commerce_type", form.e_commerce_type);
    data.append("additional_features", form.additional_features);

    try {
      const response = await fetch(
        "https://newone.anantsoftcomputing.com/api/create-ecommerce-enquiry/",
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
                  aria-label="e_commerce_type"
                  name="e_commerce_type"
                  value={form.e_commerce_type}
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
                {errors.e_commerce_type && (
                  <Typography variant="body2" color="error">
                    {errors.e_commerce_type}
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
                  name="additional_features"
                  value={form.additional_features}
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
                {errors.additional_features && (
                  <Typography variant="body2" color="error">
                    {errors.additional_features}
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

export default ECommerceEnquiryForm;
