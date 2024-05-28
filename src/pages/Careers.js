import React, { useState } from "react";
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
  CircularProgress,
} from "@mui/material";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  education: "",
  work_experience: "",
  skills: "",
  upload_resume: null,
};

const validationSchema = Yup.object({
  first_name: Yup.string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters"),
  last_name: Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone Number is required")
    .matches(/^[0-9]{10}$/, "Phone Number must be exactly 10 digits"),
  education: Yup.string().required("Education is required"),
  work_experience: Yup.string().required("Work Experience is required"),
  skills: Yup.string(),
  upload_resume: Yup.mixed().required("Resume is required"),
});

const Careers = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const data = new FormData();
      data.append("first_name", values.first_name);
      data.append("last_name", values.last_name);
      data.append("email", values.email);
      data.append("phone", values.phone);
      data.append("education", values.education);
      data.append("work_experience", values.work_experience);
      data.append("skills", values.skills);
      data.append("upload_resume", values.upload_resume);

      setLoading(true);
      try {
        const response = await fetch(
          "https://newone.anantsoftcomputing.com/api/create-career/",
          {
            method: "POST",
            body: data,
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
        toast.error("An error occurred, Please try again.");
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
                name="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.first_name && Boolean(formik.errors.first_name)
                }
                helperText={formik.touched.first_name && formik.errors.first_name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Last Name"
                name="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.last_name && Boolean(formik.errors.last_name)
                }
                helperText={formik.touched.last_name && formik.errors.last_name}
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
                name="work_experience"
                value={formik.values.work_experience}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.work_experience && Boolean(formik.errors.work_experience)
                }
                helperText={
                  formik.touched.work_experience && formik.errors.work_experience
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
                error={formik.touched.upload_resume && Boolean(formik.errors.upload_resume)}
                helperText={formik.touched.upload_resume && formik.errors.upload_resume}
              >
                Upload Resume
                <input
                  type="file"
                  name="upload_resume"
                  hidden
                  onChange={(event) => {
                    formik.setFieldValue(
                      "upload_resume",
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
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Submit"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Container>
  );
};

export default Careers;
