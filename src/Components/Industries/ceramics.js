import React from "react";
import {
    Grid, Container, Typography, Paper, useTheme, Box, Button
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import functionality2 from '../../asserts/Industries/functionality-2.webp'
import structure3 from '../../asserts/Industries/structure-3.webp'
import quality from '../../asserts/Industries/quality.webp'
import { Dashboard, Search, Layers, LayersClear, RadioButtonChecked } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    const theme = useTheme();

    const handleIndustriesClcik = (index) => {
        localStorage.setItem("activeTab", index);
        navigate("/services");
    }


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
                <Box sx={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", mt: 4 }}>

                    {/* TEM Button */}
                    <Button
                        startIcon={<Dashboard sx={{ color: '#ffff' }} />}
                        onClick={() => handleIndustriesClcik(0)}
                        sx={{
                            fontWeight: 600,
                            fontSize: "1rem",
                            borderRadius: "30px",
                            padding: "12px 24px",
                            textTransform: "capitalize",
                            background: "linear-gradient(45deg, #0A74DA, #084C99)",
                            color: "#fff",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                            "&:hover": {
                                background: "linear-gradient(45deg, #084C99, #0A74DA)",
                                cursor: "pointer",
                                transform: "scale(1.05)",
                                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.4)",
                            },
                            transition: "all 0.3s ease-out",
                        }}
                    >
                        TEM
                    </Button>

                    {/* FIB-SEM Button */}
                    <Button
                        startIcon={<Layers sx={{ color: '#ffff' }} />}
                        onClick={() => handleIndustriesClcik(1)}
                        sx={{
                            fontWeight: 600,
                            fontSize: "1rem",
                            borderRadius: "30px",
                            padding: "12px 24px",
                            textTransform: "capitalize",
                            background: "linear-gradient(45deg, #FF5733, #C23A1A)",
                            color: "#fff",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                            "&:hover": {
                                background: "linear-gradient(45deg, #C23A1A, #FF5733)",
                                cursor: "pointer",
                                transform: "scale(1.05)",
                                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.4)",
                            },
                            transition: "all 0.3s ease-out",
                        }}
                    >
                        FIB-SEM
                    </Button>

                    {/* SEM Button */}
                    <Button
                        startIcon={<Search sx={{ color: '#ffff' }} />}
                        onClick={() => handleIndustriesClcik(2)}
                        sx={{
                            fontWeight: 600,
                            fontSize: "1rem",
                            borderRadius: "30px",
                            padding: "12px 24px",
                            textTransform: "capitalize",
                            background: "linear-gradient(45deg, #F39C12, #E67E22)",
                            color: "#fff",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                            "&:hover": {
                                background: "linear-gradient(45deg, #E67E22, #F39C12)",
                                cursor: "pointer",
                                transform: "scale(1.05)",
                                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.4)",
                            },
                            transition: "all 0.3s ease-out",
                        }}
                    >
                        SEM
                    </Button>

                    {/* XRD Button */}
                    <Button
                        startIcon={<LayersClear sx={{ color: '#ffff' }} />}
                        onClick={() => handleIndustriesClcik(3)}
                        sx={{
                            fontWeight: 600,
                            fontSize: "1rem",
                            borderRadius: "30px",
                            padding: "12px 24px",
                            textTransform: "capitalize",
                            background: "linear-gradient(45deg, #9B59B6, #8E44AD)",
                            color: "#fff",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                            "&:hover": {
                                background: "linear-gradient(45deg, #8E44AD, #9B59B6)",
                                cursor: "pointer",
                                transform: "scale(1.05)",
                                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.4)",
                            },
                            transition: "all 0.3s ease-out",
                        }}
                    >
                        XRD
                    </Button>

                    {/* SPS Button */}
                    <Button
                        startIcon={<RadioButtonChecked sx={{ color: '#ffff' }} />}
                        onClick={() => handleIndustriesClcik(4)}
                        sx={{
                            fontWeight: 600,
                            fontSize: "1rem",
                            borderRadius: "30px",
                            padding: "12px 24px",
                            textTransform: "capitalize",
                            background: "linear-gradient(45deg, #1ABC9C, #16A085)",
                            color: "#fff",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                            "&:hover": {
                                background: "linear-gradient(45deg, #16A085, #1ABC9C)",
                                cursor: "pointer",
                                transform: "scale(1.05)",
                                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.4)",
                            },
                            transition: "all 0.3s ease-out",
                        }}
                    >
                        SPS
                    </Button>

                </Box>
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
                            loading="lazy"
                            alt="Ceramic Production"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = { functionality2 };
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
                            loading="lazy"
                            src={structure3} // Add the URL of the second image
                            alt="Microstructure Development"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = { structure3 } // Fallback if image fails to load
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
                            loading="lazy"
                            src={quality} // Add the URL of the second image
                            alt="Achieving and Improving Product Quality"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = { quality }; // Fallback if image fails to load
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