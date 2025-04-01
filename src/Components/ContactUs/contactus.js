import React, { useState } from "react";
import {
    Typography,
    Container,
    Grid,
    TextField,
    Button,
    Box,
    Snackbar,
    Alert,
    Card,
    CircularProgress,
    useTheme,
    useMediaQuery,
    CardMedia,
    CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import emailjs from "@emailjs/browser";
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import swamychinmayananda_white from '../../asserts/Services/swamychinmayananda_white.webp'


const StyledForm = styled("form")(({ theme }) => ({
    maxWidth: "100%",
    marginTop: theme.spacing(3),
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5))",
    backdropFilter: "blur(15px)",
    padding: theme.spacing(5),
    borderRadius: "20px",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(3),
        margin: theme.spacing(2),
    }
}));

const AddressInfo = styled(Card)(({ theme }) => ({
    padding: theme.spacing(5),
    marginTop: theme.spacing(4),
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))",
    backdropFilter: "blur(15px)",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(3),
    }
}));
export default function ContactUs() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name || formData.name.length < 2) newErrors.name = "Name must be at least 2 characters";
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
        if (!formData.message || formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const pageVariants = {
        hidden: { opacity: 0, y: isMobile ? 20 : 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const templateParams = {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            };
            setLoading(true);
            await emailjs.send(
                "service_7i9t6wp",
                "template_fv4r1vb",
                templateParams,
                "q8YXSXJkGfPrDeA1_"
            );
            setSnackbar({ open: true, message: "Message sent successfully!", severity: "success" });
            setFormData({ name: "", email: "", message: "" });
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
    };

    return (
        <motion.div variants={pageVariants} initial="hidden" animate="visible">
            <Box
                sx={{
                    minHeight: '81.5vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 10,
                    marginBottom: 10,
                    width: '100%',
                    overflowX: "hidden",
                    flexGrow: 1,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        mb: 4,
                        color: "#222",
                        display: { xs: "inline-flex", sm: "none" },
                        letterSpacing: 1.5,
                        fontFamily: "'Poppins', sans-serif",
                        position: "relative",
                        // display: "inline-flex",
                        alignItems: "center",
                        gap: 1.2,
                        "@media (max-width: 600px)": {
                            fontSize: "1.3rem",
                            letterSpacing: 1,
                        },
                    }}
                >

                    ContactUs
                    <ContactMailIcon sx={{ fontSize: "1.5rem" }} color="primary" />
                </Typography>
                <Box sx={{ width: "100%", height: "400px", overflow: "hidden", mb: 5 }}>
                    <iframe
                        width="100%"
                        height="100%"
                        title="EMAX Location"
                        src="https://maps.google.com/maps?width=520&height=400&hl=en&q=Level%201,%20289%20Goundappan%20Street,%20Coimbatore%20%E2%80%93%20641038,%20Tamil%20Nadu,%20India+(EMAX%20Scientific%20Solutions%20Pvt.%20Ltd)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                        style={{ borderRadius: "10px", border: 0 }}
                    />
                </Box>

                <Button
                    variant="contained"
                    startIcon={<EventIcon />}
                    sx={{ mt: 2 }}
                    href="https://calendly.com/surya-ps-emaxss/emax-consulting"
                    target="_blank"
                >
                    Book Appointment
                </Button>

                <Container maxWidth={isMobile ? "sm" : "md"}>
                    <StyledForm onSubmit={handleSubmit}>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, color: "primary.main" }}>
                            Message Us
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12}><TextField fullWidth required name="name" label="Name" value={formData.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} InputProps={{ startAdornment: <PersonIcon sx={{ mr: 1 }} color="primary" /> }} /></Grid>
                            <Grid item xs={12}><TextField fullWidth required name="email" label="Email" type="email" value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} InputProps={{ startAdornment: <MailIcon sx={{ mr: 1 }} color="primary" /> }} /></Grid>
                            <Grid item xs={12}><TextField fullWidth required name="message" label="Message" multiline rows={4} value={formData.message} onChange={handleChange} error={!!errors.message} helperText={errors.message} /></Grid>
                            <Grid item xs={12}><Button type="submit" variant="contained" disabled={loading} startIcon={loading && <CircularProgress size={20} />}>{loading ? "Sending..." : "Send Message"}</Button></Grid>
                        </Grid>
                    </StyledForm>

                    <AddressInfo>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 6, color: "primary.main" }}>
                            Contact Information
                        </Typography>
                        <Grid container spacing={2.6}>
                            <Grid item xs={12} md={4}>
                                <Box display="flex" alignItems="center">
                                    <LocalPhoneIcon sx={{ mr: 1 }} color="primary" />
                                    <a href="tel:+919150851970" style={{ color: 'inherit', textDecoration: 'none' }}>
                                        <Typography>+91 9150851970</Typography>
                                    </a>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box display="flex" alignItems="center">
                                    <MailIcon sx={{ mr: 1 }} color="primary" />
                                    <Typography component="a" href="mailto:surya.ps@emaxss.org" style={{ color: 'inherit', textDecoration: 'none' }}>
                                        sankara.ps@emaxss.org
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box display="flex" alignItems="center">
                                    <WatchLaterIcon sx={{ mr: 1 }} color="primary" />
                                    <Typography>Mon-Sat: 9AM-7PM IST</Typography>
                                </Box>
                            </Grid>
                        </Grid>

                        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 6, mb: 2 }}>
                            Our Registered Address
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 6 }} align="center">
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <LocationOnIcon sx={{ mr: 2 }} color="primary" />
                                <div>
                                    Level 1, 289 Goundappan Street,
                                    <br />
                                    Coimbatore – 641038,
                                    <br />
                                    Tamil Nadu, India
                                </div>
                            </Box>
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                            For Enquiries
                        </Typography>
                        <Typography variant="body1">
                            Dr. P. S. Sankara Rama Krishnan, PhD (UNSW, Sydney)
                            <br />
                            CEO, CTO
                            <br />
                            <a href="mailto:sankara.ps@emaxss.org" style={{ color: 'inherit', textDecoration: 'none' }}>sankara.ps@emaxss.org</a>
                            <br />
                            <br />
                            P. S Suriyanarayanan
                            <br />
                            COO
                            <br />
                            <a href="mailto:surya.ps@emaxss.org" style={{ color: 'inherit', textDecoration: 'none' }}>surya.ps@emaxss.org</a>
                        </Typography>
                    </AddressInfo>

                </Container>

                <Box mt={6} mb={3} px={{ xs: 1, sm: 4, md: 6 }}>
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
                            image={swamychinmayananda_white}
                            alt="Swami Chinmayananda"
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
                                "Plan your work. Then work out your plan"
                            </Typography>
                            <Typography variant="body2" color="text.secondary" fontStyle="italic">
                                - Swami Chinmayananda
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={4000}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                >
                    <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity}>{snackbar.message}</Alert>
                </Snackbar>
            </Box>
        </motion.div>
    );
}
