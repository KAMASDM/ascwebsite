import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
  Divider,
} from "@mui/material";
import ValuesIcon from "@mui/icons-material/Star";
import CultureIcon from "@mui/icons-material/Work";
import Person from "../Images/Testimonial/Profile.jpg";

const AboutUs = () => {
  return (
    <>
      <Typography variant="h4" sx={{ mt: 4, mb: 2, textAlign: "center" }}>
        About Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card raised sx={{ height: "100%" }}>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{ mb: 2 }}
              >
                Leadership Team
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Avatar src={Person} />
                </Grid>
                <Grid item>
                  <Chip
                    label="Jigar Desai - CEO"
                    variant="outlined"
                    sx={{ m: 1 }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Avatar src={Person} />
                </Grid>
                <Grid item>
                  <Chip
                    label="Vijendrasinh - SEO Manager"
                    variant="outlined"
                    sx={{ m: 1 }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Avatar src={Person} />
                </Grid>
                <Grid item>
                  <Chip
                    label="Mehul Machhi - Back End Developer"
                    variant="outlined"
                    sx={{ m: 1 }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Avatar src={Person} />
                </Grid>
                <Grid item>
                  <Chip
                    label="Sagar Ramani - Front End Developer"
                    variant="outlined"
                    sx={{ m: 1 }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Avatar src={Person} />
                </Grid>
                <Grid item>
                  <Chip
                    label="Darshan Patel - Front End Developer"
                    variant="outlined"
                    sx={{ m: 1 }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card raised sx={{ height: "100%" }}>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{ mb: 2 }}
              >
                Core Values
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <ValuesIcon sx={{ fontSize: 50, color: "#f57c00" }} />
              <ValuesIcon sx={{ fontSize: 50, color: "#f57c00" }} />
              <ValuesIcon sx={{ fontSize: 50, color: "#f57c00" }} />
              <ValuesIcon sx={{ fontSize: 50, color: "#f57c00" }} />
              <ValuesIcon sx={{ fontSize: 50, color: "#f57c00" }} />
              <Typography variant="body1" sx={{ mt: 2 }}>
                Our core values define our culture and guide our decision-making
                processes. We prioritize:
              </Typography>
              <Typography variant="body1" component="div" sx={{ mt: 2 }}>
                <ul>
                  <li>
                    Integrity : Upholding the highest standards in all our
                    actions.
                  </li>
                  <li>
                    Innovation : Continuously seeking new and creative
                    solutions.
                  </li>
                  <li>
                    Excellence : Striving for perfection in everything we do.
                  </li>
                  <li>
                    Teamwork : Collaborating effectively to achieve common
                    goals.
                  </li>
                  <li>
                    Customer Focus : Putting our customers at the center of our
                    decisions.
                  </li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card raised sx={{ height: "100%" }}>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{ mb: 2 }}
              >
                Company Culture
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <CultureIcon sx={{ fontSize: 50, color: "#4caf50" }} />
              <Typography variant="body1" sx={{ mt: 2 }}>
                Our work environment is dynamic and collaborative, fostering
                innovation and inclusivity. Key aspects include:
              </Typography>
              <Typography variant="body1" component="div" sx={{ mt: 2 }}>
                <ul>
                  <li>
                    Dynamic Environment : Embracing change and encouraging new
                    ideas.
                  </li>
                  <li>
                    Collaborative Work : Promoting teamwork and open
                    communication.
                  </li>
                  <li>
                    Innovation : Supporting creativity and continuous
                    improvement.
                  </li>
                  <li>
                    Inclusivity : Ensuring a welcoming and diverse workplace.
                  </li>
                  <li>
                    Community Involvement : Participating in and supporting
                    community initiatives.
                  </li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
