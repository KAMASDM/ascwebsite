import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Button,
  Box,
  Card,
} from "@mui/material";

const Careers = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is required")
      .min(2, "First Name must be at least 2 characters"),
    lastName: Yup.string()
      .required("Last Name is required")
      .min(2, "Last Name must be at least 2 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(/^[0-9]{10}$/, "Phone Number must be exactly 10 digits"),
    education: Yup.string().required("Education is required"),
    experience: Yup.string().required("Work Experience is required"),
    skills: Yup.string(),
    resume: Yup.mixed().required("Resume is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      education: "",
      experience: "",
      skills: "",
      resume: null,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const data = new FormData();
      data.append("firstName", values.firstName);
      data.append("lastName", values.lastName);
      data.append("email", values.email);
      data.append("phone", values.phone);
      data.append("education", values.education);
      data.append("experience", values.experience);
      data.append("skills", values.skills);
      data.append("resume", values.resume);

      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwTsAryqmZZsCcwX3blAm0PtC8sqD2j9YDYEXDRXx8BJeVMdc1K2de7ayNdYdGzlNKz/exec",
          {
            method: "POST",
            body: data,
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

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" sx={{ mt: 4, mb: 2 }}>
        Apply for a Position
      </Typography>
      <Card
        sx={{
          m: 4,
          p: 4,
          boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
        }}
      >
        <Box
          onSubmit={formik.handleSubmit}
          component="form"
          sx={{ mt: 4, mb: 2 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="First Name"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Last Name"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="email"
                label="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Phone Number"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Education"
                name="education"
                value={formik.values.education}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.education && Boolean(formik.errors.education)
                }
                helperText={formik.touched.education && formik.errors.education}
                multiline
                rows={3}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Work Experience"
                name="experience"
                value={formik.values.experience}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.experience && Boolean(formik.errors.experience)
                }
                helperText={
                  formik.touched.experience && formik.errors.experience
                }
                multiline
                rows={3}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Skills"
                name="skills"
                value={formik.values.skills}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                multiline
                rows={2}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                component="label"
                error={formik.touched.resume && Boolean(formik.errors.resume)}
                helperText={formik.touched.resume && formik.errors.resume}
              >
                Upload Resume
                <input
                  type="file"
                  name="resume"
                  hidden
                  onChange={(event) => {
                    formik.setFieldValue(
                      "resume",
                      event.currentTarget.files[0]
                    );
                  }}
                />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Container>
  );
};

export default Careers;
