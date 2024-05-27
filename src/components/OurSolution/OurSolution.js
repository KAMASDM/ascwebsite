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
import Appointment from "../../Images/Explore Our Solutions/Helth care/Appointment Booking System.jpg";
import Patient from "../../Images/Explore Our Solutions/Helth care/Patient Management System1.png"
import WebDoctor from "../../Images/Explore Our Solutions/Helth care/Website For Doctors and Hospitals.png";
import LearingManagementSystem from "../../Images/Explore Our Solutions/Education/Learning Management System.png";
import AttandanceTracking from "../../Images/Explore Our Solutions/Education/Attendance Tracking.png";
import WebSiteForSchools from "../../Images/Explore Our Solutions/Education/Website for Schools and Universities.jpg";
import AlumniManagementSystem from "../../Images/Explore Our Solutions/Education/Alumni Management System.png";
import SEO from "../../Images/Our Services/SEO Service.png"
import CRMERP from "../../Images/Explore Our Solutions/Education/CRM -ERP.jpg"
import CRM from "../../Images/Explore Our Solutions/Education/CRM.png"
import PaymentGateway from "../../Images/Explore Our Solutions/Education/payment-gateway-integration.jpg"
import WebSite from "../../Images/Explore Our Solutions/Education/Website.png"
import Security from "../../Images/Explore Our Solutions/Education/Security Protocol Implementation.png"
import ECommerce from "../../Images/Explore Our Solutions/Education/E-Commerce-Website.png"
import ChatBot from "../../Images/Explore Our Solutions/Education/Chatbot Development and Training.jpg"
import Logistic from "../../Images/Explore Our Solutions/Education/Logistic Partner API Integration.png"
import LeadAutomation from "../../Images/Explore Our Solutions/Education/Lead Automation.png"
import LoyaltyManagementSystem  from "../../Images/Explore Our Solutions/Education/Loyalty Management System.jpg";
import EventManagementPortal from "../../Images/Explore Our Solutions/Education/Event Management Portal.jpg"
import LeadAPI from "../../Images/Explore Our Solutions/Education/Lead API Integration.png"


const solutions = [
  {
    category: "Health Care",
    details: [
      {
        name: "Appointment Booking System",
        description:
          "Manage appointments seamlessly with our advanced booking system.",
        imageUrl: Appointment,
      },
      {
        name: "Patient Management System",
        description:
          "Streamline patient data and processes with integrated management solutions.",
        imageUrl: Patient,
      },
      {
        name: "Website For Doctors and Hospitals",
        description:
          "Professional and functional websites designed for medical professionals.",
        imageUrl: WebDoctor,
      },
      {
        name: "SEO",
        description:
          "Optimize your medical websites for better visibility and patient engagement.",
        imageUrl: SEO,
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
        imageUrl: LearingManagementSystem,
      },
      {
        name: "Attendance Tracking",
        description:
          "Automated systems for accurate and easy monitoring of student attendance.",
        imageUrl: AttandanceTracking,
      },
      {
        name: "Website for Schools and Universities",
        description: "Dynamic websites tailored for educational institutions.",
        imageUrl: WebSiteForSchools,
      },
      {
        name: "Overseas Education CRM",
        description: "Manage and engage with prospective students globally.",
        imageUrl: "https://source.unsplash.com/random/300x200?overseas",
      },
      {
        name: "Alumni Management System",
        description:
          "Keep your alumni network active and involved with our solutions.",
        imageUrl: AlumniManagementSystem,
      },
      {
        name: "SEO",
        description:
          "Increase the reach and impact of your educational institution online.",
        imageUrl: SEO,
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
        imageUrl: CRMERP,
      },
      {
        name: "Website",
        description:
          "Custom websites that highlight your manufacturing capabilities.",
        imageUrl: WebSite,
      },
      {
        name: "Lead Automation",
        description:
          "Automate lead generation and management to increase efficiency.",
        imageUrl: LeadAutomation,
      },
      {
        name: "Lead API Integration",
        description: "Sync leads from platforms like IndiaMart and TradeIndia.",
        imageUrl: LeadAPI,
      },
      {
        name: "SEO",
        description: "Optimize your digital presence to attract more business.",
        imageUrl: SEO,
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
        imageUrl: ECommerce,
      },
      {
        name: "Chatbot Integration",
        description: "Enhance customer service with AI-driven chatbots.",
        imageUrl: ChatBot,
      },
      {
        name: "Logistic Partner API Integration",
        description: "Seamlessly integrate with major logistic providers.",
        imageUrl: Logistic,
      },
      {
        name: "Payment Gateway Integrations",
        description: "Incorporate multiple payment options for your customers.",
        imageUrl: PaymentGateway,
      },
      {
        name: "Security Protocol Implementation",
        description: "Ensure your e-commerce platform is secure and reliable.",
        imageUrl: Security,
      },
      {
        name: "SEO",
        description: "Boost your online store's visibility in search engines.",
        imageUrl: SEO,
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
        imageUrl: WebSite,
      },
      {
        name: "SEO",
        description:
          "Optimize your retail business for greater online exposure.",
        imageUrl: SEO,
      },
      {
        name: "CRM",
        description:
          "Customer relationship management tailored for the retail industry.",
        imageUrl: CRM,
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
        imageUrl: WebSite,
      },
      {
        name: "SEO",
        description: "Increase visibility to boost support and engagement.",
        imageUrl: SEO,
      },
      {
        name: "Event Management Portal",
        description:
          "Manage your events smoothly with our comprehensive portal.",
        imageUrl: EventManagementPortal,
      },
      {
        name: "Loyalty Management System",
        description: "Foster supporter loyalty with targeted engagement tools.",
        imageUrl: LoyaltyManagementSystem,
      },
      {
        name: "Payment Gateway Integration",
        description: "Simplify donations with easy payment solutions.",
        imageUrl: PaymentGateway,
      },
      {
        name: "Chatbot Development and Training",
        description: "Engage visitors with interactive AI chatbots.",
        imageUrl: ChatBot,
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
                height="140"
                image={solution.imageUrl}
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
