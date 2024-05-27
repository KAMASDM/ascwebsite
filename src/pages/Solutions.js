import React from "react";
import { Typography, Container, Box } from "@mui/material";
import OurSolution from "../components/OurSolution/OurSolution";

const Solutions = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Box
        sx={{
          backgroundImage:
            'url("https://source.unsplash.com/random/1920x1080?solution")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "common.white",
          textAlign: "center",
          p: 6,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Typography variant="h2">
          Innovative Solutions Tailored for Your Business
        </Typography>
        <Typography variant="h5">
          Discover how our solutions can transform your business operations.
        </Typography>
      </Box>
      <OurSolution />
    </Container>
  );
};

export default Solutions;
