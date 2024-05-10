import React, { useState } from 'react';
import { Container, Typography, TextField, Grid, Button, Box, FormControl, InputLabel, Select, MenuItem, TextareaAutosize, Card,CardContent } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function CareersComponent() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthDate: null,
        education: '',
        experience: '',
        skills: '',
        resume: null
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDateChange = (value) => {
        setFormData(prevState => ({
            ...prevState,
            birthDate: value
        }));
    };

    const handleFileChange = (event) => {
        setFormData(prevState => ({
            ...prevState,
            resume: event.target.files[0]
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Submit logic here
    };

    return (
        <Container maxWidth="md">
            <Card>
                <CardContent>
            <Typography variant="h4" gutterBottom align="center">
                Apply for a Position
            </Typography>
            <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
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
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date of Birth"
                                value={formData.birthDate}
                                onChange={handleDateChange}
                                renderInput={(params) => <TextField fullWidth {...params} />}
                            />
                        </LocalizationProvider>
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
                        <Button
                            variant="contained"
                            component="label"
                        >
                            Upload Resume
                            <input
                                type="file"
                                hidden
                                onChange={handleFileChange}
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
                            Submit Application
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            </CardContent>
            </Card>
        </Container>
    );
}

export default CareersComponent;
