import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Button,
  Box,
} from "@mui/material";

const Careers = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
    resume: null,
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();

    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("education", formData.education);
    data.append("experience", formData.experience);
    data.append("skills", formData.skills);
    data.append("resume", formData.resume);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwTsAryqmZZsCcwX3blAm0PtC8sqD2j9YDYEXDRXx8BJeVMdc1K2de7ayNdYdGzlNKz/exec",
        {
          method: "POST",
          body: data,
        }
      );
      if (response.ok) {
        setFormData(initialState);
        navigate("/");
      } else {
        throw new Error("Some Problem Occurred. Please try again!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom align="center">
        Apply for a Position
      </Typography>
      <Box onSubmit={handleSubmit} component="form" sx={{ mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              type="email"
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Education"
              name="education"
              value={formData.education}
              onChange={handleChange}
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
              value={formData.experience}
              onChange={handleChange}
              multiline
              rows={3}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              multiline
              rows={2}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" component="label">
              Upload Resume
              <input type="file" name="resume" hidden onChange={handleChange} />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Careers;
