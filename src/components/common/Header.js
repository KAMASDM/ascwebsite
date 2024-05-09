import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About Us', link: '/about-us' },
    { text: 'Services', link: '/services' },
    { text: 'Solutions', link: '/solutions' },
    { text: 'Case Studies', link: '/case-studies' },
    { text: 'Blog', link: '/blog' },
    { text: 'Careers', link: '/careers' },
    { text: 'Support/Help Center', link: '/support' },
    { text: 'Contact Us', link: '/contact-us' },
    { text: 'Client Portal', link: '/client-portal' }
  ];

  const drawer = (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem button component={Link} to={item.link} key={item.text} onClick={() => setDrawerOpen(false)}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <>
      <AppBar position="sticky" sx={{
        backgroundColor: 'rgba(0, 51, 102, 0.6)', 
        backdropFilter: 'blur(10px)', 
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '12px', 
        margin: theme.spacing(1),
        padding: '0 20px',
        justifyContent: 'space-between',
        width: 'calc(100% - 32px)',
        marginLeft: 'auto',
        marginRight: 'auto', 
      }}>
        <Toolbar sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 8px',
        }}>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <div style={{ display: 'flex', flexGrow: 1 }}>
              {menuItems.map((item) => (
                <Button color="inherit" component={Link} to={item.link} sx={{ margin: '0 12px' }} key={item.text}>
                  {item.text}
                </Button>
              ))}
            </div>
          )}
          <Typography variant="h6" sx={{
            
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)', 
            flexGrow: isMobile ? 1 : 0,
            textAlign: isMobile ? 'center' : 'right',
            imageRendering: 'pixelated',
          }}>
            ASC
          </Typography>

        </Toolbar>
      </AppBar>
      {drawer}
    </>
  );
}

export default Header;
