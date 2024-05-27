import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
} from "@mui/material";

const blogPosts = [
  {
    title: "Future of AI in Business",
    summary:
      "Exploring how AI is transforming business landscapes across various industries.",
    imageUrl: "https://source.unsplash.com/random/300x200?business,ai",
    category: "Technology",
    id: 1,
  },
  {
    title: "Sustainable Practices for Startups",
    summary:
      "How new companies can grow while being environmentally responsible.",
    imageUrl: "https://source.unsplash.com/random/300x200?startup,environment",
    category: "Environment",
    id: 2,
  },
  {
    title: "The Impact of Remote Work",
    summary: "A look into how remote work is reshaping the modern workplace.",
    imageUrl: "https://source.unsplash.com/random/300x200?remote,work",
    category: "Business",
    id: 3,
  },
  {
    title: "Cybersecurity in 2024",
    summary:
      "What are the emerging threats and how businesses can protect themselves.",
    imageUrl: "https://source.unsplash.com/random/300x200?cybersecurity",
    category: "Technology",
    id: 4,
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );

  return (
    <Container maxWidth="xl" sx={{ mb: 4 }}>
      <Typography variant="h4" sx={{ mt: 4, mb: 2, textAlign: "center" }}>
        Latest from Our Blog
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          value={selectedCategory}
          label="Category"
          onChange={handleChangeCategory}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container spacing={4}>
        {blogPosts
          .filter(
            (post) =>
              selectedCategory === "" || post.category === selectedCategory
          )
          .map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card raised sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={post.imageUrl}
                  alt={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.summary}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Blog;
