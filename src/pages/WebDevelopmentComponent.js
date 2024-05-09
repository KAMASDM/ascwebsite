import React from "react";
import {
  Typography,
  Container,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
 
} from "@mui/material";
import TestimonialComponent from "./TestimonialComponent"; // Assuming you have a similar testimonial component for web development
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog } from "@mui/material";
import EnquiryForm from "../components/tools/EnquiryForm";

function WebDevelopmentComponent() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/web-development/enquiry');
    };
  const webDevServices = [
    {
      title: "Responsive Design",
      description:
        "Create visually appealing and functional designs that ensure your website looks great on any device and screen size.",
      image: "https://source.unsplash.com/random/300x200?responsive",
    },
    {
      title: "Frontend Development",
      description:
        "Build fast and interactive user interfaces with modern JavaScript frameworks like React, Vue, or Angular.",
      image: "https://source.unsplash.com/random/300x200?frontend",
    },
    {
      title: "Backend Development",
      description:
        "Develop robust and scalable server-side logic using Node.js, Django, or Spring, coupled with powerful databases.",
      image: "https://source.unsplash.com/random/300x200?backend",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Implement full-featured e-commerce solutions that provide a seamless shopping experience to boost your sales.",
      image: "https://source.unsplash.com/random/300x200?ecommerce",
    },
    {
      title: "CMS Development",
      description:
        "Custom content management systems that allow you to efficiently manage your site content with ease.",
      image: "https://source.unsplash.com/random/300x200?cms",
    },
    {
      title: "API Development",
      description:
        "Design and implement custom APIs that enable your applications to communicate with each other and with third-party services effectively.",
      image: "https://source.unsplash.com/random/300x200?api",
    },
  ];

  const upcomingProjects = [
    {
      title: "Smart City Applications",
      description:
        "Developing a suite of integrated applications aimed at improving urban living through smart technology solutions.",
      image: "https://source.unsplash.com/random/300x200?smartcity",
    },
    {
      title: "Advanced Analytics Platform",
      description:
        "Creating a powerful analytics platform that leverages AI to provide deep insights into data for businesses across various sectors.",
      image: "https://source.unsplash.com/random/300x200?analytics",
    },
    {
      title: "Blockchain-Based Supply Chain",
      description:
        "Implementing a secure, blockchain-powered supply chain management system for a multinational corporation.",
      image: "https://source.unsplash.com/random/300x200?blockchain",
    },
  ];

  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          backgroundImage:
            'url("https://source.unsplash.com/random/1920x1080?webdevelopment")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "common.white",
          textAlign: "center",
          p: 6,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Comprehensive Web Development Services
        </Typography>
        <Typography variant="h6">
          From concept to deployment, we cover all phases of web development.
        </Typography>
      </Box>

      <Card sx={{ margin: 3, borderRadius: "12px" }}>
        <CardContent>
          <Typography variant="h4" sx={{ mt: 4, mb: 2, textAlign: "center" }}>
            Our Expertise
          </Typography>
          <Grid container spacing={4}>
            {webDevServices.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card raised sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
      <Box sx={{ p: 4, textAlign: 'center', mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Ready to start your project? Let's discuss your requirements.
                </Typography>
                <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    Request a Quote
                </Button>
            </Box>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <EnquiryForm />
                <Button onClick={handleClose} color="primary" sx={{ m: 2 }}>
                    Close
                </Button>
            </Dialog>
      <Card sx={{ margin: 3, borderRadius: "12px" }}>
        <CardContent>
          <Typography variant="h4" sx={{ mt: 6, mb: 2, textAlign: "center" }}>
            Upcoming Projects
          </Typography>
          <Grid container spacing={4}>
            {upcomingProjects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card raised sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ margin: 3, borderRadius: "12px" }}>
        <CardContent>
          <Box sx={{ my: 4, p: 4, bgcolor: "#e0f7fa", textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
              Testimonials
            </Typography>
            <TestimonialComponent />
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ margin: 3, borderRadius: "12px" }}>
        <CardContent>
          <Box sx={{ my: 4, p: 4, bgcolor: "#e8f5e9", textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
              From Our Blog
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Dive into the latest trends and innovations in web development,
              and how they can benefit your business.
            </Typography>
            <Button variant="contained" color="secondary">
              Visit Blog
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default WebDevelopmentComponent;
