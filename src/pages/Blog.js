import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(
        "https://newone.anantsoftcomputing.com/api/list-blog/"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBlogData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ mb: 4, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    blogData.length > 0 && (
      <Container maxWidth="xl" sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ m: 4, textAlign: "center" }}>
          Latest from Our Blog
        </Typography>
        <Grid container spacing={4}>
          {blogData.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card raised sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="280"
                  image={post.images}
                  alt={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  );
};

export default Blog;
