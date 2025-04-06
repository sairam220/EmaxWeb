import React from "react";
import { Box, Container, Grid, Typography, IconButton, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from '../../asserts/Header/emax-white-multicolor-3.webp';



const StyledFooter = styled(Box)(({ theme }) => ({
    background: "linear-gradient(135deg, #0F2027, #203A43, #2C5364)",
    color: "#ffffff",
    width: "100%", // Ensures it spans the full width
    padding: "20px 0", // Adjusted padding
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "200px", // Minimum height to avoid excess spacing
}));

const AnimatedIcon = styled(IconButton)({
    color: "#ffffff",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
        transform: "translateY(-5px)",
        color: "#64ffda",
    },
});

const NeuralLink = styled(Typography)({
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
        color: "#64ffda",
    },
});

const Footer = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    return (
        <StyledFooter>
            <Container maxWidth="lg">
                <Grid container spacing={4} sx={{ justifyContent: isMobile ? "center" : "space-between" }}>
                    {/* First Grid Item - Logo and Social Links */}
                    <Grid item xs={12} md={3} textAlign={isMobile ? "center" : "left"}>
                        <Box sx={{ display: "flex", justifyContent: isMobile ? "center" : "left", mb: 2 }}>
                            <img
                                src={logo}
                                alt="Logo"
                                style={{ height: '50px', objectFit: 'contain' }}
                            />
                        </Box>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            Industrial Process & Product Solutions
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: isMobile ? "center" : "left" }} gap={1}>
                            <AnimatedIcon aria-label="Twitter">
                                <a href="https://twitter.com/EmaxSSLimited" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Twitter sx={{ color: 'inherit' }} />
                                </a>
                            </AnimatedIcon>
                            <AnimatedIcon aria-label="LinkedIn">
                                <a href="https://www.linkedin.com/company/emax-scientific-solutions-private-limited" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <LinkedIn sx={{ color: 'inherit' }} />
                                </a>
                            </AnimatedIcon>
                        </Box>


                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} md={3} textAlign={isMobile ? "center" : "left"}>
                        <Typography variant="h6" fontWeight="bold" mb={1}>
                            Quick Links
                        </Typography>
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Link to="/" style={{ textDecoration: 'none', color: '#FFFF' }}>
                                <NeuralLink variant="body1">Home</NeuralLink>
                            </Link>
                            <Link to="/services" style={{ textDecoration: 'none', color: '#FFFF' }}>
                                <NeuralLink variant="body1">Services</NeuralLink>
                            </Link>
                            <Link to="/industries" style={{ textDecoration: 'none', color: '#FFFF' }}>
                                <NeuralLink variant="body1">Industries</NeuralLink>
                            </Link>
                            <Link to="/trends-advances" style={{ textDecoration: 'none', color: '#FFFF' }}>
                                <NeuralLink variant="body1">Trends & Advances</NeuralLink>
                            </Link>
                            <Link to="/contact" style={{ textDecoration: 'none', color: '#FFFF' }}>
                                <NeuralLink variant="body1">Contact</NeuralLink>
                            </Link>
                        </Box>
                    </Grid>

                    {/* Location (Map) */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" fontWeight="bold">
                            Our Location
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "250px", // Adjusted for proper spacing
                                borderRadius: "10px",
                                overflow: "hidden",
                                marginTop: "10px",
                            }}
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                title="EMAX Location"
                                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Level%201,%20289%20Goundappan%20Street,%20Coimbatore%20%E2%80%93%20641038,%20Tamil%20Nadu,%20India+(EMAX%20Scientific%20Solutions%20Pvt.%20Ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                style={{
                                    borderRadius: '10px',
                                    maxWidth: "100%",
                                    height: "100%",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                {/* Bottom Copyright Text */}
                <Box
                    sx={{
                        mt: 4,
                        pt: 2,
                        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                        textAlign: "center",
                        width: "100%",
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
