import React from "react";
import {
    Grid, Container, Typography, Paper, useTheme
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import functionality2 from '../../asserts/Industries/functionality-2.webp'
import structure3 from '../../asserts/Industries/structure-3.webp'
import quality from '../../asserts/Industries/quality.webp'


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


const CeramicsPage = () => {
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
                    Ceramics & Cement
                </Typography>

                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
                >
                    EMAX SS with hands-on expertise in ceramics process and product development (e.g. alumina, zirconia, magnesia), microstructural,
                    physical and thermal property investigation, thereby can provide one stop holistic
                    solution in ceramic process and product development.
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
                >
                    A ceramic is a material that is neither metallic nor organic. It may be crystalline,
                    glassy or both crystalline and glassy. Ceramics are typically hard and chemically non-reactive
                    and can be formed or densified with heat. Ceramic material is an inorganic, metallic oxide, nitride,
                    or carbide material. Some elements, such as carbon or silicon, may be considered ceramics.
                    Ceramic materials are brittle, hard, strong in compression, and weak in shearing and tension.
                </Typography>

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
                    Ceramic Manufacturing
                </Typography>



                {/* Grid Container for Side-by-Side Images */}
                <Grid container spacing={3} sx={{ mt: 3 }}>
                    {/* First Image (50% width) */}
                    <Grid item xs={12} sm={4}>

                        <StyledImage
                            component={motion.img}
                            src={functionality2}
                            alt="Ceramic Production"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = {functionality2};
                            }}
                        />
                        <Typography variant="h6" color="primary" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                            Ceramic Production
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, textAlign: "center" }}>
                            The ceramic manufacturing process involves batching, powder preparation (ball milling, spray drying) shaping
                            (casting, pressing), drying, and sintering. The sintering is generally performed at a temperature in
                            the range of 1400°C – 1800°C. Each of these process variables plays a critical role in the ceramic
                            manufacturing cycle.
                        </Typography>
                    </Grid>

                    {/* Second Image (50% width) */}
                    <Grid item xs={12} sm={4}>

                        <StyledImage
                            component={motion.img}
                            src={structure3} // Add the URL of the second image
                            alt="Microstructure Development"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = {structure3} // Fallback if image fails to load
                            }}
                        />
                        <Typography variant="h6" color="primary" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                            Microstructure Development
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, textAlign: "center" }}>
                            Each stages of the ceramic production cycle results in a micro-structural features (grain boundary, small grains, big grains)
                            which finally decides the performance of the ceramic component at service.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={4}>

                        <StyledImage
                            component={motion.img}
                            src={quality} // Add the URL of the second image
                            alt="Achieving and Improving Product Quality"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = {quality}; // Fallback if image fails to load
                            }}
                        />
                        <Typography variant="h6" color="primary" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                            Achieving and Improving Product Quality
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, textAlign: "center" }}>
                            The structural performance (such as high temperature structural stability) of the ceramic component is governed by the
                            microstructure achieved during sintering and post sintering processes. By achieving the optimised process variables,
                            the production cycles, cost, and the premature failure of the ceramic components is minimised.
                        </Typography>
                    </Grid>

                </Grid>


            </Paper>
        </Container>
    );
};

export default CeramicsPage;