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
import ERPBanner from "../../Images/CRM/An-Award-Winning-Cloud-Based-University-Management-ERP-Software.webp";
import CRMS from "../../Images/CRM/3722743.webp";
import ERP from "../../Images/CRM/hand-drawn-flat-design-erp-illustration_23-2149379505.avif";
import Vtiger from "../../Images/CRM/7ffdda6d-66e4-48c7-b2e6-e00a088292b4_all-in-one-page-benefits-07.svg";
import HC from "../../Images/OurSolutions/Helthcare/PMS.png"
import Retail from "../../Images/CRM/brick-mortar-abstract-concept-vector-illustration_107173-28894.avif"
import Manufacturing from "../../Images/CRM/factory-workers-robotic-arm-removing-packages-from-conveyor-line-engineer-using-computer-operating-process-vector-illustration-business-production-machine-technology-concepts_74855-9859.avif"
import Education from "../../Images/CRM/ae5ae16a1f8bdad663c96a699d91e646.jpg"
import RES from "../../Images/CRM/3135821.webp"
import Finance from "../../Images/CRM/Finamce.avif"


const services = [
  {
    name: "CRM Solutions",
    description:
      "Streamline your customer interactions and enhance relationship management with our advanced CRM solutions. Tailored to boost your sales, marketing, and customer service efforts.",
    imageUrl: CRMS,
  },
  {
    name: "ERP Systems",
    description:
      "Integrate all facets of your business operations, from supply chain management to human resources and finance, with our comprehensive ERP systems designed for efficiency and scalability.",
    imageUrl: ERP,
  },
  {
    name: "Vtiger CRM",
    description:
      "Harness the power of Vtiger CRM to enhance your customer engagement and drive sales with a comprehensive and customizable CRM platform.",
    imageUrl: Vtiger,
  },
];

const industries = [
  {
    name: "Healthcare",
    description:
      "Manage patient interactions, appointments, and sensitive data securely and efficiently.",
    imageUrl: HC,
  },
  {
    name: "Retail",
    description:
      "Optimize supply chains and enhance customer retail experiences with tailored CRM solutions.",
    imageUrl: Retail,
  },
  {
    name: "Manufacturing",
    description:
      "Streamline production processes and client management from initial contact to after-sales support.",
    imageUrl: Manufacturing,
  },
  {
    name: "Education",
    description:
      "Improve student and faculty engagement through effective communication and management tools.",
    imageUrl: Education,
  },
  {
    name: "Real Estate",
    description:
      "Manage leads, property listings, and client interactions with dynamic CRM tools.",
    imageUrl: RES,
  },
  {
    name: "Finance",
    description:
      "Secure and improve customer relations and transactions with integrated CRM solutions.",
    imageUrl: Finance,
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
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Box
        sx={{
          backgroundImage: `url(${ERPBanner})`,
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
        <CRMERPEnquiryForm handleClose={handleClose} />
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
                height="280"
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
