import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

const testimonials = [
  {
    name: "Jane Doe",
    designation: "Marketing Director",
    company: "Tech Solutions",
    image: "https://source.unsplash.com/random/100x100?person1",
    testimonial:
      "Thanks to their expert team and cutting-edge strategies, our site traffic has doubled and sales have increased exponentially.",
  },
  {
    name: "John Smith",
    designation: "CEO",
    company: "Innovate Startups",
    image: "https://source.unsplash.com/random/100x100?person2",
    testimonial:
      "Their tailored SEO services have not only improved our visibility but also helped us gain a competitive edge in our industry.",
  },
  {
    name: "Alice Johnson",
    designation: "Product Manager",
    company: "Creative Ventures",
    image: "https://source.unsplash.com/random/100x100?person3",
    testimonial:
      "They provided us with incredible insights into our website's performance that drove our strategies forward effectively.",
  },
];

const Testimonial = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        What Our Clients Say
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                mx: "auto",
                boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Avatar
                  alt={testimonial.name}
                  src={testimonial.image}
                  sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
                />
                <Typography variant="h6" component="div">
                  {testimonial.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {testimonial.designation}, {testimonial.company}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2 }}
                >
                  "{testimonial.testimonial}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonial;
