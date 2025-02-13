import React from "react";
import { Box, Container, Grid, Typography, IconButton, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material";
// import { Robot } from "@mui/icons-material";

const StyledFooter = styled(Box)(({ theme }) => ({
    background: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
    color: "#ffffff",
    position: "relative",
    borderTopLeftRadius: "20px",  // Add border radius to the top-left corner
    borderTopRightRadius: "20px", 
    overflow: "hidden",
    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle, transparent 20%, #1a237e 20%, #1a237e 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #1a237e 20%, #1a237e 80%, transparent 80%, transparent) 50px 50px",
        backgroundSize: "100px 100px",
        opacity: 0.1,
    }
}));

const AnimatedIcon = styled(IconButton)(({ theme }) => ({
    color: "#ffffff",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
        transform: "translateY(-5px)",
        color: "#64ffda",
    }
}));


const NeuralLink = styled(Typography)(({ theme }) => ({
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
        color: "#64ffda",
    }
}));

const Footer = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

   

    return (
        <StyledFooter>
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4} >
                        <Box sx={{ alignItems: 'center', mb: 2 }}>
                            <img
                                src="https://emax42.wordpress.com/wp-content/uploads/2024/05/emax-white-multicolor-3.png?w=1024"
                                alt="Logo"
                                style={{ height: '60px', objectFit: 'contain' }}
                            />
                        </Box>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            We Provide Industrial Process & Product Related Solutions
                        </Typography>
                        <Box gap={1} sx={{ alignItems: 'center' }}>
                            <AnimatedIcon aria-label="Twitter">
                                <Twitter />
                            </AnimatedIcon>
                            <AnimatedIcon aria-label="LinkedIn">
                                <LinkedIn />
                            </AnimatedIcon>
                            <AnimatedIcon aria-label="GitHub">
                                <GitHub />
                            </AnimatedIcon>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" fontWeight="bold" mb={2}>
                            Quick Links
                        </Typography>
                        <Box display="flex" flexDirection="column" gap={1}>
                            <NeuralLink variant="body1">Services</NeuralLink>
                            <NeuralLink variant="body1">Industries</NeuralLink>
                            <NeuralLink variant="body1">Trends & Advances</NeuralLink>
                            <NeuralLink variant="body1">Contact</NeuralLink>
                            <NeuralLink variant="body1">About Us</NeuralLink>
                        </Box>
                    </Grid>

                    <Grid >
                        <Typography variant="h6" fontWeight="bold" mb={2}>
                            Our Location
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: isMobile ? "column" : "row",
                                gap: 1
                            }}
                        >
                            <div className="mapouter" >
                                <div className="gmap_canvas" style={{ borderRadius: '20px' }}>
                                    <iframe
                                        className="gmap_iframe"
                                        style={{ borderRadius: '20px' }}
                                        scrolling="yes"
                                        title="Google Map for Emax"
                                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University%20of%20Coimbatore,%20Tamil%20Nadu%20641038Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    />
                                </div>
                            </div>
                        </Box>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        mt: 6,
                        pt: 3,
                        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                        textAlign: "center"
                    }}
                >
                    <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                        © {new Date().getFullYear()}, EMAX Scientific Solutions Pvt. Ltd. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
