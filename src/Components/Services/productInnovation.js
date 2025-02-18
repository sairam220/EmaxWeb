import React from "react";
import {
    Container, Typography, List,
    ListItemIcon, ListItemText, Paper, useTheme
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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

const ProductInnovationPage = () => {
    const theme = useTheme();

    const doePoints = [
        {
            title: "Core of Product Development",
            description: "In any industry-related product, the troika of ‘process variables (pv) – microstructural development (md) – functional property (fp)’ forms the core, and understanding their critical interactions is essential for new product development and enhancing existing product quality."
        },
        {
            title: "Optimizing Process Variables for Enhanced Quality",
            description: "By optimizing process variables, suitable microstructural features can be developed, leading to optimized or significantly enhanced product quality with superior performance."
        },
        {
            title: "Advancements in Experimental and Statistical Techniques",
            description: "Recent advances in experimental techniques, statistical methods, and machine learning algorithms provide a powerful framework to identify, develop, prototype, up-scale, and launch new products across various industries in innovative ways."
        },
        {
            title: "Holistic Material-Based Solutions",
            description: "With a team combining strong experimental scientists and young professionals in statistical and data science, we offer holistic material-based solutions across various industries."
        },
        {
            title: "Collaborative Approach and Access to Resources",
            description: "We believe in the ‘pv-md-fp’ troika, and have established collaborative agreements to access critical process equipment, as well as analytical and structural characterization equipment to optimize product development cycles."
        },
        {
            title: "Optimized Product Development Cycles",
            description: "Rapid access to relevant sources allows for optimized product development cycles, ensuring reduced timelines and maximized efficiency."
        }
    ];

    const methodologyDoePoints = [
        {
            title: "Process Evaluation",
            description: "The existing process will be evaluated, and key variables will be analyzed to understand their impact and identify areas for improvement."
        },
        {
            title: "Design of Experiments",
            description: "Experiments will be designed using our expertise in process development, micro-structural characterization, and reliability testing to ensure accurate and insightful results."
        },
        {
            title: "Process Optimization",
            description: "We will provide holistic solutions based on the results of the previous steps to optimize process cycles, improving efficiency and performance."
        }
    ];


    return (
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 4, sm: 6 }}}>
            <Paper
                elevation={3}
                sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    borderRadius: 4,
                    backgroundColor: theme.palette.background?.default || "#fff",
                    mb:6
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
                    Our Approach To New Product Innovation
                </Typography>


                {/* Animated Image */}
                <StyledImage
                    component={motion.img}
                    src="https://emaxss.org/wp-content/uploads/2024/06/new-product-innovation-1.png"
                    alt="Product Innovation"
                    sx={{ mt: { xs: 3, sm: 4 },mb: { xs: 3, sm: 4 }, maxWidth: "100%", height: "auto" }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    onError={(e) => {
                        e.target.src = "https://emaxss.org/wp-content/uploads/2024/06/new-product-innovation-1.png";
                    }}
                />

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
                    Our Methodology
                </Typography>


                {/* Animated Image */}
                <StyledImage
                    component={motion.img}
                    src="https://emaxss.org/wp-content/uploads/2024/07/matrix-1.png"
                    alt="Our Methodology"
                    sx={{ mt: { xs: 3, sm: 4 },mb: { xs: 3, sm: 4 }, maxWidth: "100%", height: "auto" }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    onError={(e) => {
                        e.target.src = "https://emaxss.org/wp-content/uploads/2024/07/matrix-1.png";
                    }}
                />

                <List sx={{ mt: 2, listStyleType: "none", padding: 0 }}>
                    {methodologyDoePoints.map((item, index) => (
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
        </Container>
    );
};

export default ProductInnovationPage;
