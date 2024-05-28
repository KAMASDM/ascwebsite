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
import { Dialog } from "@mui/material";
import { useState } from "react";
import MobileAppEnquiryForm from "../Forms/MobileAppEnquiryForm";
import MobileBanner from "../../Images/MoblieApp/Mob-App.webp.webp";
import IOS from "../../Images/MoblieApp/1_kZ60bdSzXhydAYGqn2EWHQ.jpg";
import AAD from "../../Images/MoblieApp/android-app-development-course.png";
import CPD from "../../Images/MoblieApp/cross-platform-software-concept-illustration_114360-7293.avif";
import EA from "../../Images/MoblieApp/3287063.webp";
import EQA from "../../Images/MoblieApp/e-learning-education-process-training-application-mobile-app-development-courses-mobile-apps-online-courses-become-a-mobile-developer-concept-flat-modern-illustration-vector.jpg";
import HAF from "../../Images/MoblieApp/runner-uses-smartwatch-sport-and-health-apps-fitness-tracker-activity-band-health-monitor-and-wrist-worn-device-concept-on-white-background-flat-modern-illustration-vector.jpg";
import SMA from "../../Images/MoblieApp/social-media-8124075_1280.webp"
import UA from "../../Images/MoblieApp/Feature-Image-1.webp"
import GA from "../../Images/MoblieApp/male-mobile-game-developer-8620911-6885145.webp"

const services = [
  {
    name: "iOS App Development",
    description:
      "Craft stunning, high-performance applications for iOS devices tailored to meet your business needs and user expectations.",
    imageUrl: IOS,
  },
  {
    name: "Android App Development",
    description:
      "Develop engaging Android applications that reach a wide audience, designed for maximum impact and seamless user experience.",
    imageUrl: AAD,
  },
  {
    name: "Cross-Platform Development",
    description:
      "Utilize frameworks like React Native to build applications that operate smoothly across multiple platforms, ensuring consistency.",
    imageUrl: CPD,
  },
];

const mobileAppTypes = [
  {
    name: "E-commerce Apps",
    description:
      "Streamline online shopping with a user-friendly mobile app designed to enhance customer engagement and boost sales.",
    imageUrl: EA,
  },
  {
    name: "Educational Apps",
    description:
      "Foster learning and accessibility with educational apps that offer interactive courses, tutorials, and learning management systems.",
    imageUrl: EQA,
  },
  {
    name: "Health & Fitness Apps",
    description:
      "Promote a healthy lifestyle with apps that track fitness, nutrition, and provide personalized workout and diet plans.",
    imageUrl: HAF,
  },
  {
    name: "Social Media Apps",
    description:
      "Connect the world by creating compelling social media platforms that offer innovative ways for interaction and content sharing.",
    imageUrl: SMA,
  },
  {
    name: "Utility Apps",
    description:
      "Enhance everyday efficiency with utility apps that include features like reminders, calculators, and weather updates.",
    imageUrl: UA,
  },
  {
    name: "Gaming Apps",
    description:
      "Engage users with captivating and immersive gaming experiences designed for a variety of demographics and interests.",
    imageUrl: GA,
  },
];

const MobileAppService = () => {
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
          backgroundImage: `url(${MobileBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "common.white",
          textAlign: "center",
          p: 6,
          borderRadius: "12px",
          overflow: "hidden",
          height: "180px",
        }}
      ></Box>

      <Typography variant="h4" sx={{ mt: 4, textAlign: "center" }}>
        Our Mobile Development Services
      </Typography>

      <Box sx={{ my: 4 }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card raised sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="280"
                  image={service.imageUrl}
                  alt={service.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {service.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Request Mobile App Development Consultation
      </Button>

      <Typography variant="h4" sx={{ m: 4, textAlign: "center" }}>
        Our Solutions
      </Typography>

      <Box sx={{ my: 4 }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 4 }}
        >
          {mobileAppTypes.map((type, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card raised sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="280"
                  image={type.imageUrl}
                  alt={type.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {type.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {type.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <MobileAppEnquiryForm handleClose={handleClose} />
        <Button onClick={handleClose} color="primary" sx={{ m: 2 }}>
          Close
        </Button>
      </Dialog>
    </Container>
  );
};

export default MobileAppService;
