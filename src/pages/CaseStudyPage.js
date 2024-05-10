import React, { useState } from 'react';
import {
  Typography, Container, Tab, Tabs, Box, Card, CardContent, Grid, CardMedia, Button, Dialog
} from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import ContactUsComponent from '../components/common/ContactUsComponent';

function CaseStudyPage() {
    const [tabValue, setTabValue] = useState('1');
    const [openContactForm, setOpenContactForm] = useState(false);

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleOpenContactForm = () => {
        setOpenContactForm(true);
    };

    const handleCloseContactForm = () => {
        setOpenContactForm(false);
    };

    const categories = {
        '1': { title: "SEO", studies: [
            { name: "SEO Optimization", description: "How we improved a client's traffic by 300% through targeted keyword optimization and backlink strategies.", imageUrl: "https://source.unsplash.com/random/300x200?seo" },
            { name: "Local SEO Success", description: "Increasing local visibility for a small business, resulting in a 50% increase in foot traffic.", imageUrl: "https://source.unsplash.com/random/300x200?local-seo" },
            { name: "Mobile SEO Enhancement", description: "Optimized mobile SEO for a retail giant, enhancing mobile traffic and sales by 200%.", imageUrl: "https://source.unsplash.com/random/300x200?mobile-seo" },
            { name: "Video SEO Strategy", description: "Implemented a video SEO strategy that increased organic video views by 500% for a media company.", imageUrl: "https://source.unsplash.com/random/300x200?video-seo" },
            { name: "Technical SEO Audit", description: "Conducted a technical SEO audit and corrections that resolved indexing issues and improved site speed by 40%.", imageUrl: "https://source.unsplash.com/random/300x200?technical-seo" }
        
        ]},
        '2': { title: "Web Development", studies: [
            { name: "E-commerce Platform", description: "Development of a high-traffic e-commerce site that doubled the client’s online sales within the first year.", imageUrl: "https://source.unsplash.com/random/300x200?web" },
            { name: "Corporate Website Redesign", description: "Complete overhaul of a corporate website, enhancing user experience and accessibility, leading to a 40% decrease in bounce rate.", imageUrl: "https://source.unsplash.com/random/300x200?corporate-web" },
            { name: "API Development", description: "Developed and integrated custom APIs that streamlined operations across e-commerce platforms.", imageUrl: "https://source.unsplash.com/random/300x200?api-development" },
            { name: "Progressive Web App", description: "Converted a traditional e-commerce site into a progressive web app, increasing user retention.", imageUrl: "https://source.unsplash.com/random/300x200?progressive-web-app" },
            { name: "Accessibility Enhancement", description: "Enhanced website accessibility to comply with WCAG 2.1 standards, opening new market demographics for the client.", imageUrl: "https://source.unsplash.com/random/300x200?web-accessibility" }

        ]},
        '3': { title: "Mobile App Development", studies: [
            { name: "Fitness App Launch", description: "Creation of a custom fitness app that saw over 100,000 downloads in the first three months post-launch.", imageUrl: "https://source.unsplash.com/random/300x200?app-development" },
            { name: "Educational App for Kids", description: "Developed an interactive learning app for children, which became the top-rated app in its category.", imageUrl: "https://source.unsplash.com/random/300x200?educational-app" },
            { name: "Augmented Reality App", description: "Created an augmented reality shopping app that increased user engagement by 350%.", imageUrl: "https://source.unsplash.com/random/300x200?ar-app" },
            { name: "Mobile Game Development", description: "Developed a mobile game that reached 1 million downloads within a year.", imageUrl: "https://source.unsplash.com/random/300x200?mobile-game" },
            { name: "Mobile Wallet Integration", description: "Integrated mobile wallet features which increased transaction volume by 150%.", imageUrl: "https://source.unsplash.com/random/300x200?mobile-wallet" }

        ]},
        '4': { title: "Digital Marketing", studies: [
            { name: "Social Media Campaign", description: "A viral social media marketing campaign that increased brand engagement by over 200%.", imageUrl: "https://source.unsplash.com/random/300x200?social-media" },
            { name: "Email Marketing Automation", description: "Implemented an email marketing solution that increased lead conversion rates by 25%.", imageUrl: "https://source.unsplash.com/random/300x200?email-marketing" },
            { name: "Influencer Partnership Program", description: "Launched a successful influencer partnership that boosted brand visibility by over 300%.", imageUrl: "https://source.unsplash.com/random/300x200?influencer-marketing" },
            { name: "Content Marketing Initiative", description: "Developed a content marketing strategy that doubled blog traffic and increased subscriber count by 120%.", imageUrl: "https://source.unsplash.com/random/300x200?content-marketing" },
            { name: "PPC Campaign Optimization", description: "Optimized PPC campaigns, reducing cost-per-click by 50% while doubling the conversion rate.", imageUrl: "https://source.unsplash.com/random/300x200?ppc" }

        ]},
        '5': { title: "Cloud Solutions", studies: [
            { name: "Cloud Infrastructure Upgrade", description: "Upgraded enterprise-level cloud infrastructure, enhancing data security and operational efficiency.", imageUrl: "https://source.unsplash.com/random/300x200?cloud-infrastructure" },
            { name: "SaaS Platform Development", description: "Developed a scalable SaaS platform for a B2B client, reducing their operational costs by 30%.", imageUrl: "https://source.unsplash.com/random/300x200?saas" },
            { name: "Hybrid Cloud Implementation", description: "Implemented a hybrid cloud solution that reduced IT costs by 20% while increasing scalability.", imageUrl: "https://source.unsplash.com/random/300x200?hybrid-cloud" },
            { name: "Disaster Recovery Solutions", description: "Designed and implemented a disaster recovery plan that reduced potential downtime costs by 90%.", imageUrl: "https://source.unsplash.com/random/300x200?disaster-recovery" },
            { name: "Data Migration to Cloud", description: "Managed a seamless migration of critical data to a secure cloud platform, enhancing operational efficiency and data accessibility.", imageUrl: "https://source.unsplash.com/random/300x200?data-migration" }

        ]}
    };
    

    return (
        <Container maxWidth={false} disableGutters>
            <Box
                sx={{
                    width: '100%',
                    height: '40vh',
                    backgroundImage: 'url("https://source.unsplash.com/random/1920x1080?business")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'common.white',
                    mb: 2
                }}
            >
                <Typography variant="h2" gutterBottom>
                    Explore Our Impact
                </Typography>
                <Typography variant="h5">
                    Dive into our comprehensive case studies across multiple domains
                </Typography>
            </Box>

            <Box sx={{ bgcolor: 'background.paper', p: 3 }}>
                <Typography variant="h3" align="center" gutterBottom>
                    Our Case Studies
                </Typography>
                <TabContext value={tabValue}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={tabValue} onChange={handleChangeTab} aria-label="case study categories">
                            {Object.keys(categories).map((key) => (
                                <Tab label={categories[key].title} value={key} key={key} />
                            ))}
                        </Tabs>
                    </Box>
                    {Object.keys(categories).map((key) => (
                        <TabPanel value={key} key={key}>
                            <Grid container spacing={2}>
                                {categories[key].studies.map((study, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Card>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={study.imageUrl}
                                                alt={study.name}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {study.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {study.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                            <Button variant="contained" color="primary" onClick={handleOpenContactForm} sx={{ my: 2 }}>
                                Contact Us for More Information
                            </Button>
                        </TabPanel>
                    ))}
                </TabContext>
            </Box>

            <Dialog open={openContactForm} onClose={handleCloseContactForm} fullWidth maxWidth="sm">
                <ContactUsComponent />
            </Dialog>
        </Container>
    );
}

export default CaseStudyPage;
