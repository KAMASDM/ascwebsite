import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Stack,
} from "@mui/material";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ backgroundColor: "#1976d2", color: "#ffffff", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}
              onClick={() => navigate("/")}
            >
              <img
                src="https://anantsoftcomputing.com/jeegardesai/ASC.png"
                alt="Anant Soft Computing Logo"
                style={{ width: 120, height: "auto" }}
              />
            </Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ pr: { md: 4 } }}>
              Our mission is to deliver innovative solutions that cater to
              diverse business needs.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Contact Information
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Anant Soft Computing
              <br />
              1 C Satyam Apartment, Vishwas Colony Alkapuri,
              <br />
              Vadodara - 390007
              <br />
              Phone: 9638544455
              <br />
              Email: info@anantsoftcomputing.com
            </Typography>
            <Box>
              <IconButton
                href="https://www.facebook.com/anantsoftcomputing/"
                sx={{ color: "inherit" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/anantsoftcomputing/"
                sx={{ color: "inherit" }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://g.page/r/Cey-9CAcyT3aEBM/review"
                sx={{ color: "inherit" }}
              >
                <GoogleIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <Stack direction="column" spacing={0.5}>
              <Link href="/privacy-policy" color="inherit" underline="none">
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                color="inherit"
                underline="none"
              >
                Terms and Conditions
              </Link>
              <Link href="/Services" color="inherit" underline="none">
                Services
              </Link>
              <Link href="/Solutions" color="inherit" underline="none">
                Solutions
              </Link>
              <Link href="/Blog" color="inherit" underline="none">
                Blogs
              </Link>
              <Link href="/ContactUs" color="inherit" underline="none">
                Contact Us
              </Link>
              <Link href="/Careers" color="inherit" underline="none">
                Careers
              </Link>
            </Stack>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 3, textAlign: "center" }}>
          © {new Date().getFullYear()} ASC. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;