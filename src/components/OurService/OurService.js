import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const services = [
  {
    name: "SEO",
    description:
      "Optimize your online presence with bespoke SEO strategies that boost your rankings and visibility.",
    imageUrl: "https://source.unsplash.com/random/300x200?seo",
    link: "/seo",
  },
  {
    name: "Smart Web Development",
    description:
      "Develop intelligent, responsive websites tailored to your business needs.",
    imageUrl: "https://source.unsplash.com/random/300x200?webdev",
    link: "/web-development",
  },
  {
    name: "E-Commerce Solutions",
    description:
      "Launch powerful online stores with a seamless shopping experience that drives sales.",
    imageUrl: "https://source.unsplash.com/random/300x200?ecommerce",
    link: "/ecommerce",
  },
  {
    name: "CRM / ERP Development",
    description:
      "Implement robust systems that streamline operations and enhance organizational efficiency.",
    imageUrl: "https://source.unsplash.com/random/300x200?crm",
    link: "/crm-erp",
  },
  {
    name: "Mobile Application Development",
    description:
      "Create compelling mobile applications that provide excellent user experiences across all devices.",
    imageUrl: "https://source.unsplash.com/random/300x200?mobileApp",
    link: "/mobile-app",
  },
  {
    name: "Hosting",
    description:
      "Reliable and secure hosting services to ensure your online operations are smooth and uninterrupted.",
    imageUrl: "https://source.unsplash.com/random/300x200?hosting",
    link: "/hosting",
  },
];

const OurService = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="h4" sx={{ mt: 4, mb: 2, textAlign: "center" }}>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card raised sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h5">{service.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
                <Button
                  onClick={() => navigate(service.link)}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Know More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default OurService;
