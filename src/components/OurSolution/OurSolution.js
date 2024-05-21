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

const solutions = [
  {
    category: "Health Care",
    details: [
      {
        name: "Appointment Booking System",
        description:
          "Manage appointments seamlessly with our advanced booking system.",
        imageUrl: "https://source.unsplash.com/random/300x200?appointment",
      },
      {
        name: "Patient Management System",
        description:
          "Streamline patient data and processes with integrated management solutions.",
        imageUrl: "https://source.unsplash.com/random/300x200?patient",
      },
      {
        name: "Website For Doctors and Hospitals",
        description:
          "Professional and functional websites designed for medical professionals.",
        imageUrl: "https://source.unsplash.com/random/300x200?hospital",
      },
      {
        name: "SEO",
        description:
          "Optimize your medical websites for better visibility and patient engagement.",
        imageUrl: "https://source.unsplash.com/random/300x200?seo",
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
        imageUrl: "https://source.unsplash.com/random/300x200?lms",
      },
      {
        name: "Attendance Tracking",
        description:
          "Automated systems for accurate and easy monitoring of student attendance.",
        imageUrl: "https://source.unsplash.com/random/300x200?attendance",
      },
      {
        name: "Website for Schools and Universities",
        description: "Dynamic websites tailored for educational institutions.",
        imageUrl: "https://source.unsplash.com/random/300x200?education",
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
        imageUrl: "https://source.unsplash.com/random/300x200?alumni",
      },
      {
        name: "SEO",
        description:
          "Increase the reach and impact of your educational institution online.",
        imageUrl: "https://source.unsplash.com/random/300x200?seo",
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
        imageUrl: "https://source.unsplash.com/random/300x200?manufacturing",
      },
      {
        name: "Website",
        description:
          "Custom websites that highlight your manufacturing capabilities.",
        imageUrl: "https://source.unsplash.com/random/300x200?website",
      },
      {
        name: "Lead Automation",
        description:
          "Automate lead generation and management to increase efficiency.",
        imageUrl: "https://source.unsplash.com/random/300x200?automation",
      },
      {
        name: "Lead API Integration",
        description: "Sync leads from platforms like IndiaMart and TradeIndia.",
        imageUrl: "https://source.unsplash.com/random/300x200?api",
      },
      {
        name: "SEO",
        description: "Optimize your digital presence to attract more business.",
        imageUrl: "https://source.unsplash.com/random/300x200?seo",
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
        imageUrl: "https://source.unsplash.com/random/300x200?ecommerce",
      },
      {
        name: "Chatbot Integration",
        description: "Enhance customer service with AI-driven chatbots.",
        imageUrl: "https://source.unsplash.com/random/300x200?chatbot",
      },
      {
        name: "Logistic Partner API Integration",
        description: "Seamlessly integrate with major logistic providers.",
        imageUrl: "https://source.unsplash.com/random/300x200?logistics",
      },
      {
        name: "Payment Gateway Integrations",
        description: "Incorporate multiple payment options for your customers.",
        imageUrl: "https://source.unsplash.com/random/300x200?payment",
      },
      {
        name: "Security Protocol Implementation",
        description: "Ensure your e-commerce platform is secure and reliable.",
        imageUrl: "https://source.unsplash.com/random/300x200?security",
      },
      {
        name: "SEO",
        description: "Boost your online store's visibility in search engines.",
        imageUrl: "https://source.unsplash.com/random/300x200?seo",
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
        imageUrl: "https://source.unsplash.com/random/300x200?retail",
      },
      {
        name: "SEO",
        description:
          "Optimize your retail business for greater online exposure.",
        imageUrl: "https://source.unsplash.com/random/300x200?seo",
      },
      {
        name: "CRM",
        description:
          "Customer relationship management tailored for the retail industry.",
        imageUrl: "https://source.unsplash.com/random/300x200?crm",
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
        imageUrl: "https://source.unsplash.com/random/300x200?nonprofit",
      },
      {
        name: "SEO",
        description: "Increase visibility to boost support and engagement.",
        imageUrl: "https://source.unsplash.com/random/300x200?seo",
      },
      {
        name: "Event Management Portal",
        description:
          "Manage your events smoothly with our comprehensive portal.",
        imageUrl: "https://source.unsplash.com/random/300x200?event",
      },
      {
        name: "Loyalty Management System",
        description: "Foster supporter loyalty with targeted engagement tools.",
        imageUrl: "https://source.unsplash.com/random/300x200?loyalty",
      },
      {
        name: "Payment Gateway Integration",
        description: "Simplify donations with easy payment solutions.",
        imageUrl: "https://source.unsplash.com/random/300x200?payment",
      },
      {
        name: "Chatbot Development and Training",
        description: "Engage visitors with interactive AI chatbots.",
        imageUrl: "https://source.unsplash.com/random/300x200?chatbot",
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
    <Container>
      <Typography variant="h4" sx={{ mt: 6, mb: 2, textAlign: "center" }}>
        Explore Our Solutions
      </Typography>
      <SolutionTabs
        solutions={solutions}
        selectedCategoryIndex={selectedCategoryIndex}
        setCategory={setSelectedCategoryIndex}
      />
      <Grid container spacing={4} sx={{ mt: 1 }}>
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
