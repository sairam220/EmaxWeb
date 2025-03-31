import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import {
    Box, Typography, Container, Grid, Button,
    Card, CardMedia, CardContent,
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CallIcon from '@mui/icons-material/Call';
import Slider from 'react-slick';
import EngineeringIcon from '@mui/icons-material/Engineering';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PsychologyIcon from '@mui/icons-material/Psychology';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HomeImage from '../../asserts/Home/output.webp'
import iithyd from '../../asserts/Home/iithyd.webp'
import tem from '../../asserts/Home/tem.webp'
import temHolders from '../../asserts/Home/tem holders.webp'
import Sensor from '../../asserts/Home/CMOS-Sensor.webp'
import managem from '../../asserts/Home/managem.webp'
import continuous from '../../asserts/Home/continuous-improvement.webp'
import artificial from '../../asserts/Home/artificial-intelligence.webp'
import Frame from '../../asserts/Home/Frame 185.webp'
import AlbertEinstein from '../../asserts/Home/Img02.webp'
import download from '../../asserts/Partners/download.webp'
import Picture3 from '../../asserts/Mems/Picture3.webp'
import { IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import aiml from '../../asserts/Services/aiml-3.webp'
import Chip from '@mui/material/Chip';
import MeMsChips from '../SpecilizedProducts/Mems';


// Services Data
const services = [
    {
        title: 'MEMS CHIPS FOR IN-SITU TEM',
        img: Picture3,
        subServices: '',
        navigate: ''
    },
    {
        title: 'TEM Holders',
        img: temHolders,
        subServices: '',
        navigate: ''
    },
    {
        title: 'Sensors',
        img: Sensor,
        subServices: '',
        navigate: ''
    },
    {
        title: 'Specialized Services',
        img: tem,
        subServices: 'TEM,FIB,SEM,XRD,Probs Analysis',
        navigate: '/services'
    },
    {
        title: 'Industrial Process Optimization',
        img: aiml,
        subServices: 'Our Methodology,SAPI,AI/ML Based Approach',
        navigate: '/services'
    },
];

const capabilitiesData = [
    {
        image: managem,
        text: 'Enhancing Product Portfolio',
        information: "Portfolio Enhancement"
    },
    {
        image: continuous,
        text: 'Optimizing Product Variability',
        information: "Product Optimization"
    },
    {
        image: artificial,
        text: 'Statistical Design & ML Models',
        information: "Statistical Design"
    },
];

const partners = [
    {
        partnerName: 'PSG-STEP',
        description: 'PSG-STEP fosters entrepreneurship and innovation by providing mentoring, training, and startup ecosystem support to young leaders aiming to solve real-world problems.',
        role: 'Incubation Center',
        image: download
    },
    {
        partnerName: 'Indian Institute of Technology Hyderabad',
        description: 'IITH offers diverse programs in engineering, science, and technology, encouraging innovation, research, and interdisciplinary learning to tackle global challenges.',
        role: 'Electron Microscope Product Collaborator',
        image: iithyd
    },
    {
        partnerName: 'SN Microtech, Bangalore',
        description: 'SN Microtech specializes in microelectronics, embedded systems, and industrial automation, delivering innovative solutions to enhance business productivity and efficiency.',
        role: 'Eg allied industries',
        image: ''
    }
];


const Home = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const pageVariants = {
        hidden: { opacity: 0, y: isMobile ? 20 : 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    };

    const handleLearnMore = (path, title) => {
        if (title) {
            switch (title) {
                case "TEM":
                    localStorage.setItem("activeTab", 0);
                    navigate(path);
                    break;
                case "FIB":
                    localStorage.setItem("activeTab", 1);
                    navigate(path);
                    break;
                case "SEM":
                    localStorage.setItem("activeTab", 2);
                    navigate(path);
                    break;
                case "XRD":
                    localStorage.setItem("activeTab", 3);
                    navigate(path);
                    break;
                case "Probs Analysis":
                    localStorage.setItem("activeTab", 4);
                    navigate(path);
                    break;
                case "Our Methodology":
                    localStorage.setItem("activeTab", 6);
                    navigate(path);
                    break;
                case "SAPI":
                    localStorage.setItem("activeTab", 5);
                    navigate(path);
                    break;
                case "AI/ML Based Approach":
                    localStorage.setItem("activeTab", 7);
                    navigate(path);
                    break;
                default:
                    localStorage.setItem("activeTab", 0);
                    navigate(path);
                    break;
            }

        } else {
            navigate(path);
        }

    };




    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <IconButton
                onClick={onClick}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '-40px',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    zIndex: 10,
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    },
                    width: 48,
                    height: 48,
                    display: { xs: 'none', sm: 'flex' }
                }}
            >
                <ArrowForwardIos sx={{ fontSize: 24 }} />
            </IconButton>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <IconButton
                onClick={onClick}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '-40px',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    zIndex: 10,
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    },
                    width: 48,
                    height: 48,
                    display: { xs: 'none', sm: 'flex' },
                }}
            >
                <ArrowBackIosNew sx={{ fontSize: 24 }} />
            </IconButton>
        );
    };

    // Updated Slider Settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: isMobile,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 900, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1, arrows: false } },
        ],
    };


    const partnersSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 900,
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1, arrows: false },
            },
        ],
    };


    return (
        <motion.div variants={pageVariants} initial="hidden" animate="visible">
            <Box
                sx={{
                    minHeight: '81.5vh',
                    background: 'linear-gradient(90deg,#aedaff,#ffe5c3)',
                    display: 'flex',
                    alignItems: 'center',
                    paddingY: 4,
                    marginTop: 7
                }}
            >
                {/* <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}> */}
                <Container maxWidth="lg">

                    {/* Heading Section */}
                    <Grid container spacing={4} alignItems="center">
                        {/* Left Side Content */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                Providing Industrial Process & Product Related Solutions
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph>
                                We at EMAX SS provide holistic scientific solutions across a spectrum of industries, enhancing product development and process optimization solutions using advanced characterization techniques, statistical design, and machine learning algorithms.
                            </Typography>

                            {/* Contact Us Button */}
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    backgroundColor: '#0073e6',
                                    color: 'white',
                                    paddingX: 3,
                                    paddingY: 1.5,
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: '#005bb5',
                                    },
                                }}
                                endIcon={<CallIcon />}
                                onClick={() => navigate("/contact")}
                            >
                                Contact Us
                            </Button>
                        </Grid>

                        {/* Right Side Image */}
                        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Box
                                component="img"
                                src={HomeImage}
                                alt="Industrial Solutions"
                                sx={{
                                    width: '100%',
                                    maxWidth: 500,
                                    borderRadius: 2,
                                    boxShadow: 3,
                                }}
                            />
                        </Grid>
                    </Grid>

                    <MeMsChips />

                    {/* Slider Section (Services) */}
                    <Box
                        mt={6}
                        mb={6}
                        sx={{ mt: { xs: "50px", sm: "70px", md: "100px" } }}
                    >
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            textAlign="center"
                            mb={6}
                            sx={{
                                fontFamily: "'Roboto', sans-serif",
                                position: "relative",
                                display: "inline-flex",
                                alignItems: "center",
                                padding: "8px 16px",
                                backgroundColor: "#424242",
                                color: "white",
                                borderRadius: 2,
                                textTransform: "uppercase",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                fontSize: "1.5rem",
                                "@media (max-width: 600px)": {
                                    fontSize: "1.25rem",
                                    padding: "6px 12px",
                                },
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    bottom: "-10px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    borderLeft: "10px solid transparent",
                                    borderRight: "10px solid transparent",
                                    borderTop: "10px solid #424242",
                                },
                            }}
                        >
                            <Box sx={{ mr: 1 }}>
                                <MiscellaneousServicesIcon sx={{ color: "white", fontSize: "2rem" }} />
                            </Box>
                            Our Services
                        </Typography>

                        <Slider {...settings}>
                            {services.map((service, index) => (
                                <Box key={index} px={2}>
                                    <Card
                                        sx={{
                                            boxShadow: 3,
                                            borderRadius: 3,
                                            maxWidth: 296,
                                            height: 420,
                                            margin: "0 auto",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
                                            "&:hover": {
                                                transform: "scale(1.03)",
                                                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
                                            },
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={service.img}
                                            alt={service.title}
                                            sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                                        />

                                        <CardContent
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                textAlign: "center",
                                                flexGrow: 1,
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                fontWeight="bold"
                                                sx={{
                                                    // minHeight: "50px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                {service.title}
                                            </Typography>

                                            {service.subServices &&
                                                <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            flexWrap: "wrap",
                                                            justifyContent: "center",
                                                            gap: 1,
                                                            mb: 2,
                                                        }}
                                                    >
                                                        {service.subServices.split(",").map((sub, idx) => (
                                                            <Chip onClick={() => handleLearnMore(service.navigate, sub)} key={idx} label={sub} variant="outlined" />
                                                        ))}
                                                    </Box>
                                                </Box>
                                            }

                                            {!service.subServices &&
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    sx={{
                                                        textTransform: "none",
                                                        fontSize: "0.9rem",
                                                        borderRadius: 2,
                                                        height: '40px',
                                                        width: "200px",
                                                        marginBottom: '20%'
                                                    }}
                                                    onClick={() => handleLearnMore(service.navigate)}
                                                >
                                                    Learn More
                                                </Button>
                                            }
                                        </CardContent>
                                    </Card>
                                </Box>
                            ))}
                        </Slider>
                    </Box>

                    {/* Timeline Section (Capabilites)*/}
                    <Box mt={6} mb={2} sx={{ mt: { xs: '50px', sm: '70px', md: '100px' } }}>

                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            textAlign="center"
                            mb={3}
                            sx={{
                                fontFamily: "'Roboto', sans-serif",
                                position: 'relative',
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '8px 16px',
                                backgroundColor: '#0073e6',
                                color: 'white',
                                borderRadius: 2,
                                textTransform: 'uppercase',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                fontSize: '1.5rem',
                                '@media (max-width: 600px)': {
                                    fontSize: '1.25rem',
                                    padding: '6px 12px',
                                },
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '-10px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    borderLeft: '10px solid transparent',
                                    borderRight: '10px solid transparent',
                                    borderTop: '10px solid #0073e6',
                                },
                            }}
                        >
                            <Box sx={{ mr: 1 }}>
                                <EngineeringIcon sx={{ color: 'white', fontSize: '2rem' }} />
                            </Box>
                            Our Capabilities
                        </Typography>

                        <Timeline position="alternate">
                            {capabilitiesData.map((item, index) => (
                                <TimelineItem key={index}>
                                    <TimelineSeparator>
                                        {/* Top Connector */}
                                        {index !== 0 && (
                                            <TimelineConnector
                                                sx={{
                                                    bgcolor: 'black',
                                                    height: { xs: '10px', sm: '20px', md: '30px' }, // Responsive height
                                                }}
                                            />
                                        )}

                                        {/* Timeline Dot with Image */}
                                        <TimelineDot
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: { xs: 60, sm: 80, md: 120 }, // Responsive width
                                                height: { xs: 60, sm: 80, md: 120 }, // Responsive height
                                                backgroundColor: 'white',
                                                border: '2px solid #0073e6',
                                                borderRadius: '50%',
                                                boxShadow: 2,
                                                padding: 0,
                                                margin: '0 auto',
                                            }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.text}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    borderRadius: '50%',
                                                }}
                                            />
                                        </TimelineDot>

                                        {/* Bottom Connector */}
                                        {index !== capabilitiesData.length - 1 && (
                                            <TimelineConnector
                                                sx={{
                                                    bgcolor: 'black',
                                                    height: { xs: '10px', sm: '20px', md: '30px' }, // Responsive height
                                                }}
                                            />
                                        )}
                                    </TimelineSeparator>

                                    {/* Timeline Content */}
                                    <TimelineContent
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: { xs: 'center', sm: 'flex-start' }, // Center align for small screens
                                            textAlign: { xs: 'center', sm: 'left' }, // Text alignment based on screen size
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 600,
                                                marginTop: { xs: '8%' },
                                                fontSize: { xs: '1rem', sm: '1.3rem', md: '1.5rem' }, // Responsive text size
                                                color: 'text.primary',
                                            }}
                                        >
                                            {item.text}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: '0.8rem', sm: '1rem' }, // Adjust text size for readability
                                                color: 'text.secondary',
                                                maxWidth: { xs: '90%', sm: '100%' }, // Prevents text overflow
                                            }}
                                        >
                                            {item.information}
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>

                    </Box>

                    <Box mt={6} mb={2} sx={{ mt: { xs: '50px', sm: '70px', md: '100px' } }}>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            textAlign="center"
                            mb={6.8}
                            sx={{
                                fontFamily: "'Roboto', sans-serif",
                                position: 'relative',
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '8px 16px',
                                backgroundColor: '#4e342e',
                                color: 'white',
                                borderRadius: 2,
                                textTransform: 'uppercase',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                fontSize: '1.5rem',
                                '@media (max-width: 600px)': {
                                    fontSize: '1.25rem',
                                    padding: '6px 12px',
                                },
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '-10px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    borderLeft: '10px solid transparent',
                                    borderRight: '10px solid transparent',
                                    borderTop: '10px solid #4e342e',
                                },
                            }}
                        >
                            <Box sx={{ mr: 1 }}>
                                <PsychologyIcon sx={{ color: 'white', fontSize: '2rem' }} />
                            </Box>
                            Methodology
                        </Typography>
                        <img
                            src={Frame}
                            alt="Methodology"
                            style={{
                                width: '90%', // Makes the image responsive
                                height: 'auto',
                                borderRadius: '8px',

                            }}
                        />
                    </Box>

                    <Box mt={6} mb={6} sx={{ mt: { xs: "50px", sm: "70px", md: "100px" } }}>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            textAlign="center"
                            mb={6}
                            sx={{
                                fontFamily: "'Roboto', sans-serif",
                                position: "relative",
                                display: "inline-flex",
                                alignItems: "center",
                                px: 3,
                                py: 1,
                                backgroundColor: "#424242",
                                color: "white",
                                borderRadius: 2,
                                textTransform: "uppercase",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                fontSize: { xs: "1.25rem", sm: "1.5rem" },
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    bottom: "-10px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    borderLeft: "10px solid transparent",
                                    borderRight: "10px solid transparent",
                                    borderTop: "10px solid #424242",
                                },
                            }}
                        >
                            <HandshakeIcon sx={{ mr: 1, fontSize: "2rem" }} /> Our Partners
                        </Typography>

                        <Slider {...partnersSettings}>
                            {partners.map((partner, index) => (
                                <Box key={index} px={2}>
                                    <Card
                                        sx={{
                                            display: "flex",
                                            flexDirection: { xs: "column", sm: "row" },
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            boxShadow: 3,
                                            borderRadius: 3,
                                            maxWidth: { xs: 296, sm: 800 },
                                            margin: "0 auto",
                                            p: 2,
                                            height: 'auto',
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={partner.image}
                                            alt={partner.partnerName}
                                            sx={{
                                                width: 250,
                                                height: 220,
                                                objectFit: "cover",
                                                borderRadius: 2,
                                                mb: { xs: 2, sm: 0 },
                                            }}
                                        />
                                        <CardContent
                                            sx={{
                                                padding: 2,
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                textAlign: "left",
                                                flexGrow: 1,
                                            }}
                                        >
                                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                                                {partner.partnerName}
                                            </Typography>
                                            <Typography variant="h8" fontWeight="bold" sx={{ mb: 2 }}>
                                                {partner.role}
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: "text.secondary" }}>
                                                {partner.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            ))}
                        </Slider>
                    </Box>

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
                                image={AlbertEinstein}
                                alt="Albert Einstein"
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
                                    "The one who follows the crowd will usually go no further than the crowd. The one who walks alone is likely to find themselves in places no one has ever been before."
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontStyle="italic">
                                    - Albert Einstein
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>


                </Container>
                {/* </motion.div> */}
            </Box >
        </motion.div >

    );
};

export default Home;


