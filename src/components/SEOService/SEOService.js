import React from "react";
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
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import TrafficIcon from "@mui/icons-material/Traffic";
import InsightsIcon from "@mui/icons-material/Insights";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CompetitiveAdvantageIcon from "@mui/icons-material/BarChart";

const seoServices = [
  {
    title: "Keyword Research",
    description:
      "Identify the best keywords for your market and optimize your content to rank higher.",
    image: "https://source.unsplash.com/random/300x200?keyword",
  },
  {
    title: "On-Page Optimization",
    description:
      "Optimize your site's content and HTML source code to improve visibility.",
    image: "https://source.unsplash.com/random/300x200?onpage-seo",
  },
  {
    title: "Off-Page Optimization",
    description:
      "Enhance your website's position in SERPs through activities outside the boundaries of your pages.",
    image: "https://source.unsplash.com/random/300x200?offpage-seo",
  },
  {
    title: "Content Creation",
    description:
      "Develop engaging content that drives traffic and converts visitors into customers.",
    image: "https://source.unsplash.com/random/300x200?content-creation",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Utilize analytics to track your success and refine strategies for continuous improvement.",
    image: "https://source.unsplash.com/random/300x200?seo-analytics",
  },
  {
    title: "Real-Time Data",
    description:
      "Use real-time data to adjust your SEO strategies dynamically for maximum effectiveness.",
    image: "https://source.unsplash.com/random/300x200?real-time-data",
  },
];

const seoReasons = [
  {
    title: "Visibility and Branding",
    description:
      "SEO significantly increases your online visibility, making it easier for potential customers to find you when they search for what you offer.",
    icon: (
      <VisibilityIcon sx={{ fontSize: 40, animation: "float 5s infinite" }} />
    ),
  },
  {
    title: "Credibility",
    description:
      "Ranking high in search engines lends your business a higher degree of credibility in the eyes of your customers.",
    icon: <ThumbUpIcon sx={{ fontSize: 40, animation: "float 5s infinite" }} />,
  },
  {
    title: "Traffic",
    description:
      "With improved visibility and credibility, you naturally attract more site traffic, which can lead to increased sales and customer engagement.",
    icon: <TrafficIcon sx={{ fontSize: 40, animation: "float 5s infinite" }} />,
  },
  {
    title: "Insight into Customer Behavior",
    description:
      "SEO analytics provide valuable insights into customer behavior, helping you tailor your offerings and marketing strategies more effectively.",
    icon: (
      <InsightsIcon sx={{ fontSize: 40, animation: "float 5s infinite" }} />
    ),
  },
  {
    title: "Cost-Effectiveness",
    description:
      "SEO is one of the most cost-effective marketing strategies because it targets users who are actively looking for your products and services online.",
    icon: (
      <MonetizationOnIcon
        sx={{ fontSize: 40, animation: "float 5s infinite" }}
      />
    ),
  },
  {
    title: "Competitive Advantage",
    description:
      "Implementing effective SEO strategies can set you apart from your competitors, making your business more competitive in your industry.",
    icon: (
      <CompetitiveAdvantageIcon
        sx={{ fontSize: 40, animation: "float 5s infinite" }}
      />
    ),
  },
];

const SEOService = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Box
        sx={{
          backgroundImage:
            'url("https://source.unsplash.com/random/1920x1080?seo")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "common.white",
          textAlign: "center",
          p: 6,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Typography variant="h2">Master SEO with Our Expertise</Typography>
        <Typography variant="h5">
          Elevate your site's performance and visibility
        </Typography>
      </Box>

      <Typography variant="h4" sx={{ m: 4, textAlign: "center" }}>
        The Way We SEO
      </Typography>

      <Grid container spacing={4}>
        {seoServices.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card raised sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" sx={{ m: 4, textAlign: "center" }}>
        Why SEO?
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
        {seoReasons.map((reason, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              raised
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Box sx={{ mb: 2 }}>{reason.icon}</Box>
                <Typography variant="h6" component="h2" gutterBottom>
                  {reason.title}
                </Typography>
                <Typography variant="body2">{reason.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SEOService;
