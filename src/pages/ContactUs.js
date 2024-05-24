import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
  TextField,
  Box,
  CardContent,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const steps = ["Contact Information", "Service Type", "Additional Comments"];

const ContactUs = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    comments: "",
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (files) {
      setForm((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("serviceType", form.serviceType);
    formData.append("comments", form.comments);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwR5I9_dpICGaiR6PNeMK2wA4p3YnipM5j5FK_so801nra9ef299XHgvHSZVoz6fjdX/exec",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        setForm({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          comments: "",
        });
        navigate("/");
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Contact Us
      </Typography>
      <CardContent>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          <Box padding={2}>
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
                  type="number"
                  value={form.phone}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
              </>
            )}
            {activeStep === 1 && (
              <Box display="flex" justifyContent="center">
                <FormControl component="fieldset" fullWidth margin="normal">
                  <RadioGroup
                    row
                    name="serviceType"
                    value={form.serviceType}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="SEO"
                      control={<Radio />}
                      label="SEO Services"
                    />
                    <FormControlLabel
                      value="Web Development"
                      control={<Radio />}
                      label="Web Development"
                    />
                    <FormControlLabel
                      value="Mobile App Development"
                      control={<Radio />}
                      label="Mobile App Development"
                    />
                    <FormControlLabel
                      value="Hosting"
                      control={<Radio />}
                      label="Hosting Services"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            )}
            {activeStep === 2 && (
              <Box display="flex" justifyContent="center">
                <TextField
                  label="Comments"
                  name="comments"
                  multiline
                  rows={4}
                  placeholder="Please enter any specific queries or requirements here."
                  variant="outlined"
                  fullWidth
                  value={form.comments}
                  onChange={handleChange}
                />
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
      </CardContent>
    </Container>
  );
};

export default ContactUs;
