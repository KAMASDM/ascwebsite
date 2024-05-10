import { createTheme } from "@mui/material/styles"; 

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5", // Light grey background instead of stark white
      paper: "#ffffff",
    },
    primary: {
      main: "#123456", // Professional dark blue
    },
    secondary: {
      main: "#789ABC", // Soft complementary blue
    },
  },
  spacing: 4,
  typography: {
    fontFamily: "Poppins, sans-serif",
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem', // Slightly larger for headings
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.3rem', // Slightly larger for subheadings
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.5, // Improved line spacing for readability
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          margin: "8px 0px", // Give space between each accordion
          boxShadow: "none", // Remove default shadow
          '&:before': { // Remove default line separator
            display: 'none',
          },
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Consistent rounded corners
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)", // Subtle shadows for cards
        }
      }
    },
  },
});
export default theme;