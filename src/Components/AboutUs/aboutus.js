import React from "react";
import {
    Container, Grid, Typography, Card, CardContent,
    CardMedia, List, ListItem, ListItemText, ListItemIcon, Paper,
    Box, useTheme,
    useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { motion } from "framer-motion";
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@mui/icons-material/Group';
import sircv_white from '../../asserts/Services/sircv_white-1.webp'
import electron from '../../asserts/AboutUs/Group 245.png'
import project from '../../asserts/AboutUs/project-management-2.png'
import image122 from '../../asserts/AboutUs/image-122.png'
import industrial from '../../asserts/AboutUs/industrial-product.png'
import physical from '../../asserts/AboutUs/physical-chemistry.png'
import ml from '../../asserts/AboutUs/ml.png'



const StyledCard = styled(Card)(({ theme }) => ({
    height: "100%",
    display: "flex",

    cursor: 'pointer',
    flexDirection: "column",
    justifyContent: 'center',
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        transform: "translateY(-5px)"
    },
    borderRadius: '20px'
}));

const AboutUs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const teamMembers = [
        {
            name: "Dr. P S Sankara Rama Krishnan",
            image: electron,
            expertise: "PhD from The University of New South Wales, Sydney, Australia",
            info: "Dr. P S Sankara Rama Krishnan has strong background in electron microscopy, analytical and process optimization across bulk, thin film oxides, and alloys."
        },
        {
            name: "P S Suriyanarayanan",
            image: project,
            expertise: "",
            info: "P.S Suryanarayanan is a financial professional with more than three decades of expertise in corporate management and finance."
        },
        {
            name: "Dr. D.H.K Murthy",
            image: image122,
            expertise: "PhD from Delft University of Technology, Netherlands",
            info: "Dr. D.H.K Murthy has strong experimental background in spectroscopy and chemical synthesis."
        },
        {
            name: "Dr. S.V Ilango",
            image: industrial,
            expertise: "PhD from Indian Institute of Technology, Bombay",
            info: "Dr. S.V Ilango has over three decades of industrial product development and was heading a corporate research, scale-up, and production related to ceramics, cement, and concrete wing."
        },
        {
            name: "Dr. Mohan Bhadbade",
            position: "",
            image: physical,
            expertise: "PhD from Indian Institute of Science, Bangalore",
            info: "Dr. Mohan Bhadbade has strong background in the analytical X-ray diffraction and expertise in physical chemistry."
        },
        {
            name: "Dr. Shakti Prasad Padhy",
            position: "",
            image: ml,
            expertise: "PhD from Nanyang Technological University, Singapore",
            info: "Dr. Shakti Prasad Padhy has strong background in machine learning, automation, and high-throughput experiments for accelerated materials discovery"
        }
    ];


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
                    marginBottom: 10,
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
                                About Us
                                <InfoIcon sx={{ fontSize: 38, color: "#1976d2" }} />
                            </Typography>

                            <Box my={6} >
                                <Typography variant="body1" paragraph align="justify">
                                    We at EMAX SS, with strong research, characterisation, product development, scale-up and
                                    commercialisation expertise has in-build ability to provide one-stop holistic solutions to industrial
                                    product development and manufacturing process.
                                </Typography>

                                <Typography variant="body1" paragraph align="justify">
                                    All industrial manufacturing processes, functions on common platform which includes raw materials
                                    processing, shaping and final product evolution. Each of this process has lot of variables which needs
                                    to be monitored and controlled for making the industrial process robust and cost effective.
                                </Typography>
                            </Box>
                        </Paper>

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
                            Our Team
                            <GroupIcon sx={{ fontSize: 38, color: "#1976d2" }} />
                        </Typography>

                        <Grid container spacing={4} my={4}>
                            {teamMembers.map((member) => (
                                <Grid item xs={12} sm={6} md={4} key={member.name}>
                                    <StyledCard>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            image={member.image}
                                            alt={member.name}
                                            sx={{
                                                objectFit: "contain",
                                                width: "auto",
                                                margin: "0 auto"
                                            }}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                                {member.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontWeight: 550, mb: 4 }}>
                                                {member.expertise}
                                            </Typography>
                                            <Typography variant="body2">
                                                {member.info}
                                            </Typography>
                                        </CardContent>
                                    </StyledCard>
                                </Grid>
                            ))}
                        </Grid>
                        <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, mt: 6, backgroundColor: "#f5f5f5", borderRadius: '20px' }}>
                            <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 600 }}>
                                Promoters
                            </Typography>
                            <List>
                                <ListItem
                                    sx={{
                                        display: "flex",
                                        flexDirection: { xs: "column", sm: "column" },
                                        alignItems: "center",
                                        gap: 1,
                                        textAlign: { xs: "center", sm: "center" },
                                    }}
                                >
                                    <ListItemText
                                        primary={<Typography sx={{ fontWeight: 700 }}>Dr. P. S. Sankara Rama Krishnan, PhD (UNSW, Sydney)</Typography>}
                                    />
                                    <ListItemText primary="CEO, CTO" />
                                    <a href="mailto:sankara.ps@emaxss.org" style={{ color: 'inherit', textDecoration: 'none' }}>
                                        sankara.ps@emaxss.org
                                    </a>
                                </ListItem>
                                <ListItem
                                    sx={{
                                        display: "flex",
                                        flexDirection: { xs: "column", sm: "column" },
                                        alignItems: "center",
                                        gap: 1,
                                        mt: { xs: 2, sm: 3 }, // Adjust margin for small screens
                                        textAlign: { xs: "center", sm: "center" },
                                    }}
                                >
                                    <ListItemText
                                        primary={<Typography sx={{ fontWeight: 700 }}>P. S Suryanarayanan</Typography>}
                                    />
                                    <ListItemText primary="COO" />
                                    <a href="mailto:surya.ps@emaxss.org" style={{ color: 'inherit', textDecoration: 'none' }}>
                                        surya.ps@emaxss.org
                                    </a>
                                </ListItem>
                            </List>
                        </Paper>


                        <Paper elevation={3} sx={{ p: 4, mt: 6, backgroundColor: "#f5f5f5", borderRadius: '20px' }}>
                            <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 600 }}>
                                Contact Information
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Level 1, 289 Goundappan Street, Coimbatore – 641038,Tamil Nadu, India" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <LocalPhoneIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="+1 (555) 123-4567" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <a href="mailto:sankara.ps@emaxss.org" style={{ color: 'inherit', textDecoration: 'none' }}>sankara.ps@emaxss.org</a>
                                </ListItem>
                            </List>
                        </Paper>

                        <Box mt={4} px={{ xs: 1, sm: 4, md: 6 }}>
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
                                    image={sircv_white}
                                    alt="Sir CV Raman"
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
                                        "Science is a language that transcends boundaries; it is a universal tool for understanding the world"
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" fontStyle="italic">
                                        - Sir CV Raman
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </motion.div>
    );
};

export default AboutUs;