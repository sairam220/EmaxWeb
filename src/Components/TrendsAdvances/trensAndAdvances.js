import React from "react";
import {
    Container, Typography, Paper,
    Box, useTheme,
    useMediaQuery,
} from "@mui/material";

import { motion } from "framer-motion";



const TrendsAndAdvnces = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));




    const pageVariants = {
        hidden: { opacity: 0, y: isMobile ? 20 : 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    };

    return (
        <motion.div variants={pageVariants} initial="hidden" animate="visible">
            <Box
                sx={{
                    minHeight: '81.5vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 6,
                    marginBottom: 2,
                    width: '100%',
                    overflowX: "hidden",
                    flexGrow: 1,
                }}
            >
                <Container maxWidth="lg" >

                    <Box py={8}>

                        <Paper
                            elevation={3}
                            sx={{
                                p: { xs: 3, sm: 4, md: 5 },
                                borderRadius: 4,
                                mb: 4,
                                backgroundColor: theme.palette.background?.default || "#fff"
                            }}
                        >
                            <Typography
                                variant="h3"
                                align="center"
                                gutterBottom
                                sx={{
                                    fontWeight: 700,
                                    color: "#1976d2",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 1
                                }}
                            >
                                Trends & Advances

                            </Typography>

                            <Box my={6} >
                                <Typography variant="body1" paragraph align="justify">
                                    The industrial spectrum comprising physical, chemical and life sciences have expanded comprehensively
                                    by adopting new synthesis approaches, using advanced characterization techniques, innovative product
                                    development methodologies, alternative manufacturing platforms and statics and design based quality
                                    control measures.

                                </Typography>

                                <Typography variant="body1" paragraph align="justify">
                                    As a tech and science based organization we provide short technical note on recent advances covering range of industrially
                                    significant research and development, process innovation, and quality control measures on regular basis.
                                </Typography>
                            </Box>
                        </Paper>


                    </Box>
                </Container>
            </Box>
        </motion.div>
    );
};

export default TrendsAndAdvnces;