
import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { useMemo } from 'react';





function SimpleBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const breadcrumbItems = useMemo(() => {
    return pathnames.map((value, index) => {
      const last = index === pathnames.length - 1;
      const to = `/${pathnames.slice(0, index + 1).join('/')}`;

      return last ? (
        <Typography color="text.primary" key={to}>
          {value.charAt(0).toUpperCase() + value.slice(1)}  // Capitalize and display as the current page
        </Typography>
      ) : (
        <Link
          component={RouterLink}
          to={to}
          underline="hover"
          color="inherit"
          key={to}
        >
          {value.charAt(0).toUpperCase() + value.slice(1)}  // Capitalize and make it a clickable link
        </Link>
      );
    });
  }, [pathnames]);

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ margin: '20px 0' }}>
      <Link component={RouterLink} to="/" underline="hover" color="inherit">
        Home
      </Link>
      {breadcrumbItems}
    </Breadcrumbs>
  );
}

export default SimpleBreadcrumbs;
