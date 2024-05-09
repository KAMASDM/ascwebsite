import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';

function SimpleBreadcrumbs() {
  // Here you might use React Router's `useLocation` to dynamically set breadcrumbs
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ margin: '20px 0' }}>
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Typography color="text.primary">Landing</Typography>
    </Breadcrumbs>
  );
}

export default SimpleBreadcrumbs;
