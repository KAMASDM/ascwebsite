import React from 'react';
import { Typography, Grid, Paper, Card, CardActionArea, CardMedia, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

function ServicesComponent() {
    const navigate = useNavigate();

    const services = [
        {
            name: "SEO",
            description: "Optimize your online presence with bespoke SEO strategies that boost your rankings and visibility.",
            imageUrl: "https://source.unsplash.com/random/300x200?seo",
            link: "/seo" 
        },
        {
            name: "Smart Web Development",
            description: "Develop intelligent, responsive websites tailored to your business needs.",
            imageUrl: "https://source.unsplash.com/random/300x200?webdev",
            link: "/web-development"
        },
        {
            name: "E-Commerce Solutions",
            description: "Launch powerful online stores with a seamless shopping experience that drives sales.",
            imageUrl: "https://source.unsplash.com/random/300x200?ecommerce",
            link: "/ecommerce"
        },
        {
            name: "CRM / ERP Development",
            description: "Implement robust systems that streamline operations and enhance organizational efficiency.",
            imageUrl: "https://source.unsplash.com/random/300x200?crm",
            link: "/crm-erp"
        },
        {
            name: "Mobile Application Development",
            description: "Create compelling mobile applications that provide excellent user experiences across all devices.",
            imageUrl: "https://source.unsplash.com/random/300x200?mobileApp",
            link: "/mobile-app"
        },
        {
            name: "Hosting",
            description: "Reliable and secure hosting services to ensure your online operations are smooth and uninterrupted.",
            imageUrl: "https://source.unsplash.com/random/300x200?hosting",
            link: "/hosting"
        }
    ];

    return (
        <Paper sx={{ p: 2,bgcolor: 'rgba(255, 255, 255, 0.8)', overflow: 'hidden', textAlign:'center', borderRadius: '12px'}}>
            <Typography variant="h4" gutterBottom component="div" color="text.primary">
                Our Services
            </Typography>
            <Grid container spacing={4}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card raised sx={{
                            height: '100%',
                            transition: '0.3s',
                            borderRadius: '12px',
                            '&:hover': { transform: 'scale(1.05)', boxShadow: 10 },
                            bgcolor: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '12px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={service.imageUrl}
                                    alt={service.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {service.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <Button size="small" color="primary" onClick={() => navigate(service.link)}>
                                Know More
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}

export default ServicesComponent;
