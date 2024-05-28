import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ServiceBanner from "../Images/Services/ServicesBanner.jpg"
import SEO from "../Images/OurServices/SEO.png"
import WD from "../Images/OurServices/SWD.jpg"
import ECS from "../Images/OurServices/ECS.png"
import MAD from "../Images/OurServices/MAD.jpg"
import DM from "../Images/Services/DM.png";
import CS from "../Images/Services/CS.png";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: "SEO Services",
      description:
        "Optimize your online presence with our expert SEO strategies that boost your rankings and visibility.",
      imageUrl: SEO,
      link: "/SEO",
    },
    {
      name: "Web Development",
      description:
        "Build responsive and dynamic websites tailored to meet your business needs.",
      imageUrl: WD,
      link: "/Web-Development",
    },
    {
      name: "E-Commerce Solutions",
      description:
        "Create robust e-commerce platforms that provide seamless shopping experiences.",
      imageUrl: ECS,
      link: "/E-Commerce-Solutions",
    },
    {
      name: "Mobile App Development",
      description:
        "Develop high-performance mobile applications for iOS and Android platforms.",
      imageUrl: MAD,
      link: "/Mobile-App-Development",
    },
    {
      name: "Digital Marketing",
      description:
        "Leverage digital channels to enhance your brand's online presence and engage with a wider audience.",
      imageUrl: DM,
    },
    {
      name: "Cloud Solutions",
      description:
        "Implement scalable cloud solutions to enhance your business operations and reduce costs.",
      imageUrl: CS,
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Box
        sx={{
          backgroundImage:
          `url(${ServiceBanner})`,
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
        <Typography variant="h2" sx={{ mt: 4 }}>
          We Offer Services
        </Typography>
        <Typography variant="h5">
          Delivering excellence and innovation across all our service areas.
        </Typography>
      </Box>

      <Typography variant="h4" sx={{ m: 4, textAlign: "center" }}>
        Explore Our Services
      </Typography>

      <Grid container spacing={4} sx={{ p: 4 }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card raised sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="230"
                image={service.imageUrl}
                alt={service.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {service.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {service.description}
                </Typography>

                <Button
                  onClick={() => navigate(service.link)}
                  variant="contained"
                  color="primary"
                  s
                  sx={{ mt: 2 }}
                >
                  Know More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
