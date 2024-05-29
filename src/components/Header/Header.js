import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Services", link: "/Services" },
    { text: "Solutions", link: "/Solutions" },
    { text: "Blog", link: "/Blog" },
    { text: "Careers", link: "/Careers" },
    { text: "Contact Us", link: "/ContactUs" },
  ];

  return (
    <>
      <AppBar
        position={isMobile ? "fixed" : "sticky"}
        sx={{
          backgroundColor: theme.palette.primary.main,
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: isMobile ? "0" : "12px",
          margin: isMobile ? "0" : theme.spacing(1),
          padding: "0 20px",
          justifyContent: "space-between",
          width: isMobile ? "100%" : "calc(100% - 32px)",
          top: isMobile ? "auto" : 0,
          bottom: isMobile ? 0 : "auto",
          left: "auto",
          right: "auto",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 8px",
          }}
        >
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
            <div style={{ display: "flex", flexGrow: 1 }}>
              {menuItems.map((item) => (
                <Button
                  color="inherit"
                  component={Link}
                  to={item.link}
                  sx={{ margin: "0 12px" }}
                  key={item.text}
                >
                  {item.text}
                </Button>
              ))}
            </div>
          )}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              flexGrow: isMobile ? 1 : 0,
              textAlign: isMobile ? "center" : "right",
              imageRendering: "pixelated",
            }}
          >
            ASC
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ width: isMobile ? "50%" : "250px" }}
        PaperProps={{
          sx: { width: isMobile ? "50%" : "250px" },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              component={Link}
              to={item.link}
              key={item.text}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
