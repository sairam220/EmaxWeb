import React from "react";
import {
    Container, Typography, List,
    ListItemIcon, ListItemText, Paper, useTheme,
    Box, Card, CardMedia, CardContent,
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import aiml from '../../asserts/Services/aiml-3.webp'
import img03 from '../../asserts/Services/img03.webp'

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

const AiMlPage = () => {
    const theme = useTheme();

    const mlWorkflowPoints = [
        {
          title: "Compilation of Data",
          description: "Experimental and literature data of a class of material composed of multiple elements are compiled to provide a comprehensive dataset for analysis."
        },
        {
          title: "Feature Engineering",
          description: "Feature engineering is performed to identify and extract relevant inputs such as composition, structure, and process conditions to facilitate more accurate and efficient analysis."
        },
        {
          title: "Machine Learning Models",
          description: "Machine learning models are used to predict material properties, followed by cross-validation with existing literature to ensure the accuracy of predictions."
        },
        {
          title: "Model Validation and Prediction",
          description: "Validated data is utilized in modeling to predict material properties, considering critical factors like time, efficiency, and accuracy to enhance the predictive capabilities."
        }
      ];
      

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
                    AI & ML Services
                </Typography>

                <Typography
                    variant="body1"
                    align="justify"
                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
                >
                    Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing materials discovery by rapidly
                    analyzing vast datasets to identify potential new materials, optimize process parameters,
                    and predict the material properties based on composition and structure. These technologies
                    optimize process parameters and material properties, reduce the need for extensive experimental testing,
                    and handle complex data for deeper insights. By uncovering novel materials and providing real-time decision-making support in manufacturing,
                    AI and ML enable faster, more accurate, and cost-effective materials development.
                </Typography>

                {/* Animated Image */}
                <StyledImage
                    component={motion.img}
                    src={aiml}
                    loading="lazy"
                    alt="AI&ML"
                    sx={{ mb: { xs: 3, sm: 4 }, maxWidth: "100%", height: "auto" }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    onError={(e) => {
                        e.target.src = {aiml};
                    }}
                />

                <List sx={{ mt: 2, listStyleType: "none", padding: 0 }}>
                    {mlWorkflowPoints.map((item, index) => (
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
                        image={img03}
                        alt="Srinivasa Ramanujan"
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
                            "Mathematics is not about numbers, equations, computations or algorithms: it is about understanding"
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontStyle="italic">
                            - Srinivasa Ramanujan
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default AiMlPage;
