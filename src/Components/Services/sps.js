import React from "react";
import {
    Grid, Container, Typography, Paper, useTheme
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import spss from '../../asserts/Services/structure-probe-1.png'
import Frame166 from '../../asserts/Services/Frame 166.png'
import Frame157 from '../../asserts/Services/frame-157.png'
import Frame156 from '../../asserts/Services/frame-156.png'
import Frame1612 from '../../asserts/Services/frame-161-2.png'
import Frame155 from '../../asserts/Services/frame-155.png'

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


const StructuralProbeStationPage = () => {
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
                    Structural & Probe Station Services
                </Typography>

                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, lineHeight: 1.8 }}
                >
                    We at EMAX SS offers  mechanical and thermal property evaluation of any given system of materials.

                </Typography>
                <br />
                <Typography
                    variant="body1"
                    align="justify"
                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
                >

                    In addition to understanding the microstructural changes in system of materials, their relative significance in achieving the
                    required physical and structural functionalities needs to measured and analyzed by using appropriate techniques.

                    Compression, tensile, high temperature structural properties, thermal expansion, thermal conductivity, room
                    temperature electrical measurements are some of the structural characterization services we provide.
                </Typography>

                <Grid container spacing={2} sx={{ mt: 4 }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h4"
                            color="primary"
                            align="center"
                            sx={{ fontWeight: 600 }}
                        >
                            Compression
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" color="text.secondary" align="center" sx={{ mt: 2 }}>
                            Compression & tensile strength measurements provide the basic information on the structural property of the material specimen.
                        </Typography>
                    </Grid>
                    {/* First Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        <StyledImage
                            component={motion.img}
                            src={spss}
                            alt="Compression"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = {spss};
                            }}
                        />

                    </Grid>

                    {/* Second Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        <StyledImage
                            component={motion.img}
                            src={Frame166} // Add the URL of the second image
                            alt="tensile"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = {Frame166}; // Fallback if image fails to load
                            }}
                        />

                    </Grid>

                </Grid>

                <Grid container spacing={2} sx={{ mt: 4 }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h4"
                            color="primary"
                            align="center"
                            sx={{ fontWeight: 600 }}
                        >
                            Thermal Expansion
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" color="text.secondary" align="center" sx={{ mt: 2 }}>
                            Thermal expansion measurements provides an overview about the thermal stability and cycling of the material system at high temperature
                        </Typography>
                    </Grid>
                    {/* First Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        <StyledImage
                            component={motion.img}
                            src={Frame157}
                            alt="Thermal Expansion-1"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = {Frame157};
                            }}
                        />

                    </Grid>

                    {/* Second Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        <StyledImage
                            component={motion.img}
                            src={Frame156} // Add the URL of the second image
                            alt="Thermal Expansion-2"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = {Frame156}; // Fallback if image fails to load
                            }}
                        />

                    </Grid>

                </Grid>

                <Grid container spacing={2} sx={{ mt: 4 }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h4"
                            color="primary"
                            align="center"
                            sx={{ fontWeight: 600 }}
                        >
                            Seebeck Coefficient
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" color="text.secondary" align="center" sx={{ mt: 2 }}>
                            The Seebeck coefficient gives an overview on the thermal and lattice scattering which is a direct measure of high
                            temperature thermal conductivity of the sample
                        </Typography>
                    </Grid>
                    {/* First Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        <StyledImage
                            component={motion.img}
                            src={Frame1612}
                            alt="Seebeck Coefficient-1"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = {Frame1612};
                            }}
                        />

                    </Grid>

                    {/* Second Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        <StyledImage
                            component={motion.img}
                            src={Frame155} // Add the URL of the second image
                            alt="Seebeck Coefficient-2"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = {Frame155}; // Fallback if image fails to load
                            }}
                        />

                    </Grid>

                </Grid>
            </Paper>
        </Container>
    );
};

export default StructuralProbeStationPage;
