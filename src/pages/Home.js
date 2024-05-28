import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import OurService from "../components/OurService/OurService";
import OurSolution from "../components/OurSolution/OurSolution";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import ASC from "../Images/ASC/ASC.jpg";

const LandingPage = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Box
        sx={{
          backgroundImage: `url(${ASC})`,
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
          Welcome to ASC
        </Typography>
        <Typography variant="h5">
          Innovating solutions for tomorrow's challenges.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <OurService />
        </Grid>
        <Grid item xs={12}>
          <OurSolution />
        </Grid>
        <Grid item xs={12}>
          <AboutUs />
        </Grid>
        <Grid item xs={12}>
          <Blog />
        </Grid>
      </Grid>
    </Container>
  );
};
export default LandingPage;
