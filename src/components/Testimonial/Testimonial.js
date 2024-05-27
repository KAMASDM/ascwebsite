import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Typography,
  Container,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import person1 from "../../Images/Testimonial/testi_1.png";
import person2 from "../../Images/Testimonial/testi_2.png";

const testimonials = [
  {
    name: "Pratik Das",
    image: person1,
    testimonial:
      "It was absolutely amazing to interact with Jeegar at Anant Soft Computing. They are extremely professional in their work ethics and process and upfront about costs and Timelines. Was a great experience. Thank you Anant Soft Computing Team.",
  },
  {
    name: "Sandip Patel",
    image: person2,
    testimonial:
      "I have given my LMS work to Anant soft Computing . Anant Soft Computing team had given nice support to us . The founder & CEO , Mr. Jigar Desai is personally involved in every project and also giving nice suggestion in each and every architect of system.",
  },
  {
    name: "Jimish Sura",
    image: person1,
    testimonial:
      "Anant Soft assisted with analysis of requirements, technology feasibility, design and development of various IT projects implemented in Conart. And deliver multiple projects successfully on time.",
  },
  {
    name: "Milind Dave",
    image: person2,
    testimonial:
      "Best web development company in Vadodara and the colleagues are open to sharing knowledge and real-time solutions with each other.",
  },
  {
    name: "Pujan Shah",
    image: person1,
    testimonial:
      "I have engaged Anant soft Computing for revamping our existing website and to design a unique dashboard for our clients use. Also, I have felt overall service and communication to satisfactory level especially when I am dealing from Australia.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        What Our Clients Say
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <Card
              sx={{
                width: 345,
                height: 400,
                mx: "auto",
                boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
                mb: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                <Avatar
                  alt={testimonial.name}
                  src={testimonial.image}
                  sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
                />
                <Typography variant="h6" component="div">
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2 }}
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 6,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  "{testimonial.testimonial}"
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Testimonial;
