import React from 'react';
import { Typography, Box, Button } from '@mui/material';

function HomeComponent() {
  return (
    <Box
      sx={{
        my: 4,
        textAlign: 'center',
        pt: 5,
        pb: 8,
        backgroundImage: 'url("https://source.unsplash.com/random/1920x1080")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'common.white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        backdropFilter: 'blur(10px)',
        width: '95vw',
        margin: 'auto',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to ASC
      </Typography>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Innovating solutions for tomorrow's challenges.
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Learn More
      </Button>
    </Box>
  );
}

export default HomeComponent;
