import React from "react";
import {
    Container, Typography, List,
    ListItemIcon, ListItemText, Paper, useTheme,
    Box, Card, CardMedia, CardContent
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const StyledImage = styled(motion.img)(({ theme }) => ({
    width: "100%",
    height: "auto",
    borderRadius: theme.spacing(2),
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    boxShadow: `0px 2px 5px rgba(0, 0, 0, 0.1)`,
    "&:hover": {
        transform: "scale(1.03)",
        boxShadow: `0px 4px 10px rgba(0, 0, 0, 0.12)`,
    },
}));

const StyledListItem = styled(motion.li)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    transition: "all 0.3s ease-in-out",
    backgroundColor: theme.palette.background?.paper || "#f9f9f9",
    boxShadow: `0px 2px 5px rgba(0, 0, 0, 0.1)`,
    display: "flex",
    alignItems: "center",
    "&:hover": {
        transform: "translateX(8px)",
        backgroundColor: theme.palette.action?.hover || "#f0f0f0",
        boxShadow: `0px 4px 10px rgba(0, 0, 0, 0.12)`,
    },
}));

const FibSemPage = () => {
    const theme = useTheme();

    const doePoints = [
        {
            title: "Ion and Electron Interaction",
            description: "In FIB-SEM, a Gallium (Ga) ion source and an electron source are placed at a chosen angle, allowing for simultaneous ion and electron interactions with the sample."
        },
        {
            title: "Sputtering and Material Removal",
            description: "When the test sample surface is impacted by high-energy ions from the Ga source, sputtering occurs, leading to the removal of elements from specific locations on the sample."
        },
        {
            title: "Simultaneous Imaging for Cross-Sectional Views",
            description: "FIB and SEM are used in a simultaneous imaging mode, enabling controlled cross-sectional views of the sample to be captured for analysis."
        },
        {
            title: "Applications in Material Analysis",
            description: "FIB-SEM is widely used for obtaining cross-sectional views of thin film devices, surface coatings, oxidation, corrosion, and other material investigations."
        }
    ];


    return (
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 4, sm: 6 } }}>
            <Paper
                elevation={3}
                sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    borderRadius: 4,
                    backgroundColor: theme.palette.background?.default || "#fff"
                }}
            >
                <Typography
                    variant={{ xs: "h5", sm: "h4", md: "h3" }}
                    align="center"
                    color="primary"
                    gutterBottom
                    sx={{ fontWeight: 550, mb: { xs: 4, sm: 4 }, letterSpacing: 0.8, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" } }}
                >
                    Focused Ion Beam-Scanning Electron Microscopy
                </Typography>

                <Typography
                    variant="body1"
                    align="justify"
                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
                >
                    We at EMAX SS offers structural, morphological and chemical informations regarding cross-sectional thin films,
                    cross sectional oxidized and corrosion products of any given system of material   using FIB, SEM-electron images,
                    SEM-back scattered images and SEM-EDS.
                </Typography>

                {/* Animated Image */}
                <StyledImage
                    component={motion.img}
                    src="https://emaxss.org/wp-content/uploads/2024/05/fib-sem-2.pngg"
                    alt="Process Improvement"
                    sx={{ mb: { xs: 3, sm: 4 }, maxWidth: "100%", height: "auto" }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    onError={(e) => {
                        e.target.src = "https://emaxss.org/wp-content/uploads/2024/05/fib-sem-2.png";
                    }}
                />

                <List sx={{ mt: 2, listStyleType: "none", padding: 0 }}>
                    {doePoints.map((item, index) => (
                        <StyledListItem
                            key={index}
                            sx={{
                                px: { xs: 2, sm: 3 },
                                py: { xs: 1, sm: 2 }
                            }}
                            component={motion.li}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <ListItemIcon sx={{ minWidth: "40px" }}>
                                <CheckCircleIcon style={{ color: theme.palette.primary.main, fontSize: 32 }} />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant="h6"
                                        color="text.primary"
                                        fontWeight={600}
                                        sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.4rem" } }}
                                    >
                                        {item.title}
                                    </Typography>
                                }
                                secondary={
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mt: 1, fontSize: { xs: "0.9rem", sm: "1rem" } }}
                                    >
                                        {item.description}
                                    </Typography>
                                }
                            />
                        </StyledListItem>
                    ))}
                </List>
            </Paper>
            <Box mt={6} mb={6} px={{ xs: 1, sm: 4, md: 6 }}>
                <Card
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        maxWidth: 900, // Reduced max width for better centering
                        margin: '0 auto',
                        boxShadow: 3,
                        borderRadius: 2,
                        padding: 2,
                        cursor: 'pointer',
                        backgroundColor: '#f5f5f5',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-10px)',
                            boxShadow: 6,
                        },
                    }}
                >
                    {/* Image Section */}
                    <CardMedia
                        component="img"
                        image="https://emaxss.org/wp-content/uploads/2024/07/ernestrutherford_white.png?w=2048"
                        alt="Ernest Rutherford"
                        sx={{
                            width: { xs: '100%', sm: 280, md: 320 }, // Reduced size for better balance
                            height: { xs: 'auto', sm: 280, md: 320 },
                            objectFit: 'cover',
                            borderRadius: 2,
                            boxShadow: 2,
                            marginBottom: { xs: 3, md: 0 },
                        }}
                    />

                    {/* Text Section */}
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center', // Centering text on smaller screens
                            color: 'text.primary',
                            paddingLeft: { md: 3 },
                            maxWidth: 500, // Prevents text from stretching too wide
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            "Gentlemen, we have run out of money. It’s time to start thinking"
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontStyle="italic">
                            - Ernest Rutherford
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default FibSemPage;
