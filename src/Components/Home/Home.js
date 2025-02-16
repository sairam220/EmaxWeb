import React from 'react';
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


// Services Data
const services = [
    {
        title: 'Statistical Approach for Process Improvement',
        img: 'https://emaxss.org/wp-content/uploads/2024/05/process-5.png?w=1024',
    },
    {
        title: 'Our Approach to New Product Innovation',
        img: 'https://emaxss.org/wp-content/uploads/2024/05/new-product-innovation-3.png?w=1024',
    },
    {
        title: 'Transmission Electron Microscopy (TEM)',
        img: 'https://emaxss.org/wp-content/uploads/2024/05/electron-microscopy-services-5.png?w=1024',
    },
    {
        title: 'Scanning Electron Microscopy (SEM) services',
        img: 'https://emaxss.org/wp-content/uploads/2024/05/sem-servcies-1.png?w=1024',
    },
    {
        title: 'Focussed Ion Beam-Scanning Electron Microscopy (FIB-SEM) services',
        img: 'https://emaxss.org/wp-content/uploads/2024/05/fib-sem-2.png?w=1024',
    },
    {
        title: 'X-Ray Diffraction Services',
        img: 'https://emaxss.org/wp-content/uploads/2024/05/x-ray.png',
    },
    {
        title: 'Structural & Probe Station Services',
        img: 'https://emaxss.org/wp-content/uploads/2024/05/structure-probe-1.png',
    },
    {
        title: 'AI & ML Services',
        img: 'https://emaxss.org/wp-content/uploads/2024/05/placeholder-2.png?w=1024',
    },
];

const capabilitiesData = [
    {
        image: 'https://emaxss.org/wp-content/uploads/2024/05/managem.png?w=300',
        text: 'Enhancing Product Portfolio',
        information: "Portfolio Enhancement"
    },
    {
        image: 'https://emaxss.org/wp-content/uploads/2024/05/continuous-improvement.png?w=300',
        text: 'Optimizing Product Variability',
        information: "Product Optimization"
    },
    {
        image: 'https://emaxss.org/wp-content/uploads/2024/05/artificial-intelligence.png?w=300',
        text: 'Statistical Design & ML Models',
        information: "Statistical Design"
    },
];


const Home = () => {




    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 900, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1, arrows: false } },
        ],

    };

    return (
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
                        >
                            Contact Us
                        </Button>
                    </Grid>

                    {/* Right Side Image */}
                    <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Box
                            component="img"
                            src={`${process.env.PUBLIC_URL}/output.jpg`}
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

                {/* Slider Section (Services) */}
                <Box mt={6} mb={6} sx={{ mt: { xs: '50px', sm: '70px', md: '100px' } }}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        textAlign="center"
                        mb={6}
                        sx={{
                            fontFamily: "'Roboto', sans-serif",
                            position: 'relative',
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '8px 16px',
                            backgroundColor: '#424242', // Gray background color
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
                                borderTop: '10px solid #424242', // Match the background color
                            },
                        }}
                    >
                        <Box sx={{ mr: 1 }}>
                            <MiscellaneousServicesIcon sx={{ color: 'white', fontSize: '2rem' }} /> {/* Icon for services */}
                        </Box>
                        Our Services
                    </Typography>
                    <Slider
                        {...settings}
                    // nextArrow={}
                    >
                        {services.map((service, index) => (
                            <Box key={index} px={2}>
                                <Card
                                    sx={{
                                        boxShadow: 3,
                                        borderRadius: 3,

                                        maxWidth: 296,
                                        height: 400,
                                        margin: '0 auto',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        alignContent: 'center'
                                    }}
                                >
                                    <CardMedia component="img" height="220" image={service.img} alt={service.title} />
                                    <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                                        <Typography variant="h6" fontWeight="bold">
                                            {service.title}
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                mt: 1,
                                                textTransform: 'none',
                                                fontSize: '0.9rem',
                                                borderRadius: 2,
                                                width: '100%',
                                            }}
                                        >
                                            Learn More
                                        </Button>
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
                                    {index !== 0 && (
                                        <TimelineConnector
                                            sx={{
                                                bgcolor: 'black',
                                                height: '30px', // Adjusted height for proper connection
                                                '@media (max-width: 600px)': {
                                                    height: '10px', // Shorter for mobile screens
                                                },
                                            }} />
                                    )}
                                    <TimelineDot
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 120,
                                            height: 120,
                                            padding: 0,
                                            margin: '0 auto',
                                            backgroundColor: 'white',
                                            border: '2px solid #0073e6',
                                            borderRadius: '50%',
                                            boxShadow: 2,
                                            '@media (max-width: 600px)': {
                                                width: 60,
                                                height: 60,
                                            },
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
                                    {index !== capabilitiesData.length - 1 && (
                                        <TimelineConnector sx={{
                                            bgcolor: 'black',
                                            height: '30px'
                                        }} />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent
                                    style={{ alignContent: 'center' }}
                                >
                                    <Typography
                                        style={{
                                            fontWeight: 600,
                                            fontSize: { xs: '1.2rem', sm: '1.5rem' },
                                            color: 'text.primary',
                                        }}
                                    >
                                        {item.text}
                                    </Typography>
                                    <Typography>{item.information}</Typography>
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
                        src="https://emaxss.org/wp-content/uploads/2024/05/methodology.png?w=1024&h=552"
                        alt="Methodology"
                        style={{
                            width: '90%', // Makes the image responsive
                            height: 'auto',
                            borderRadius: '8px',

                        }}
                    />
                </Box>

                <Box mt={6} mb={6} px={{ xs: 2, sm: 4, md: 6 }}>
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            maxWidth: 900, // Reduced max width for better centering
                            margin: '0 auto',
                            boxShadow: 3,
                            borderRadius: 2,
                            padding: 3,
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
                            image={`${process.env.PUBLIC_URL}/enstin.jpg`}
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
        </Box>
    );
};

export default Home;
