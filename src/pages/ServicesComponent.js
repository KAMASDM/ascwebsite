import React from 'react';
import { Typography, Container, Paper, Grid, Card, CardActionArea, CardMedia, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// Custom styled button
const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
    margin: theme.spacing(1),
}));

function ServicesComponent() {
    const navigate = useNavigate();

    const services = [
        {
            name: "SEO Services",
            description: "Optimize your online presence with our expert SEO strategies that boost your rankings and visibility.",
            imageUrl: "https://source.unsplash.com/random/300x200?seo",
            link: "/seo"
        },
        {
            name: "Web Development",
            description: "Build responsive and dynamic websites tailored to meet your business needs.",
            imageUrl: "https://source.unsplash.com/random/300x200?webdev",
            link: "/web-development"
        },
        {
            name: "E-Commerce Solutions",
            description: "Create robust e-commerce platforms that provide seamless shopping experiences.",
            imageUrl: "https://source.unsplash.com/random/300x200?ecommerce",
            link: "/ecommerce"
        },
        {
            name: "Mobile App Development",
            description: "Develop high-performance mobile applications for iOS and Android platforms.",
            imageUrl: "https://source.unsplash.com/random/300x200?mobileApp",
            link: "/mobile-app"
        },
        {
            name: "Digital Marketing",
            description: "Leverage digital channels to enhance your brand's online presence and engage with a wider audience.",
            imageUrl: "https://source.unsplash.com/random/300x200?digitalMarketing",
            link: "/digital-marketing"
        },
        {
            name: "Cloud Solutions",
            description: "Implement scalable cloud solutions to enhance your business operations and reduce costs.",
            imageUrl: "https://source.unsplash.com/random/300x200?cloud",
            link: "/cloud-solutions"
        }
    ];

    return (
        <Container maxWidth="lg">
            <Paper elevation={6} sx={{ p: 4, m: 2, borderRadius: '15px', backdropFilter: 'blur(15px)' }}>
                <Typography variant="h4" component="h2" gutterBottom align="center" color="primary">
                    Our Services
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card raised sx={{
                                height: '100%',
                                transition: 'transform 0.3s ease-in-out',
                                borderRadius: '15px',
                                '&:hover': {
                                    transform: 'scale(1.08)',
                                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                                },
                                bgcolor: 'background.paper'
                            }}>
                                <CardActionArea onClick={() => navigate(service.link)}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={service.imageUrl}
                                        alt={service.name}
                                        sx={{ objectFit: 'cover' }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {service.name}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            {service.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <StyledButton onClick={() => navigate(service.link)}>
                                    Know More
                                </StyledButton>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Container>
    );
}

export default ServicesComponent;
