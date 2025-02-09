import React from 'react';
import { Box, Typography, Container, Grid, Button, Card, CardMedia, CardContent, useMediaQuery } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import Slider from 'react-slick';
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
            { breakpoint: 600, settings: { slidesToShow: 1, arrows: false,  } },
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
                <Box mt={6} mb={2}>
                    <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
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
                                        maxWidth: 290,
                                        height: 400,
                                        marginRight: '15px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        alignContent:'center'
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
            </Container>
        </Box>
    );
};

export default Home;
