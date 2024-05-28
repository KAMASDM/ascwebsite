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
import SEO from "../../Images/OurServices/SEO.png";
import SWD from "../../Images/OurServices/SWD.jpg";
import ECS from "../../Images/OurServices/ECS.png";
import CRMERP from "../../Images/OurSolutions/Manufacturing/CE.jpg";
import MAD from "../../Images/OurServices/MAD.jpg";
import Hositng from "../../Images/OurServices/Hosting.png";

const services = [
  {
    name: "SEO",
    description:
      "Optimize your online presence with bespoke SEO strategies that boost your rankings and visibility.",
    image: SEO,
    link: "/SEO",
  },
  {
    name: "Smart Web Development",
    description:
      "Develop intelligent, responsive websites tailored to your business needs.",
    image: SWD,
    link: "/Web-Development",
  },
  {
    name: "E-Commerce Solutions",
    description:
      "Launch powerful online stores with a seamless shopping experience that drives sales.",
    image: ECS,
    link: "/E-Commerce-Solutions",
  },
  {
    name: "CRM / ERP Development",
    description:
      "Implement robust systems that streamline operations and enhance organizational efficiency.",
    image: CRMERP,
    link: "/CRM-ERP-Development",
  },
  {
    name: "Mobile Application Development",
    description:
      "Create compelling mobile applications that provide excellent user experiences across all devices.",
    image: MAD,
    link: "/Mobile-App-Development",
  },
  {
    name: "Hosting",
    description:
      "Reliable and secure hosting services to ensure your online operations are smooth and uninterrupted.",
    image: Hositng,
    link: "/Hosting",
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
                height="230"
                image={service.image}
                alt={service.name}
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
