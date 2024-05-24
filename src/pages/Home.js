import React, { useState } from "react";
import {
  createTheme,
  useMediaQuery,
  Container,
  Box,
  Typography,
  Button,
  Grid,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ServicesIcon from "@mui/icons-material/Build";
import SolutionsIcon from "@mui/icons-material/Extension";
import BlogIcon from "@mui/icons-material/MenuBook";
import OurService from "../components/OurService/OurService";
import OurSolution from "../components/OurSolution/OurSolution";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import backImage from "../Images/backImage.jpeg"

const theme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          borderColor: "#e0e0e0",
          borderWidth: 1,
          borderStyle: "solid",
          "&:hover": {
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
  },
  palette: {
    background: {
      default: "#f5f5f5",
    },
    primary: {
      main: "#123456",
    },
    secondary: {
      main: "#789ABC",
    },
  },
  spacing: 4,
  typography: {
    fontFamily: "Poppins, sans-serif",
    h2: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 400,
    },
  },
});

function LandingPage() {
  const [value, setValue] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          backgroundImage:
            'url("https://source.unsplash.com/random/1920x1080?company")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "common.white",
          textAlign: "center",
          p: 6,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Typography variant="h2">Welcome to ASC</Typography>
        <Typography variant="h5">
          Innovating solutions for tomorrow's challenges.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Learn More
        </Button>
      </Box>
      <Grid container spacing={4} sx={{ px: 3, py: 5 }}>
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
      {isMobile && (
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          showLabels
          sx={{
            width: "100%",
            position: "fixed",
            bottom: 0,
            backgroundColor: "rgba(0, 51, 102, 0.8)",
            color: "white",
            "& .Mui-selected": { color: theme.palette.primary.main },
          }}
        >
          <BottomNavigationAction
            label="About Us"
            icon={<InfoIcon />}
            value={0}
          />
          <BottomNavigationAction
            label="Services"
            icon={<ServicesIcon />}
            value={1}
          />
          <BottomNavigationAction label="Home" icon={<HomeIcon />} value={2} />
          <BottomNavigationAction
            label="Solutions"
            icon={<SolutionsIcon />}
            value={3}
          />
          <BottomNavigationAction label="Blog" icon={<BlogIcon />} value={4} />
        </BottomNavigation>
      )}
    </Container>
  );
}
export default LandingPage;
