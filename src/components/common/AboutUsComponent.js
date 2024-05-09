import React from "react";
import {
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BusinessIcon from "@mui/icons-material/Business";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from "@mui/icons-material/Group";


function AboutUsComponent() {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        bgcolor: "background.default",
        textAlign: "center",
        borderRadius: "12px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Divider />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} marginTop={3}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Introduction</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Opening Statement: A compelling introduction that captures the
                essence of the company and its purpose. Company Vision and
                Mission: A clear statement of the company's long-term vision and
                immediate mission.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={6} md={4} marginTop={3}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Company History</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Timeline: A chronological overview of key milestones and
                achievements that have shaped the company. Founding Story: A
                narrative about how the company was founded, including the
                inspiration behind it and the challenges faced.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={6} md={4} marginTop={3}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Core Values</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Values List: A list or a series of statements that define the
                core values driving the company’s culture and decision-making
                processes. Explanation of Values: How these values influence the
                company’s operations, product development, and customer service.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            raised
            sx={{
              minHeight: 300,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "16px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Leadership Team
              </Typography>
              <Chip
                icon={<GroupIcon />}
                label="John Doe - CEO"
                variant="outlined"
                sx={{ m: 1 }}
              />
              <Chip
                icon={<GroupIcon />}
                label="Jane Smith - CTO"
                variant="outlined"
                sx={{ m: 1 }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            raised
            sx={{
              minHeight: 300,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "16px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Achievements
              </Typography>
              <Typography component="div">
                <Chip
                  icon={<EmojiEventsIcon />}
                  label="Award 2021"
                  variant="outlined"
                  sx={{ m: 1 }}
                />
                <Chip
                  icon={<BusinessIcon />}
                  label="ISO 9001 Certified"
                  variant="outlined"
                  sx={{ m: 1 }}
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            raised
            sx={{
              minHeight: 300,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "16px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Company Culture
              </Typography>
              <Typography>
                Work Environment: Description of the work atmosphere,
                highlighting aspects like collaboration, innovation, diversity,
                and inclusion. Employee Initiatives: Information on unique
                employee programs, community involvement, or social
                responsibility initiatives.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        </Grid>
        </Paper>
    );
}

export default AboutUsComponent;
