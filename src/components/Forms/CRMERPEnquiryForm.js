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
  "Basic Information",
  "Project Requirements",
  "Additional Services",
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  additionalService: "",
};

const CRMERPEnquiryForm = ({ handleClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateBasicInfo = () => {
    const basicErrors = {};
    if (!form.name.trim()) basicErrors.name = "Name is required";
    if (!form.email.trim()) basicErrors.email = "Email is required";
    if (!form.phone.trim()) basicErrors.phone = "Phone is required";
    setErrors(basicErrors);
    return Object.keys(basicErrors).length === 0;
  };

  const validateProjectRequirements = () => {
    const projectErrors = {};
    if (!form.projectType)
      projectErrors.projectType = "Project type is required";
    setErrors(projectErrors);
    return Object.keys(projectErrors).length === 0;
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
      isValid = validateBasicInfo();
    } else if (activeStep === 1) {
      isValid = validateProjectRequirements();
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
    data.append("projectType", form.projectType);
    data.append("additionalService", form.additionalService);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyEIeNgCsT01bfCEe82WvGLx9zKoV0FtiMKoL_PuXqnf7Qz1lGf3NpxQwo5cX2eALkm/exec",
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
        CRM - ERP Enquiry Form
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
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="CRM System"
                    control={<Radio />}
                    label="CRM System"
                  />
                  <FormControlLabel
                    value="ERP"
                    control={<Radio />}
                    label="ERP System"
                  />
                  <FormControlLabel
                    value="Both CRM and ERP"
                    control={<Radio />}
                    label="Both CRM and ERP"
                  />
                </RadioGroup>
                {errors.projectType && (
                  <Typography variant="body2" color="error">
                    {errors.projectType}
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
                    value="System Integration"
                    control={<Radio />}
                    label="System Integration"
                  />
                  <FormControlLabel
                    value="Customization"
                    control={<Radio />}
                    label="Customization"
                  />
                  <FormControlLabel
                    value="Training and Support"
                    control={<Radio />}
                    label="Training and Support"
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

export default CRMERPEnquiryForm;
