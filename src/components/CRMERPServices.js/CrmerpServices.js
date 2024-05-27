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
} from "@mui/material";
import { Dialog } from "@mui/material";
import CRMERPEnquiryForm from "../Forms/CRMERPEnquiryForm";

const services = [
  {
    name: "CRM Solutions",
    description:
      "Streamline your customer interactions and enhance relationship management with our advanced CRM solutions. Tailored to boost your sales, marketing, and customer service efforts.",
    imageUrl: "https://source.unsplash.com/random/300x200?crm",
  },
  {
    name: "ERP Systems",
    description:
      "Integrate all facets of your business operations, from supply chain management to human resources and finance, with our comprehensive ERP systems designed for efficiency and scalability.",
    imageUrl: "https://source.unsplash.com/random/300x200?erp",
  },
  {
    name: "Vtiger CRM",
    description:
      "Harness the power of Vtiger CRM to enhance your customer engagement and drive sales with a comprehensive and customizable CRM platform.",
    imageUrl: "https://source.unsplash.com/random/300x200?vtiger",
  },
];

const industries = [
  {
    name: "Healthcare",
    description:
      "Manage patient interactions, appointments, and sensitive data securely and efficiently.",
    imageUrl: "https://source.unsplash.com/random/300x200?healthcare",
  },
  {
    name: "Retail",
    description:
      "Optimize supply chains and enhance customer retail experiences with tailored CRM solutions.",
    imageUrl: "https://source.unsplash.com/random/300x200?retail",
  },
  {
    name: "Manufacturing",
    description:
      "Streamline production processes and client management from initial contact to after-sales support.",
    imageUrl: "https://source.unsplash.com/random/300x200?manufacturing",
  },
  {
    name: "Education",
    description:
      "Improve student and faculty engagement through effective communication and management tools.",
    imageUrl: "https://source.unsplash.com/random/300x200?education",
  },
  {
    name: "Real Estate",
    description:
      "Manage leads, property listings, and client interactions with dynamic CRM tools.",
    imageUrl: "https://source.unsplash.com/random/300x200?realestate",
  },
  {
    name: "Finance",
    description:
      "Secure and improve customer relations and transactions with integrated CRM solutions.",
    imageUrl: "https://source.unsplash.com/random/300x200?finance",
  },
];

const CRMERPService = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          backgroundImage:
            'url("https://source.unsplash.com/random/1920x1080?webdevelopment")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "common.white",
          textAlign: "center",
          p: 6,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Typography variant="h2">CRM & ERP Solutions</Typography>
        <Typography variant="h5">
          Empowering businesses to streamline processes and improve efficiency.
        </Typography>
      </Box>

      <Typography variant="h4" sx={{ m: 4, textAlign: "center" }}>
        Our Expertise
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Request CRM & ERP Development Consultation
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <CRMERPEnquiryForm handleClose={handleClose}/>
        <Button onClick={handleClose} color="primary" sx={{ m: 2 }}>
          Close
        </Button>
      </Dialog>

      <Typography variant="h4" sx={{ m: 4, textAlign: "center" }}>
        Industry - Wise Solutions
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{ my: 4 }}
        justifyContent="center"
        alignItems="center"
      >
        {industries.map((industry, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card raised sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="140"
                image={industry.imageUrl}
                alt={industry.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {industry.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {industry.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CRMERPService;
