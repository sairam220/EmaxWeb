import React from "react";
import {
    Container, Typography, Paper, useTheme,
    Grid, Box,
    Card, CardMedia, CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const StyledImage = styled(motion.img)(({ theme }) => ({

    height: "auto",
    borderRadius: theme.spacing(2),
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    boxShadow: `0px 2px 5px rgba(0, 0, 0, 0.1)`,
    "&:hover": {
        transform: "scale(1.03)",
        boxShadow: `0px 4px 10px rgba(0, 0, 0, 0.12)`,
    },
    marginLeft: "auto",
    marginRight: "auto",
}));

const SemiConductors = () => {
    const theme = useTheme();

    return (
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 4, sm: 6 } }}>

            <Paper elevation={3} sx={{ p: { xs: 3, sm: 4, md: 5 }, borderRadius: 4, backgroundColor: theme.palette.background?.default || "#fff" }}>
                <Typography variant={{ xs: "h5", sm: "h4", md: "h3" }} align="center" color="primary" gutterBottom sx={{ fontWeight: 550, mb: { xs: 4, sm: 4 }, letterSpacing: 0.8, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" } }}>
                    Semiconductors
                </Typography>

                <Typography variant="body1" align="justify" color="text.secondary" sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}>
                    EMAX SS team has strong expertise with various physical and chemical thin film deposition techniques combined with TEM / STEM, analytical electron microscopy (STEM – EDS, STEM-EELS), FIB-SEM, SEM and XRD characterization techniques. With such a skill-set we can play a key role in designing, developing and characterizing semiconductor, functional oxide thin film related devices.
                </Typography>

                <Grid container justifyContent="center" alignItems="center" sx={{ mt: 4 }}>


                    {/* First Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        <StyledImage
                            component={motion.img}
                            src="https://emaxss.org/wp-content/uploads/2024/06/cover-1.png"
                            alt="Compression"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = "https://emaxss.org/wp-content/uploads/2024/06/cover-1.png";
                            }}
                        />

                    </Grid>



                </Grid>

            </Paper>

            <Paper
                elevation={3}
                sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    borderRadius: 4,
                    mt: 6,
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
                    Structural & Probe Station Services
                </Typography>
                <Typography
                    variant="h5"
                    color="primary"
                    align="center"
                    sx={{ fontWeight: 550, mt: 2 }}
                >
                    Thin Film Deposition & Fabrication
                </Typography>


                <Grid container spacing={2} sx={{ mt: 4 }}>

                    {/* First Image (50% width) */}
                    <Grid item xs={12} sm={4}>

                        <StyledImage
                            component={motion.img}
                            src="https://emaxss.org/wp-content/uploads/2024/07/fabrication1.png?w=2046"
                            alt="MOCVD"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = "https://emaxss.org/wp-content/uploads/2024/07/fabrication1.png?w=2046";
                            }}
                        />

                    </Grid>

                    {/* Second Image (50% width) */}
                    <Grid item xs={12} sm={4}>

                        <StyledImage
                            component={motion.img}
                            src="https://emaxss.org/wp-content/uploads/2024/07/fabrication2-1.png" // Add the URL of the second image
                            alt="fabrication2"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = "https://emaxss.org/wp-content/uploads/2024/07/fabrication2-1.png"; // Fallback if image fails to load
                            }}
                        />

                    </Grid>
                    <Grid item xs={12} sm={4}>

                        <StyledImage
                            component={motion.img}
                            src="https://emaxss.org/wp-content/uploads/2024/07/fabrication4.png" // Add the URL of the second image
                            alt="fabrication3"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = "https://emaxss.org/wp-content/uploads/2024/07/fabrication4.png"; // Fallback if image fails to load
                            }}
                        />

                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" color="text.secondary" align="center" sx={{ mt: 2 }}>
                            All semiconductor devices are manufactured by depositing a thin film on a insulating silicon substrate. MOCVD, Sputtering are the most widely used deposition methods.
                            Further device fabrication is performed by various process such as reactive ion etching or UV etching.


                        </Typography>
                    </Grid>

                </Grid>


            </Paper>

            <Paper
                elevation={3}
                sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    borderRadius: 4,
                    backgroundColor: theme.palette.background?.default || "#fff",
                    mt: 4
                }}
            >
                <Typography
                    variant={{ xs: "h5", sm: "h4", md: "h3" }}
                    align="center"
                    color="primary"
                    gutterBottom
                    sx={{ fontWeight: 550, mb: { xs: 6, sm: 6 }, letterSpacing: 0.8, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" } }}
                >
                    Microstructure Development
                </Typography>


                {/* Grid Container for Side-by-Side Images */}
                <Grid container spacing={2} sx={{ mt: 3, justifyContent: "center", alignItems: "center" }}>
                    {/* First Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        <StyledImage
                            component={motion.img}
                            src="https://emaxss.org/wp-content/uploads/2024/06/structure.png"
                            alt="Microstructure Development"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = "https://emaxss.org/wp-content/uploads/2024/06/structure.png";
                            }}
                        />

                    </Grid>

                    {/* Second Image (50% width) */}
                    <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: "center" }}>

                        <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2, textAlign: "center" }}>
                            During the thin film deposition, due to lattice and thermal mismatch between the substrate and the film,
                            thin films are strained epitaxially. By controlling the thin film deposition parameters,
                            a high quality epitaxial thin film with well defined microstructures can be achieved.
                        </Typography>
                    </Grid>

                </Grid>


            </Paper>

            <Paper
                elevation={3}
                sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    borderRadius: 4,
                    mt: 6,
                    backgroundColor: theme.palette.background?.default || "#fff"
                }}
            >
                <Typography
                    variant={{ xs: "h5", sm: "h4", md: "h3" }}
                    align="center"
                    color="primary"
                    gutterBottom
                    sx={{ fontWeight: 550, mb: { xs: 6, sm: 6 }, letterSpacing: 0.8, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" } }}
                >
                    Resultant Device Performance
                </Typography>

                <Typography
                    variant="body1"
                    align="center"

                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
                >
                    The deposition parameters & the associated microstructure development
                    critically influences the device structural, thermal, and functional reliabilities.
                </Typography>

                {/* Grid Container for Side-by-Side Images */}
                <Grid container spacing={2} sx={{ mt: 3 }}>
                    {/* First Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        <StyledImage
                            component={motion.img}
                            src="https://emaxss.org/wp-content/uploads/2024/06/trends1.png"
                            alt="Drive&Perfomannce-1"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = "https://emaxss.org/wp-content/uploads/2024/06/trends1.png";
                            }}
                        />

                    </Grid>

                    {/* Second Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        <StyledImage
                            component={motion.img}
                            src="https://emaxss.org/wp-content/uploads/2024/06/trends.png" // Add the URL of the second image
                            alt="Drive&Perfomannce-2"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = "https://emaxss.org/wp-content/uploads/2024/06/trends.png"; // Fallback if image fails to load
                            }}
                        />

                    </Grid>

                </Grid>


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
                        image="https://emaxss.org/wp-content/uploads/2024/07/ricjardfeynman_white.png?w=2048"
                        alt="Richard P Feynman"
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
                            "There is plenty of room in the bottom"
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontStyle="italic">
                            - Richard P Feynman
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

        </Container>
    );
};

export default SemiConductors;
