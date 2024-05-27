import React from "react";
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
} from "@mui/material";

const steps = ["Contact Information", "Service Type", "Additional Comments"];

const initialValues = {
  name: "",
  email: "",
  phone: "",
  serviceType: "",
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
    serviceType: Yup.string().required("Service type is required"),
  }),
  Yup.object().shape({
    comments: Yup.string(),
  }),
];

const ContactUs = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchemas[activeStep],
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("serviceType", values.serviceType);
      formData.append("comments", values.comments);

      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwR5I9_dpICGaiR6PNeMK2wA4p3YnipM5j5FK_so801nra9ef299XHgvHSZVoz6fjdX/exec",
          {
            method: "POST",
            body: formData,
          }
        );
        if (response.ok) {
          resetForm();
          navigate("/");
          toast.success("Submitted Successfully.");
        } else {
          toast.error("Submission failed, Please try again.");
        }
      } catch (error) {
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
                      formik.touched.serviceType &&
                      Boolean(formik.errors.serviceType)
                    }
                  >
                    <RadioGroup
                      row
                      name="serviceType"
                      value={formik.values.serviceType}
                      onChange={handleChange}
                      onBlur={formik.handleBlur}
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
                    {formik.touched.serviceType &&
                      formik.errors.serviceType && (
                        <Typography color="error">
                          {formik.errors.serviceType}
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
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ContactUs;
