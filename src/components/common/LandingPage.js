import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  useMediaQuery,
  CssBaseline,
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
import AboutUsComponent from "../../pages/AboutUsPage";
import ServiceSection from "../../pages/ServiceSection";
import SolutionsComponent from "./SolutionsComponent";
import BlogComponent from "../../pages/BlogComponent";
import SimpleBreadcrumbs from "./SimpleBreadcrumbs";

const theme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
    },
    MuiCard: { // Styling all cards uniformly
      styleOverrides: {
        root: {
          borderRadius: 8, // consistent rounded corners
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // subtle shadow
          borderColor: '#e0e0e0', // soft border color
          borderWidth: 1,
          borderStyle: 'solid',
          '&:hover': {
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)', // enhanced shadow on hover
          },
        }
      }
    }
  },
  palette: {
    background: {
      default: "#f5f5f5",
    },
    primary: {
      main: "#123456", // A professional dark blue
    },
    secondary: {
      main: "#789ABC", // A complementary soft blue
    },
  },
  spacing: 4, // Default spacing for padding and margins
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{ width: "100vw", padding: 0, margin: 0, overflowX: "hidden" }}
      >
        <Box
          sx={{
            my: 4,
            textAlign: "center",
            p: 5,
            backgroundImage: 'url("https://source.unsplash.com/random/1920x1080")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "common.white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "40vh",
          }}
        >
          <Typography variant="h2" gutterBottom component="h1">
            Welcome to ASC
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 3, maxWidth: "600px", textAlign: "center" }}
          >
            Innovating solutions for tomorrow's challenges.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Learn More
          </Button>
        </Box>
        <Box sx={{ my: 2 }}>
          <SimpleBreadcrumbs />
        </Box>

        <Grid container spacing={4} sx={{ px: 3, py: 5 }}>
          <Grid item xs={12}>
            <ServiceSection />
          </Grid>
          <Grid item xs={12}>
            <SolutionsComponent />
          </Grid>
          <Grid item xs={12}>
            <AboutUsComponent />
          </Grid>
          <Grid item xs={12}>
            <BlogComponent />
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
              backgroundColor: 'rgba(0, 51, 102, 0.8)', 
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
            <BottomNavigationAction
              label="Home"
              icon={<HomeIcon />}
              value={2}
            />
            <BottomNavigationAction
              label="Solutions"
              icon={<SolutionsIcon />}
              value={3}
            />
            <BottomNavigationAction
              label="Blog"
              icon={<BlogIcon />}
              value={4}
            />
          </BottomNavigation>
        )}
      </Container>
    </ThemeProvider>
  );
}
export default LandingPage;
