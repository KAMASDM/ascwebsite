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
import HBanner from "../../Images/Hosting/web-hosting-banner.jpg";
import SH from "../../Images/Hosting/3826483.webp";
import VH from "../../Images/Hosting/cloud-computing-services-and-technology-cloud-storage-data-protection-business-concept-vector-illustration-2C58JMW.jpg";
import DH from "../../Images/Hosting/dedicated-web-hosting.jpg";
import CH from "../../Images/Hosting/employer-manages-cloud-server-hosting-4153017-3443563.webp";

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
      imageUrl: SH,
    },
    {
      name: "VPS Hosting",
      description:
        "Flexible and scalable virtual private servers offer you more control and customization for growing businesses with greater resource needs.",
      imageUrl: VH,
    },
    {
      name: "Dedicated Hosting",
      description:
        "Maximum performance and control with dedicated hardware for your business. Ideal for high traffic sites and intensive applications.",
      imageUrl: DH,
    },
    {
      name: "Cloud Hosting",
      description:
        "Harness the power of cloud computing with scalable resources and pay-as-you-go pricing. Excellent for businesses with fluctuating traffic.",
      imageUrl: CH,
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Box
        sx={{
          backgroundImage: `url(${HBanner})`,
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
