import React from 'react';
import {  Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Container, Divider } from '@mui/material';

const blogPosts = [
    {
        title: "Future of AI in Business",
        summary: "Exploring how AI is transforming business landscapes across various industries.",
        imageUrl: "https://source.unsplash.com/random/300x200?business,ai",
        id: 1
    },
    {
        title: "Sustainable Practices for Startups",
        summary: "How new companies can grow while being environmentally responsible.",
        imageUrl: "https://source.unsplash.com/random/300x200?startup,environment",
        id: 2
    },
    {
        title: "The Impact of Remote Work",
        summary: "A look into how remote work is reshaping the modern workplace.",
        imageUrl: "https://source.unsplash.com/random/300x200?remote,work",
        id: 3
    },
    {
        title: "Cybersecurity in 2024",
        summary: "What are the emerging threats and how businesses can protect themselves.",
        imageUrl: "https://source.unsplash.com/random/300x200?cybersecurity",
        id: 4,
       
    }
];

const BlogCard = ({ post }) => (
    <Card raised sx={{
        width: '100%',
        
        transition: '0.3s',
        '&:hover': { transform: 'scale(1.05)', boxShadow: 10 },
        bgcolor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginTop: '2px'
    }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="200"
                image={post.imageUrl}
                alt={post.title}
            />
            <CardContent sx={{marginTop: '5px',}}>
                <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.summary}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);

const BlogComponent = () => {
    return (
        <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center', mb: 2 }}>
                Latest from Our Blog
            </Typography>
            <Divider />
            <Grid container spacing={2}>
                {blogPosts.map((post) => (
                    <Grid item xs={12} sm={6} md={3} key={post.id}>  
                        <BlogCard post={post} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default BlogComponent;
