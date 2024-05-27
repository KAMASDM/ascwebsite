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
  Dialog,
} from "@mui/material";
import { useState } from "react";
import HostingEnquiryForm from "../Forms/HostingEnquiryForm";

const HostingService = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const services = [
    {
      name: "Shared Hosting",
      description:
        "Affordable and user-friendly hosting for small businesses or personal websites. Perfect for getting started online with support for all major CMS platforms.",
      imageUrl: "https://source.unsplash.com/random/300x200?server",
    },
    {
      name: "VPS Hosting",
      description:
        "Flexible and scalable virtual private servers offer you more control and customization for growing businesses with greater resource needs.",
      imageUrl: "https://source.unsplash.com/random/300x200?datacenter",
    },
    {
      name: "Dedicated Hosting",
      description:
        "Maximum performance and control with dedicated hardware for your business. Ideal for high traffic sites and intensive applications.",
      imageUrl: "https://source.unsplash.com/random/300x200?network",
    },
    {
      name: "Cloud Hosting",
      description:
        "Harness the power of cloud computing with scalable resources and pay-as-you-go pricing. Excellent for businesses with fluctuating traffic.",
      imageUrl: "https://source.unsplash.com/random/300x200?cloud",
    },
  ];

  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          backgroundImage:
            'url("https://source.unsplash.com/random/1920x1080?hosting")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "common.white",
          textAlign: "center",
          p: 6,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Typography variant="h2">Premium Hosting Services</Typography>
        <Typography variant="h5">
          Reliable and secure hosting solutions tailored to meet your business
          needs.
        </Typography>
      </Box>

      <Typography variant="h4" sx={{ mt: 4, mb: 2, textAlign: "center" }}>
        Our Hosting
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

      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        sx={{ mb: 2 }}
      >
        Request Hosting Consultation
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <HostingEnquiryForm handleClose={handleClose} />
        <Button onClick={handleClose} color="primary" sx={{ m: 2 }}>
          Close
        </Button>
      </Dialog>
    </Container>
  );
};

export default HostingService;
