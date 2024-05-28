import React, { useState } from "react";
import {
  Typography,
  Tab,
  Tabs,
  Card,
  Container,
  CardContent,
  Grid,
  CardMedia,
} from "@mui/material";
import ABS from "../../Images/OurSolutions/Helthcare/ABS.jpg";
import PMS from "../../Images/OurSolutions/Helthcare/PMS.png";
import WDH from "../../Images/OurSolutions/Helthcare/WDH.png";

import LMS from "../../Images/OurSolutions/Education/LMS.png";
import AT from "../../Images/OurSolutions/Education/AT.png";
import WFSU from "../../Images/OurSolutions/Education/WSU.jpg";
import OEC from "../../Images/OurSolutions/Education/OEC.png";
import A from "../../Images/OurSolutions/Education/A.svg";
import SEO from "../../Images/OurServices/SEO.png";

import CE from "../../Images/OurSolutions/Manufacturing/CE.jpg";
import W from "../../Images/OurSolutions/Manufacturing/W.png";
import LA from "../../Images/OurSolutions/Manufacturing/LA.png";
import LAI from "../../Images/OurSolutions/Manufacturing/LAI.png";

import ECW from "../../Images/OurSolutions/ECommerce/ECW.png";
import CDT from "../../Images/OurSolutions/ECommerce/CDT.jpg";
import LPAI from "../../Images/OurSolutions/ECommerce/LPAI.png";
import PGI from "../../Images/OurSolutions/ECommerce/PGI.jpg";
import SPI from "../../Images/OurSolutions/ECommerce/SPI.png";

import CRM from "../../Images/OurSolutions/Retail/CRM.png";

import Event from "../../Images/OurSolutions/Non-Profit/Event.png";
import LoMS from "../../Images/OurSolutions/Non-Profit/LoMS.jpg";

const solutions = [
  {
    category: "Health Care",
    details: [
      {
        name: "Appointment Booking System",
        description:
          "Manage appointments seamlessly with our advanced booking system.",
        image: ABS,
      },
      {
        name: "Patient Management System",
        description:
          "Streamline patient data and processes with integrated management solutions.",
        image: PMS,
      },
      {
        name: "Website For Doctors and Hospitals",
        description:
          "Professional and functional websites designed for medical professionals.",
        image: WDH,
      },
      {
        name: "SEO",
        description:
          "Optimize your medical websites for better visibility and patient engagement.",
        image: SEO,
      },
    ],
  },
  {
    category: "Education",
    details: [
      {
        name: "Learning Management System",
        description:
          "Robust platforms for educational content delivery and tracking.",
        image: LMS,
      },
      {
        name: "Attendance Tracking",
        description:
          "Automated systems for accurate and easy monitoring of student attendance.",
        image: AT,
      },
      {
        name: "Website for Schools and Universities",
        description: "Dynamic websites tailored for educational institutions.",
        image: WFSU,
      },
      {
        name: "Overseas Education CRM",
        description: "Manage and engage with prospective students globally.",
        image: OEC,
      },
      {
        name: "Alumni Management System",
        description:
          "Keep your alumni network active and involved with our solutions.",
        image: A,
      },
      {
        name: "SEO",
        description:
          "Increase the reach and impact of your educational institution online.",
        image: SEO,
      },
    ],
  },
  {
    category: "Manufacturing",
    details: [
      {
        name: "CRM / ERP",
        description:
          "Integrate all your manufacturing processes into one streamlined system.",
        image: CE,
      },
      {
        name: "Website",
        description:
          "Custom websites that highlight your manufacturing capabilities.",
        image: W,
      },
      {
        name: "Lead Automation",
        description:
          "Automate lead generation and management to increase efficiency.",
        image: LA,
      },
      {
        name: "Lead API Integration",
        description: "Sync leads from platforms like IndiaMart and TradeIndia.",
        image: LAI,
      },
      {
        name: "SEO",
        description: "Optimize your digital presence to attract more business.",
        image: SEO,
      },
    ],
  },
  {
    category: "E-Commerce",
    details: [
      {
        name: "E-Commerce Website",
        description:
          "Build your online store with our comprehensive e-commerce solutions.",
        image: ECW,
      },
      {
        name: "Chatbot Integration",
        description: "Enhance customer service with AI-driven chatbots.",
        image: CDT,
      },
      {
        name: "Logistic Partner API Integration",
        description: "Seamlessly integrate with major logistic providers.",
        image: LPAI,
      },
      {
        name: "Payment Gateway Integrations",
        description: "Incorporate multiple payment options for your customers.",
        image: PGI,
      },
      {
        name: "Security Protocol Implementation",
        description: "Ensure your e-commerce platform is secure and reliable.",
        image: SPI,
      },
      {
        name: "SEO",
        description: "Boost your online store's visibility in search engines.",
        image: SEO,
      },
    ],
  },
  {
    category: "Retail",
    details: [
      {
        name: "Website",
        description:
          "Engage customers with a sleek, professional retail website.",
        image: W,
      },
      {
        name: "SEO",
        description:
          "Optimize your retail business for greater online exposure.",
        image: SEO,
      },
      {
        name: "CRM",
        description:
          "Customer relationship management tailored for the retail industry.",
        image: CRM,
      },
    ],
  },
  {
    category: "Non-Profit",
    details: [
      {
        name: "Website",
        description:
          "Create a compelling online presence for your non-profit organization.",
        image: W,
      },
      {
        name: "SEO",
        description: "Increase visibility to boost support and engagement.",
        image: SEO,
      },
      {
        name: "Event Management Portal",
        description:
          "Manage your events smoothly with our comprehensive portal.",
        image: Event,
      },
      {
        name: "Loyalty Management System",
        description: "Foster supporter loyalty with targeted engagement tools.",
        image: LoMS,
      },
      {
        name: "Payment Gateway Integration",
        description: "Simplify donations with easy payment solutions.",
        image: PGI,
      },
      {
        name: "Chatbot Development and Training",
        description: "Engage visitors with interactive AI chatbots.",
        image: CDT,
      },
    ],
  },
];

const SolutionTabs = ({ solutions, selectedCategoryIndex, setCategory }) => (
  <Tabs
    value={selectedCategoryIndex}
    onChange={(event, newValue) => setCategory(newValue)}
    aria-label="solution categories"
    variant="scrollable"
    scrollButtons="auto"
    allowScrollButtonsMobile
    indicatorColor="primary"
    textColor="inherit"
    sx={{
      "& .MuiTabs-flexContainer": {
        justifyContent: "center",
      },
      "& .MuiTabs-scroller": {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
      },
    }}
  >
    {solutions.map((category, index) => (
      <Tab
        label={category.category}
        key={index}
        sx={{ fontWeight: selectedCategoryIndex === index ? "bold" : "normal" }}
      />
    ))}
  </Tabs>
);

const OurSolution = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  return (
    <Container maxWidth="xl" disableGutters>
      <Typography variant="h4" sx={{ m: 4, textAlign: "center" }}>
        Explore Our Solutions
      </Typography>
      <SolutionTabs
        solutions={solutions}
        selectedCategoryIndex={selectedCategoryIndex}
        setCategory={setSelectedCategoryIndex}
      />
      <Grid container spacing={4} sx={{ my: 4 }}>
        {solutions[selectedCategoryIndex]?.details.map((solution, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card raised sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="280"
                image={solution.image}
                alt={solution.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {solution.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {solution.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurSolution;
