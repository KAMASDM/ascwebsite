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

const services = [
  {
    name: "iOS App Development",
    description:
      "Craft stunning, high-performance applications for iOS devices tailored to meet your business needs and user expectations.",
    imageUrl: "https://source.unsplash.com/random/300x200?ios",
  },
  {
    name: "Android App Development",
    description:
      "Develop engaging Android applications that reach a wide audience, designed for maximum impact and seamless user experience.",
    imageUrl: "https://source.unsplash.com/random/300x200?android",
  },
  {
    name: "Cross-Platform Development",
    description:
      "Utilize frameworks like React Native to build applications that operate smoothly across multiple platforms, ensuring consistency and functionality.",
    imageUrl: "https://source.unsplash.com/random/300x200?crossplatform",
  },
];

const mobileAppTypes = [
  {
    name: "E-commerce Apps",
    description:
      "Streamline online shopping with a user-friendly mobile app designed to enhance customer engagement and boost sales.",
    imageUrl: "https://source.unsplash.com/random/300x200?ecommerceApp",
  },
  {
    name: "Educational Apps",
    description:
      "Foster learning and accessibility with educational apps that offer interactive courses, tutorials, and learning management systems.",
    imageUrl: "https://source.unsplash.com/random/300x200?educationalApp",
  },
  {
    name: "Health & Fitness Apps",
    description:
      "Promote a healthy lifestyle with apps that track fitness, nutrition, and provide personalized workout and diet plans.",
    imageUrl: "https://source.unsplash.com/random/300x200?healthApp",
  },
  {
    name: "Social Media Apps",
    description:
      "Connect the world by creating compelling social media platforms that offer innovative ways for interaction and content sharing.",
    imageUrl: "https://source.unsplash.com/random/300x200?socialMediaApp",
  },
  {
    name: "Utility Apps",
    description:
      "Enhance everyday efficiency with utility apps that include features like reminders, calculators, and weather updates.",
    imageUrl: "https://source.unsplash.com/random/300x200?utilityApp",
  },
  {
    name: "Gaming Apps",
    description:
      "Engage users with captivating and immersive gaming experiences designed for a variety of demographics and interests.",
    imageUrl: "https://source.unsplash.com/random/300x200?gamingApp",
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
    <Container maxWidth="xl">
      <Box
        sx={{
          backgroundImage:
            'url("https://source.unsplash.com/random/1920x1080?mobileApps")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "common.white",
          textAlign: "center",
          p: 6,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Typography variant="h2">Mobile Application Development</Typography>
        <Typography variant="h5">
          Bringing your mobile app ideas to life with cutting-edge technology
          and design.
        </Typography>
      </Box>

      <Typography variant="h4" sx={{ mt: 6, mb: 2, textAlign: "center" }}>
        Our Mobile Development Services
      </Typography>

      <Box sx={{ my: 4 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card raised sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
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

      <Typography variant="h4" sx={{ mt: 6, mb: 2, textAlign: "center" }}>
        Our Solutions
      </Typography>

      <Box sx={{ my: 4 }}>
        <Grid container spacing={4}>
          {mobileAppTypes.map((type, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card raised sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
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
        <MobileAppEnquiryForm />
        <Button onClick={handleClose} color="primary" sx={{ m: 2 }}>
          Close
        </Button>
      </Dialog>
    </Container>
  );
};

export default MobileAppService;
