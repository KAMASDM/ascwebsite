import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
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
  Card,
  CardContent,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress,
} from "@mui/material";

const steps = ["Contact Information", "Service Type", "Additional Comments"];

const initialValues = {
  name: "",
  email: "",
  phone: "",
  service_type: "",
  comments: "",
};

const validationSchemas = [
  Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\d{10}$/, "Phone number must be 10 digits"),
  }),
  Yup.object().shape({
    service_type: Yup.string().required("Service type is required"),
  }),
  Yup.object().shape({
    comments: Yup.string(),
  }),
];

const ContactUs = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchemas[activeStep],
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("service_type", values.service_type);
      formData.append("comments", values.comments);

      setLoading(true);
      try {
        const response = await fetch(
          "https://newone.anantsoftcomputing.com/api/create-contact/",
          {
            method: "POST",
            body: formData,
          }
        );
        setLoading(false);
        if (response.ok) {
          resetForm();
          navigate("/");
          toast.success("Submitted Successfully.");
        } else {
          toast.error("Submission failed, Please try again.");
        }
      } catch (error) {
        setLoading(false);
        console.error("An error occurred while submitting the form:", error);
      }
    },
  });

  const handleNext = () => {
    if (activeStep < steps.length - 1 && formik.isValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      formik.handleSubmit();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ m: 4 }}>
        Contact Us
      </Typography>
      <Card
        sx={{
          m: 4,
          boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
        }}
      >
        <CardContent>
          <Stepper sx={{ m: 2 }} activeStep={activeStep} alternativeLabel>
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
                    value={formik.values.name}
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                  <TextField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  <TextField
                    label="Phone Number"
                    name="phone"
                    type="text"
                    value={formik.values.phone}
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </>
              )}
              {activeStep === 1 && (
                <Box display="flex" justifyContent="center">
                  <FormControl
                    error={
                      formik.touched.service_type &&
                      Boolean(formik.errors.service_type)
                    }
                  >
                    <RadioGroup
                      row
                      name="service_type"
                      value={formik.values.service_type}
                      onChange={handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <FormControlLabel
                        value="SEO Services"
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
                    {formik.touched.service_type &&
                      formik.errors.service_type && (
                        <Typography color="error">
                          {formik.errors.service_type}
                        </Typography>
                      )}
                  </FormControl>
                </Box>
              )}
              {activeStep === 2 && (
                <Box>
                  <TextField
                    label="Comments"
                    name="comments"
                    multiline
                    rows={6}
                    placeholder="Please enter any specific queries or requirements here."
                    variant="outlined"
                    fullWidth
                    value={formik.values.comments}
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
                onClick={handleNext}
                disabled={loading}
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
                {loading && (
                  <CircularProgress size={24} sx={{ ml: 2 }} />
                )}
              </Button>
            </Box>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ContactUs;