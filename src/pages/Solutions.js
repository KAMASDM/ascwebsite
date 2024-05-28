import React from "react";
import { Typography, Container, Box } from "@mui/material";
import OurSolution from "../components/OurSolution/OurSolution";
import SolutionBanner from "../Images/Solution/solutionBanner.jpg";

const Solutions = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Box
        sx={{
          backgroundImage: `url(${SolutionBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "common.white",
          textAlign: "center",
          p: 6,
          borderRadius: "12px",
          overflow: "hidden",
          height: "180px",
        }}
      >
        <Typography variant="h2" sx={{ mt: 4 }}>
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
