import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";
import { Dialog } from "@mui/material";
import WebDevelopmentForm from "../Forms/WebDevelopmentForm";
import ExpertiseBanner from "../../Images/Expertise/Expertise_Banner_2000x600px.webp";
import RD from "../../Images/Expertise/responsive-web-design-professional.png"
import FD from "../../Images/Expertise/FD.png"
import BD from "../../Images/Expertise/BD.jpg"
import ECS from "../../Images/OurServices/ECS.png"
import CMS from "../../Images/Expertise/cms-development-services-cover-picture-03.svg"
import API from "../../Images/Expertise/1674214638095.jpeg"
import SM from "../../Images/Expertise/news-connectivity-aug17-Bezeq.jpg"
import AA from "../../Images/Expertise/bigdata_rockmetric.png"
import BC from "../../Images/Expertise/171212-Bitcoin.jpg"

const webDevServices = [
  {
    title: "Responsive Design",
    description:
      "Create visually appealing and functional designs that ensure your website looks great on any device and screen size.",
    image: RD,
  },
  {
    title: "Frontend Development",
    description:
      "Build fast and interactive user interfaces with modern JavaScript frameworks like React, Vue, or Angular.",
    image: FD,
  },
  {
    title: "Backend Development",
    description:
      "Develop robust and scalable server-side logic using Node.js, Django, or Spring, coupled with powerful databases.",
    image: BD,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Implement full-featured e-commerce solutions that provide a seamless shopping experience to boost your sales.",
    image: ECS,
  },
  {
    title: "CMS Development",
    description:
      "Custom content management systems that allow you to efficiently manage your site content with ease.",
    image: CMS,
  },
  {
    title: "API Development",
    description:
      "Design and implement custom APIs that enable your applications to communicate with each other and with third-party services effectively.",
    image: API,
  },
];

const upcomingProjects = [
  {
    title: "Smart City Applications",
    description:
      "Developing a suite of integrated applications aimed at improving urban living through smart technology solutions.",
    image: SM,
  },
  {
    title: "Advanced Analytics Platform",
    description:
      "Creating a powerful analytics platform that leverages AI to provide deep insights into data for businesses across various sectors.",
    image: AA,
  },
  {
    title: "Blockchain-Based Supply Chain",
    description:
      "Implementing a secure, blockchain-powered supply chain management system for a multinational corporation.",
    image: BC,
  },
];

const WebDevelopment = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Box
        sx={{
          backgroundImage: `url(${ExpertiseBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "common.white",
          textAlign: "center",
          p: 6,
          borderRadius: "12px",
          overflow: "hidden",
          height: "180px",
        }}
      >
      </Box>

      <Typography variant="h4" sx={{ m: 4, textAlign: "center" }}>
        Our Expertise
      </Typography>

      <Box sx={{ my: 4 }}>
        <Grid container spacing={4}>
          {webDevServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card raised sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="280"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
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
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        sx={{ mb: 2 }}
      >
        Request Web Development Consultation
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <WebDevelopmentForm handleClose={handleClose} />
        <Button onClick={handleClose} color="primary" sx={{ m: 2 }}>
          Close
        </Button>
      </Dialog>

      <Typography variant="h4" sx={{ m: 4, textAlign: "center" }}>
        Upcoming Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
        {upcomingProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card raised sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="280"
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
    </Container>
  );
};

export default WebDevelopment;
