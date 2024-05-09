import React from 'react';
import { Box, Container, Typography, Tab, Tabs, Card, CardContent, CardActions, Button, Modal, Grid,CardMedia } from '@mui/material';

// Introduction Section
const Introduction = () => (
    <Box sx={{ my: 4 }}>
        <Typography variant="h2" gutterBottom>
            Explore Our Solutions
        </Typography>
        <Typography variant="h6" color="text.secondary">
            Discover tailored solutions across various industries to meet your specific business needs.
        </Typography>
    </Box>
);

// Solutions Categories Tabs
const SolutionTabs = ({ solutions, selectedCategoryIndex, setCategory }) => (
    <Tabs value={selectedCategoryIndex} onChange={(event, newValue) => setCategory(newValue)} aria-label="solution categories" variant="scrollable" scrollButtons="auto" indicatorColor="primary" textColor="inherit">
        {solutions.map((category, index) => (
            <Tab label={category.category} key={index} sx={{ fontWeight: selectedCategoryIndex === index ? 'bold' : 'normal' }} />
        ))}
    </Tabs>
);

// Single Solution Card with Modal Detail
const SolutionCard = ({ solution }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Card sx={{ maxWidth: '100%', m: 2, transition: '0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: 10 }, bgcolor: '#f5f5f5' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={solution.imageUrl}
                    alt={solution.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {solution.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {solution.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleOpen}>Learn More</Button>
                </CardActions>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ bgcolor: 'background.paper', boxShadow: 24, p: 4, maxWidth: '600px', width: '100%' }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {solution.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {solution.details}
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};


// Main Solutions Component
const SolutionsComponent = () => {
const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);


    const solutions = [
        {
            category: "Health Care",
            details: [
                { name: "Appointment Booking System", description: "Manage appointments seamlessly with our advanced booking system."},
                { name: "Patient Management System", description: "Streamline patient data and processes with integrated management solutions."},
                { name: "Website For Doctors and Hospitals", description: "Professional and functional websites designed for medical professionals."},
                { name: "SEO", description: "Optimize your medical websites for better visibility and patient engagement."},
            ]
        },
        {
            category: "Education",
            details: [
                { name: "Learning Management System", description: "Robust platforms for educational content delivery and tracking."},
                { name: "Attendance Tracking", description: "Automated systems for accurate and easy monitoring of student attendance."},
                { name: "Website for Schools and Universities", description: "Dynamic websites tailored for educational institutions."},
                { name: "Overseas Education CRM", description: "Manage and engage with prospective students globally."},
                { name: "Alumni Management System", description: "Keep your alumni network active and involved with our solutions."},
                { name: "SEO", description: "Increase the reach and impact of your educational institution online."},
            ]
        },
        {
            category: "Manufacturing",
            details: [
                { name: "CRM / ERP", description: "Integrate all your manufacturing processes into one streamlined system."},
                { name: "Website", description: "Custom websites that highlight your manufacturing capabilities."},
                { name: "Lead Automation", description: "Automate lead generation and management to increase efficiency."},
                { name: "Lead API Integration", description: "Sync leads from platforms like IndiaMart and TradeIndia."},
                { name: "SEO", description: "Optimize your digital presence to attract more business."},
            ]
        },
        {
            category: "E-Commerce",
            details: [
                { name: "E-Commerce Website", description: "Build your online store with our comprehensive e-commerce solutions."},
                { name: "Chatbot Integration", description: "Enhance customer service with AI-driven chatbots."},
                { name: "Logistic Partner API Integration", description: "Seamlessly integrate with major logistic providers."},
                { name: "Payment Gateway Integrations", description: "Incorporate multiple payment options for your customers."},
                { name: "Security Protocol Implementation", description: "Ensure your e-commerce platform is secure and reliable."},
                { name: "SEO", description: "Boost your online store's visibility in search engines."},
            ]
        },
        {
            category: "Retail",
            details: [
                { name: "Website", description: "Engage customers with a sleek, professional retail website."},
                { name: "SEO", description: "Optimize your retail business for greater online exposure."},
                { name: "CRM", description: "Customer relationship management tailored for the retail industry."},
            ]
        },
        {
            category: "Non-Profit",
            details: [
                { name: "Website", description: "Create a compelling online presence for your non-profit organization."},
                { name: "SEO", description: "Increase visibility to boost support and engagement."},
                { name: "Event Management Portal", description: "Manage your events smoothly with our comprehensive portal."},
                { name: "Loyalty Management System", description: "Foster supporter loyalty with targeted engagement tools."},
                { name: "Payment Gateway Integration", description: "Simplify donations with easy payment solutions."},
                { name: "Chatbot Development and Training", description: "Engage visitors with interactive AI chatbots."},
            ]
        }
    ];



    return (
        <Container maxWidth="xl">
            <Introduction />
            <SolutionTabs solutions={solutions} selectedCategoryIndex={selectedCategoryIndex} setCategory={setSelectedCategoryIndex} />
            <Grid container spacing={2} sx={{ mt: 2 }}>
                {solutions[selectedCategoryIndex].details.map((solution, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <SolutionCard solution={solution} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );



};
export default SolutionsComponent;