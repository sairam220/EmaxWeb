import React from "react";
import {
    Grid, Container, Typography,
    Paper, useTheme, Box,
    Card, CardMedia, CardContent,
    List, ListItemIcon, ListItemText
} from "@mui/material";
import RadarIcon from '@mui/icons-material/Radar';
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import tem from '../../asserts/Services/electron-microscopy-services-1-2.png'
import conventionaltem from '../../asserts/Services/conventionaltem-1.png'
import stem from '../../asserts/Services/stem-mode-insitu.png'
import louisdebrogliepng_white from '../../asserts/Services/louisdebrogliepng_white-1.webp'
import frame from '../../asserts/Services/frame-49-3.png'
import geometry from '../../asserts/Services/geometry.png'
import aberration from '../../asserts/Services/aberration-corrections.png'
import ernstruska from '../../asserts/Services/ernstruska.png'

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

const TemServicesPage = () => {
    const theme = useTheme();

    const doePoints = [
        {
            title: "Conventional TEMs & Detectors",
            description: "Probe size few nm, energy resolution ~0.40eV, spacial resolution of ~1 nm ( at 200KeV) limited by the parallality of the beam"
        },
        {
            title: "Conventional STEMs & Detectors",
            description: "Significant gain in spatial resolution is achieved due to condensed nature of the beam, resolution of atomic column by column is possible"
        },
        {
            title: "Corrected TEM/STEM & HAADF detectors",
            description: "Sub Å probe size, energy resolution ~0.20eV, spacial resolution at pm (at 80/200KeV)"
        },

    ];

    return (
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 4, sm: 6 } }}>

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
                    src={tem}
                    alt="Transmission Electron Microscopy Services"
                    sx={{ mb: { xs: 3, sm: 4 }, maxWidth: "100%", height: "auto" }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    onError={(e) => {
                        e.target.src = { tem };
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
                            src={conventionaltem}
                            alt="Our Methodology"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = { conventionaltem };
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
                            src={stem} // Add the URL of the second image
                            alt="TEM Image Example"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = { stem }; // Fallback if image fails to load
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
                        image={louisdebrogliepng_white}
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
                    Optics Geometry
                </Typography>
                <br />
                <Typography
                    variant={{ xs: "h7", sm: "h6", md: "h5" }}
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 500, mb: { xs: 6, sm: 6 }, letterSpacing: 0.8, fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2.2rem" } }} // Adjusted font size
                >
                    Electron Optics – TEM/STEM
                </Typography>



                {/* Grid Container for Side-by-Side Images */}
                <Grid container spacing={2} sx={{ mt: 3 }}>
                    {/* First Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        <StyledImage
                            component={motion.img}
                            src={frame}
                            alt="Our Methodology"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = { frame };
                            }}
                        />

                    </Grid>

                    {/* Second Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        <StyledImage
                            component={motion.img}
                            src={geometry} // Add the URL of the second image
                            alt="TEM Image Example"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = { geometry }; // Fallback if image fails to load
                            }}
                        />

                    </Grid>
                    <Typography
                        variant="body1"
                        align="justify"
                        color="text.secondary"
                        sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 2, sm: 2 }, lineHeight: 1.8 }}
                    >
                        <strong>TEM</strong> – In TEM mode, a parallel beam illuminate the sample and the phase contrast images
                        and diffraction are formed on the image plane using suitable projection lenses.
                    </Typography>
                    <Typography
                        variant="body1"
                        align="justify"
                        color="text.secondary"
                        sx={{ mt: { xs: 1, sm: 1 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
                    >
                        <strong>STEM</strong> – In STEM mode, a focussed electron beam scans a very thin sample and the images are formed by collecting various signals in parallel.
                        The most common signals acquired are bright field (bf), annular dark field (ADF), and high-angle annular dark field (HAADF) images.
                        They are paired with energy dispersive spectroscopy (EDS), electron energy loss spectroscopy (EELS),
                        and In-Situ techniques to provide a complete elemental, structural, and electronic mapping of the sample.
                    </Typography>
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
                    Aberration Corrected Microscopes
                </Typography>


                {/* Grid Container for Side-by-Side Images */}
                <Grid container spacing={2} sx={{ mt: 3, justifyContent: "center", alignItems: "center" }}>
                    {/* First Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        <StyledImage
                            component={motion.img}
                            src={aberration}
                            alt="Our Methodology"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = { aberration };
                            }}
                        />

                    </Grid>

                    {/* Second Image (50% width) */}
                    <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: "center" }}>

                        <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2, textAlign: "center" }}>
                            The electron beam under the magnetic field is always associated with spherical aberration which limits the spatial resolution of the microscope to the sub-nanometer level.
                            By using suitable spherical aberration correctors, the spatial resolution of the microscope can be reached at the level sub-angstrom level.
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
                    mb: 6,
                    mt: 4
                }}
            >

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
                                <RadarIcon style={{ color: theme.palette.primary.main, fontSize: 32 }} />
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
                        image={ernstruska}
                        alt="Ernst Ruska"
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
                            "In electron microscopy, the difficulties took considerably more time to surmount,
                            and therefore the doubters held the field for a longer period.
                            I can, however, also confirm from my own experience the observation of my
                            colleagues that the doubt of the others has the advantage of leaving the field uncrowded"
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontStyle="italic">
                            - Ernst Ruska
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

        </Container>
    );
};

export default TemServicesPage;
