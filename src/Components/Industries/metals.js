import React from "react";
import {
    Grid, Container, Typography, Paper, useTheme
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import cover2 from '../../asserts/Industries/cover-2.png'
import process from '../../asserts/Industries/process.webp'
import structure from '../../asserts/Industries/structure-5.webp'
import functionality from '../../asserts/Industries/functionality-3.webp'

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


const MetalsPage = () => {
    const theme = useTheme();



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
                    Metals & Alloys
                </Typography>

                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
                >
                    EMAX SS team offers assistance in alloy composition development, microstructural
                    (TEM/ STEM, SEM) structural  (XRD, compression, tensile property) and thermal investigations
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
                >
                    Metals are opaque, lustrous elements that are good conductors of heat and electricity.
                    Most metals are malleable and ductile and are, in general, denser than the other elemental substances.
                    A metal alloy is a substance that combines more than one metal or mixes a metal with other non-metallic elements.
                </Typography>

                <Grid container justifyContent="center" alignItems="center" sx={{ mt: 4 }}>


                    {/* First Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        <StyledImage
                            component={motion.img}
                            src={cover2}
                            alt="Metals & Alloys"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = {cover2};
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
                    sx={{ fontWeight: 550, mb: { xs: 6, sm: 6 }, letterSpacing: 0.8, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" } }}
                >
                    Alloy Manufacturing
                </Typography>



                {/* Grid Container for Side-by-Side Images */}
                <Grid container spacing={3} sx={{ mt: 3 }}>
                    {/* First Image (50% width) */}
                    <Grid item xs={12} sm={4}>

                        <StyledImage
                            component={motion.img}
                            src={process}
                            alt="Alloy Manufacturing"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = {process};
                            }}
                        />
                        <Typography variant="h6" color="primary" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                            Alloy Manufacturing
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, textAlign: "center" }}>
                            Industrial alloy manufacturing consists of series of process steps such as batching, mixing,
                            melting, post annealing, and final machining. The melting and post annealing is generally performed using
                            furnaces with the temperature ranging 500 °C to 1200 °C. Each of these process introduce their own
                            variables which needs to be properly controlled to have an effective alloy manufacturing cycle.
                        </Typography>
                    </Grid>

                    {/* Second Image (50% width) */}
                    <Grid item xs={12} sm={4}>

                        <StyledImage
                            component={motion.img}
                            src={structure} // Add the URL of the second image
                            alt="Microstructure Development"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = {structure}; // Fallback if image fails to load
                            }}
                        />
                        <Typography variant="h6" color="primary" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                            Microstructure Development
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, textAlign: "center" }}>
                            At stage of the alloy manufacturing steps, different types of microstructural features are achieved.
                            Controlling the process parameters and achieving the required microstructure (such as grain boundary,
                            small grains, big grains) is a key to the performance of the alloy for the specified applications.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={4}>

                        <StyledImage
                            component={motion.img}
                            src={functionality} // Add the URL of the second image
                            alt="Achieving enhanced/ optimised functionality"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = {functionality}; // Fallback if image fails to load
                            }}
                        />
                        <Typography variant="h6" color="primary" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                            Achieving enhanced/ optimised functionality
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, textAlign: "center" }}>
                            The structural, thermal, and reliable performance of the alloy is governed by the micro-structural features.
                            Significant control is needed during the different stages of alloy processing to avoid any premature failure of
                            the structural alloy components.
                        </Typography>
                    </Grid>

                </Grid>


            </Paper>
        </Container>
    );
};

export default MetalsPage;