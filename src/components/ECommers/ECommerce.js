import React, { useState } from "react";
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
import ECommerceEnquiryForm from "../Forms/ECommerceEnquiryForm";
import ECBanner from "../../Images/E-Commerce/EcommerceBanner.jpg";
import CS from "../../Images/E-Commerce/CS.jpg"
import PGI from "../../Images/OurSolutions/ECommerce/PGI.jpg" 
import IOMS from "../../Images/E-Commerce/IOMS.jpg"
import MAD from "../../Images/OurServices/MAD.jpg"
import SEO from "../../Images/OurServices/SEO.png"
import LFS from "../../Images/E-Commerce/LFS.avif"
import TGM from "../../Images/E-Commerce/TGM.jpg"
import OFOS from "../../Images/E-Commerce/OFOS.jpg"

const ECommerce = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };

  const ecommerceFeatures = [
    {
      title: "Custom Storefront Design",
      description:
        "Design tailored to your brand for unique customer experiences.",
      image: CS,
    },
    {
      title: "Secure Payment Integrations",
      description:
        "Integration of leading payment gateways to ensure secure and convenient transactions.",
      image: PGI,
    },
    {
      title: "Inventory and Order Management",
      description:
        "Sophisticated solutions to manage stock levels, orders, and track shipments seamlessly.",
      image: IOMS,
    },
    {
      title: "Mobile Optimization",
      description:
        "Mobile-optimized designs to ensure your store is accessible on smartphones and tablets.",
      image: MAD,
    },
    {
      title: "SEO and Marketing Tools",
      description:
        "Built-in SEO tools and integrations with marketing platforms to drive traffic and sales.",
      image: SEO,
    },
  ];

  const ecommerceProjects = [
    {
      name: "Luxury Fashion Store",
      description:
        "A sleek, modern online store for a luxury fashion brand featuring live chat support and an interactive fitting room.",
      imageUrl: LFS,
    },
    {
      name: "Tech Gadgets Marketplace",
      description:
        "An e-commerce platform designed for tech enthusiasts to buy and sell gadgets with advanced filtering options.",
      imageUrl: TGM,
    },
    {
      name: "Organic Foods Online Store",
      description:
        "A user-friendly store focused on organic foods, integrating blog features and subscription-based purchasing.",
      imageUrl: OFOS,
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Box
        sx={{
          backgroundImage: `url(${ECBanner})`,
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
      <Box sx={{ my: 4 }}>
        <Grid container spacing={4}>
          {ecommerceFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card raised sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="280"
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Button variant="contained" color="primary" onClick={handleOpen}>
        Request E-Commerce Consultation
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <ECommerceEnquiryForm handleClose={handleClose} />
        <Button onClick={handleClose} color="primary" sx={{ m: 2 }}>
          Close
        </Button>
      </Dialog>

      <Typography variant="h4" sx={{ m: 4, textAlign: "center" }}>
        Our Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
        {ecommerceProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card raised sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="280"
                image={project.imageUrl}
                alt={project.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {project.name}
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

export default ECommerce;
