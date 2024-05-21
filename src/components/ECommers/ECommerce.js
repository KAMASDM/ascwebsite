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
import Testimonial from "../Testimonial/Testimonial";
import ECommerceEnquiryForm from "../Forms/ECommerceEnquiryForm";

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
      image: "https://source.unsplash.com/random/300x200?ecommerce",
    },
    {
      title: "Secure Payment Integrations",
      description:
        "Integration of leading payment gateways to ensure secure and convenient transactions.",
      image: "https://source.unsplash.com/random/300x200?payment",
    },
    {
      title: "Inventory and Order Management",
      description:
        "Sophisticated solutions to manage stock levels, orders, and track shipments seamlessly.",
      image: "https://source.unsplash.com/random/300x200?inventory",
    },
    {
      title: "Mobile Optimization",
      description:
        "Mobile-optimized designs to ensure your store is accessible on smartphones and tablets.",
      image: "https://source.unsplash.com/random/300x200?mobile-commerce",
    },
    {
      title: "SEO and Marketing Tools",
      description:
        "Built-in SEO tools and integrations with marketing platforms to drive traffic and sales.",
      image: "https://source.unsplash.com/random/300x200?seo-tools",
    },
  ];

  const ecommerceProjects = [
    {
      name: "Luxury Fashion Store",
      description:
        "A sleek, modern online store for a luxury fashion brand featuring live chat support and an interactive fitting room.",
      imageUrl: "https://source.unsplash.com/random/300x200?fashion",
    },
    {
      name: "Tech Gadgets Marketplace",
      description:
        "An e-commerce platform designed for tech enthusiasts to buy and sell gadgets with advanced filtering options.",
      imageUrl: "https://source.unsplash.com/random/300x200?tech",
    },
    {
      name: "Organic Foods Online Store",
      description:
        "A user-friendly store focused on organic foods, integrating blog features and subscription-based purchasing.",
      imageUrl: "https://source.unsplash.com/random/300x200?organic",
    },
    {
      name: "Home Decor Boutique",
      description:
        "An artistic and visually rich online boutique offering curated home decor items with virtual room placement technology.",
      imageUrl: "https://source.unsplash.com/random/300x200?homedecor",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Box
        sx={{
          backgroundImage:
            'url("https://source.unsplash.com/random/1920x1080?ecommerce")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "common.white",
          textAlign: "center",
          p: 6,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Typography variant="h2">E-Commerce Solutions</Typography>
        <Typography variant="h5">
          Power your online sales with our comprehensive e-commerce solutions.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Grid container spacing={4}>
          {ecommerceFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card raised sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
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
        <ECommerceEnquiryForm />
        <Button onClick={handleClose} color="primary" sx={{ m: 2 }}>
          Close
        </Button>
      </Dialog>

      <Typography variant="h4" sx={{ mt: 6, mb: 2, textAlign: "center" }}>
        Our Projects
      </Typography>

      <Grid container spacing={4}>
        {ecommerceProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card raised sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="140"
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
      <Testimonial />
    </Container>
  );
};

export default ECommerce;
