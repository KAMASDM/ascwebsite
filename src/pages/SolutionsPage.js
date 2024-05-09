import React from 'react';
import { Typography, Container, Grid, Box, Divider, Card, CardContent } from '@mui/material';
import SolutionsComponent from '../components/common/SolutionsComponent';

import AboutUsComponent from '../components/common/AboutUsComponent';
import BlogComponent from './BlogComponent';
import ServicesComponent from './ServiceSection';
import SolutionsEnquiryForm from '../components/tools/SolutionsEnquiryForm';
import { Button, Dialog } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CaseStudyPage from '../components/common/CaseStudiesComponent';
// Assume this component is correctly implemented elsewhere

function SolutionsPage() {



    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();
    return (
        <Box sx={{ width: '100%', overflowX: 'hidden' }}>
            <Box sx={{
                my: 4,
                textAlign: "center",
                p: 5,
                backgroundImage: 'url("https://source.unsplash.com/random/1920x1080?solution")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "common.white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "40vh",
            }}>
                <Typography variant="h2" gutterBottom>
                    Innovative Solutions Tailored for Your Business
                </Typography>
                <Typography variant="h5">
                    Discover how our solutions can transform your business operations.
                </Typography>
            </Box>



            <Container maxWidth={false} disableGutters>
                <SolutionsComponent />
                <Divider />

                
            <Box sx={{ p: 4, textAlign: 'center', mt: 4,  }}>
                <Typography variant="h5" gutterBottom>
                    Ready to start your project? Let's discuss your requirements.
                </Typography>
                <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    Request a Quote
                </Button>
            </Box>
            <Card sx={{ margin: 3, borderRadius: "12px"}}>
                <CardContent>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md" marginTop="10px">
                <SolutionsEnquiryForm />
                <Button onClick={handleClose} color="primary" sx={{ m: 2 }}>
                    Close
                </Button>
            </Dialog>
                </CardContent>
            </Card>
                <ServicesComponent />
                <Divider />
                <CaseStudyPage />
                <AboutUsComponent />
                <Divider />
                <BlogComponent />
                
            </Container>
        </Box>
    );
}

export default SolutionsPage;
