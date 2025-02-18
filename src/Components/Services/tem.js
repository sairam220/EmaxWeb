import React from "react";
import {
    Grid, Container, Typography,
     Paper, useTheme, Box,
    Card, CardMedia, CardContent,
} from "@mui/material";
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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

// const StyledListItem = styled(motion.li)(({ theme }) => ({
//     marginBottom: theme.spacing(3),
//     padding: theme.spacing(2),
//     borderRadius: theme.spacing(1),
//     transition: "all 0.3s ease-in-out",
//     backgroundColor: theme.palette.background?.paper || "#f9f9f9",
//     boxShadow: `0px 2px 5px rgba(0, 0, 0, 0.1)`,
//     display: "flex",
//     alignItems: "center",
//     "&:hover": {
//         transform: "translateX(8px)",
//         backgroundColor: theme.palette.action?.hover || "#f0f0f0",
//         boxShadow: `0px 4px 10px rgba(0, 0, 0, 0.12)`,
//     },
// }));

const TemServicesPage = () => {
    const theme = useTheme();

    // const doePoints = [
    //     {
    //         title: "Core of Product Development",
    //         description: "In any industry-related product, the troika of ‘process variables (pv) – microstructural development (md) – functional property (fp)’ forms the core, and understanding their critical interactions is essential for new product development and enhancing existing product quality."
    //     },
    //     {
    //         title: "Optimizing Process Variables for Enhanced Quality",
    //         description: "By optimizing process variables, suitable microstructural features can be developed, leading to optimized or significantly enhanced product quality with superior performance."
    //     },
    //     {
    //         title: "Advancements in Experimental and Statistical Techniques",
    //         description: "Recent advances in experimental techniques, statistical methods, and machine learning algorithms provide a powerful framework to identify, develop, prototype, up-scale, and launch new products across various industries in innovative ways."
    //     },
    //     {
    //         title: "Holistic Material-Based Solutions",
    //         description: "With a team combining strong experimental scientists and young professionals in statistical and data science, we offer holistic material-based solutions across various industries."
    //     },
    //     {
    //         title: "Collaborative Approach and Access to Resources",
    //         description: "We believe in the ‘pv-md-fp’ troika, and have established collaborative agreements to access critical process equipment, as well as analytical and structural characterization equipment to optimize product development cycles."
    //     },
    //     {
    //         title: "Optimized Product Development Cycles",
    //         description: "Rapid access to relevant sources allows for optimized product development cycles, ensuring reduced timelines and maximized efficiency."
    //     }
    // ];

    // const methodologyDoePoints = [
    //     {
    //         title: "Process Evaluation",
    //         description: "The existing process will be evaluated, and key variables will be analyzed to understand their impact and identify areas for improvement."
    //     },
    //     {
    //         title: "Design of Experiments",
    //         description: "Experiments will be designed using our expertise in process development, micro-structural characterization, and reliability testing to ensure accurate and insightful results."
    //     },
    //     {
    //         title: "Process Optimization",
    //         description: "We will provide holistic solutions based on the results of the previous steps to optimize process cycles, improving efficiency and performance."
    //     }
    // ];


    return (
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 4, sm: 6 } }}>

            <Paper
                elevation={3}
                sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    borderRadius: 4,
                    backgroundColor: theme.palette.background?.default || "#fff",
                    mb: 6
                }}
            >
                <Typography
                    variant={{ xs: "h5", sm: "h4", md: "h3" }}
                    align="center"
                    color="primary"
                    gutterBottom
                    sx={{
                        fontWeight: 550, mb: { xs: 3, sm: 4 }, letterSpacing: 0.8, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" }
                    }}
                >
                    Transmission Electron Microscopy (TEM) Services
                </Typography>

                <Typography
                    variant="body1"
                    align="justify"
                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
                >
                    We at EMAX SS with strong hands-on expertise in cross-sectional electron transparent sample preparation,
                    TEM-bright field imaging, HRTEM imaging, selected area diffraction (SAD), scanning transmission electron microscopy (STEM) – BF,
                    HAADF, STEM-EDS, STEM-EELS and in-situ TEM / STEM experiments, can provide one-stop holistic solutions to all TEM / STEM needs,
                    thereby providing a vital link in understanding the microstructural changes of the given system of materials.
                    This can contribute significantly to the product development cycle.
                </Typography>
                <Typography
                    variant="body1"
                    align="justify"
                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
                >
                    Electron microscopy based techniques provides powerful platform of tools for investigating morphological,
                    structural and chemical information, irrespective of the nature and type of materials,
                    at site specific location with superior spacial resolution.
                </Typography>

                {/* Animated Image */}
                <StyledImage
                    component={motion.img}
                    src="https://emaxss.org/wp-content/uploads/2024/06/electron-microscopy-services-1-2.png"
                    alt="Transmission Electron Microscopy Services"
                    sx={{ mb: { xs: 3, sm: 4 }, maxWidth: "100%", height: "auto" }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    onError={(e) => {
                        e.target.src = "https://emaxss.org/wp-content/uploads/2024/06/electron-microscopy-services-1-2.png";
                    }}
                />

                <Typography
                    variant="body1"
                    align="justify"
                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8, fontWeight: 650 }}
                >
                    Thus, TEM/STEM based investigation provides a comprehensive information on various aspects of system of materials,
                    thereby establishing a holistic approach for the entire product development and quality control cycles.
                </Typography>

                {/* <List sx={{ mt: 2, listStyleType: "none", padding: 0 }}>
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
                </List> */}
            </Paper>

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
                    sx={{ fontWeight: 550, mb: { xs: 6, sm: 6 }, letterSpacing: 0.8, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" } }}
                >
                    TEM/STEM Instrumentation
                </Typography>

                <Typography
                    variant="body1"
                    align="justify"
                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
                >
                    In transmission electron microscopy (TEM), high energy electrons typically accelerated at 80, 100, 200, 300 KeV illuminate a thin electron transparent lamella with typical cross-sectional thickness ranging 50-200 nm.
                    The interaction between high energy electrons and samples constituents results in elastic, inelastic, coherent and incoherent scattering events.
                    The scattered transmitted electrons can be imaged in real time, by using a sophisticated projection lenses, imaging camera and recording devices.
                    TEM can be operated in two different modes – transmission (TEM) and scanning (STEM).
                </Typography>

                {/* Grid Container for Side-by-Side Images */}
                <Grid container spacing={2} sx={{ mt: 3 }}>
                    {/* First Image (50% width) */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" color="primary" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                            Conventional TEM – Imaging & Diffraction
                        </Typography>
                        <StyledImage
                            component={motion.img}
                            src="https://emaxss.org/wp-content/uploads/2024/06/conventionaltem-1.png"
                            alt="Our Methodology"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = "https://emaxss.org/wp-content/uploads/2024/06/conventionaltem-1.png";
                            }}
                        />
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, textAlign: "center" }}>
                            In a conventional TEM mode, the diffraction and phase contrast images are formed.
                        </Typography>
                    </Grid>

                    {/* Second Image (50% width) */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" color="primary" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                            Conventional TEM – Imaging & Diffraction
                        </Typography>
                        <StyledImage
                            component={motion.img}
                            src="https://emaxss.org/wp-content/uploads/2024/06/stem-mode-insitu.png" // Add the URL of the second image
                            alt="TEM Image Example"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = "https://emaxss.org/wp-content/uploads/2024/06/stem-mode-insitu.png"; // Fallback if image fails to load
                            }}
                        />
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, textAlign: "center" }}>
                            In STEM mode, atomic contrast images, energy dispersive spectroscopy, and electron energy loss spectroscopy experiments can be performed.
                        </Typography>
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
                        image="https://emaxss.org/wp-content/uploads/2024/07/louisdebrogliepng_white-1.png?w=1672"
                        alt="Louis de Broglie"
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
                            "Two seemingly incompatible conceptions can each represent an aspect of truth….They may serve in turn to represent the facts without ever entering into direct conflict"
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontStyle="italic">
                            - Louis de Broglie
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

        </Container>
    );
};

export default TemServicesPage;
