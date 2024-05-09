import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#003366', color: '#ffffff', py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'left', marginLeft: '2px' }}>
              <img
                src="https://anantsoftcomputing.com/jeegardesai/ASC.png"
                alt="Anant Soft Computing Logo"
                style={{ width: 120, height: 'auto', marginBottom: 2 }}
              />
            </Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              About Us
            </Typography>
            <Typography variant="body2">
              Our mission is to deliver innovative solutions that cater to diverse business needs.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Information
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Anant Soft Computing<br />
              1 C Satyam Appartment, Vishwas Colony Alkapuri,<br />
              Vadodara -390007<br />
              Phone: 9638544455<br />
              Email: info@anantsoftcomputing.com
            </Typography>
            <Box>
              <IconButton href="https://www.facebook.com/anantsoftcomputing/" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://www.instagram.com/anantsoftcomputing/" color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://g.page/r/Cey-9CAcyT3aEBM/review" color="inherit">
                <GoogleIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com" color="inherit">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} alignContent={'right'}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Stack direction="column" spacing={0.5}>
              <Link href="/privacy-policy" color="inherit">Privacy Policy</Link>
              <Link href="/terms-and-conditions" color="inherit">Terms and Conditions</Link>
              <Link href="/services" color="inherit">Services</Link>
              <Link href="/solutions" color="inherit">Solutions</Link>
              <Link href="/blogs" color="inherit">Blogs</Link>
              <Link href="/contact-us" color="inherit">Contact Us</Link>
              <Link href="/careers" color="inherit">Careers</Link>
            </Stack>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
          © {new Date().getFullYear()} ASC. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
