import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import person1 from "../../Images/testi_1.png";
import person2 from "../../Images/testi_2.png";

const testimonials = [
  {
    name: "Pratik Das",
    designation: "-",
    company: "-",
    image: person1,
    testimonial:
      "It was absolutely amazing to interact with Jeegar at Anant Soft Computing. They are extremely professional in their work ethics and process and upfront about costs and Timelines. Was a great experience. Thank you Anant Soft Computing Team.",
  },
  {
    name: "Sandip Patel",
    designation: "Director",
    company: "Espi Visa Consultants Pvt Ltd",
    image: person2,
    testimonial:
      "I have given my LMS work to Anant soft Computing . Anant Soft Computing team had given nice support to us . The founder & CEO , Mr. Jigar Desai is personally involved in every project and also giving nice suggestion in each and every architect of system.",
  },
  {
    name: "Jimish Sura",
    designation: "-",
    company: "-",
    image: person1,
    testimonial:
      "Anant Soft assisted with analysis of requirements, technology feasibility, design and development of various IT projects implemented in Conart. And deliver multiple projects successfully on time.",
  },
  {
    name: "Milind Dave",
    designation: "-",
    company: "-",
    image: person2,
    testimonial:
      "Best web development company in Vadodara and the colleagues are open to sharing knowledge and real-time solutions with each other.",
  },
  {
    name: "Pujan Shah",
    designation: "-",
    company: "SP Mortgages Pvt Ltd",
    image: person1,
    testimonial:
      "I have engaged Anant soft Computing for revamping our existing website and to design a unique dashboard for our clients use. Also, I have felt overall service and communication to satisfactory level especially when I am dealing from Australia.",
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
