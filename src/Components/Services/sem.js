import React from "react";
import {
    Container, Typography, List,
    ListItemIcon, ListItemText, Paper, useTheme
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import sem from '../../asserts/Services/sem-servcies-11.png'

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
    [theme.breakpoints.up("sm")]: {
        width: "100%",
    },
    [theme.breakpoints.up("md")]: {
        width: "65%",
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

const ScanningElectronMicroscopyPage = () => {
    const theme = useTheme();

    const doePoints = [
        {
            title: "Electron Interaction with Samples",
            description: "In Scanning Electron Microscopy (SEM), electrons with energy ranging from 5 KeV to 30 KeV interact with relatively thick samples (2 to 3 mm), providing insights into their structure."
        },
        {
            title: "Scattering Events for Imaging",
            description: "Two major types of scattering events are used for imaging: secondary electrons from inelastic interactions and backscattered electrons from elastic interactions."
        },
        {
            title: "Surface Analysis and Elemental Information",
            description: "The scattered electrons are detected by appropriate detectors, providing critical information about surface morphology, phase purity, and elemental distribution of the sample."
        },
        {
            title: "Non-Destructive Technique",
            description: "SEM is a non-destructive technique that can be applied to a wide variety of materials, making it versatile for different systems without altering the sample."
        },
        {
            title: "Faster Information Acquisition",
            description: "This technique provides information at a relatively faster rate, making it efficient for high-throughput analysis and observations."
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
                    Scanning Electron Microscopy
                </Typography>

                <Typography
                    variant="body1"
                    align="justify"
                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
                >
                    We at EMAX SS can provide details regarding surface morphology, phase and grain distribution,
                    chemical constituents of any given system of materials based on SEM-electron images,
                    SEM-back scattered images and SEM-EDS.
                </Typography>

                {/* Animated Image */}
                <StyledImage
                    component={motion.img}
                    src={sem}
                    alt="Process Improvement"
                    sx={{ mb: { xs: 3, sm: 4 }, maxWidth: "100%", height: "auto" }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    onError={(e) => {
                        e.target.src = { sem };
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
        </Container>
    );
};

export default ScanningElectronMicroscopyPage;
