import React from "react";
import {
    Grid, Container, Typography,Paper, useTheme
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import process4 from '../../asserts/Industries/process-4.png'
import structure4 from '../../asserts/Industries/structure-4.png'
import optimisation from '../../asserts/Industries/optimisation.png'


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


const PharmaPage = () => {
    const theme = useTheme();



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
                    Food Science & Pharmaceutical
                </Typography>

                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
                >
                    Food Science studies  involves multi-disciplinary aooroach involving chemistry, biochemistry,
                    nutrition, microbiology and engineering to give one the scientific knowledge to
                    solve real problems associated with the many facets of the food system.
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
                >
                    The pharmaceutical industry is an industry involved in medicine that discovers, develops,
                    produces, and markets pharmaceutical goods for use as drugs that function by being
                    administered to patients using such medications with the goal of curing and/or
                    preventing disease
                </Typography>

            </Paper>

            <Paper
                elevation={3}
                sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    borderRadius: 4,
                    mt: 4,
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
                    Pharmaceutical Manufacturing
                </Typography>
                <Typography
                    variant="h5"
                    color="primary"
                    align="center"
                    sx={{ fontWeight: 550, mt: 2 }}
                >
                    Tablet Manufacturing
                </Typography>

                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
                >
                    The tablet manufacturing steps involve batching, blending(milling, spray dryer),
                    shaping (granulation, pressing), and coating. Each process step introduce their own variable
                    which has a significant bearing on the production cycle and the final product. Optimising the
                    process variables plays a crucial role in reducing production cost and rejection ratio.
                </Typography>

                {/* Animated Image */}


                <Grid container justifyContent="center" alignItems="center" sx={{ mt: 4 }}>


                    {/* First Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        <StyledImage
                            component={motion.img}
                            src={process4}
                            alt="Pharmaceutical Manufacturing"
                            sx={{ mb: { xs: 3, sm: 4 }, maxWidth: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = {process4};
                            }}
                        />

                    </Grid>



                </Grid>


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

                {/* Grid Container for Side-by-Side Images */}
                <Grid container spacing={3} sx={{ mt: 3 }}>
                    {/* First Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        <StyledImage
                            component={motion.img}
                            src={structure4}
                            alt="Microstructure Development"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = {structure4};
                            }}
                        />
                        <Typography variant="h6" color="primary" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                            Microstructure Development
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, textAlign: "center" }}>
                            The manufacturing stages results in developing a unique micro-structure which play a crucial role
                            in the final composition. Understanding and controlling at each stage of the process cycle is
                            expected to provide more insight on the performance of the final product.
                        </Typography>
                    </Grid>

                    {/* Second Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        <StyledImage
                            component={motion.img}
                            src={optimisation} // Add the URL of the second image
                            alt="Achieving and Improving Product Quality"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = {optimisation}; // Fallback if image fails to load
                            }}
                        />
                        <Typography variant="h6" color="primary" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                            Achieving and Improving Product Quality
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, textAlign: "center" }}>
                            The performance of the final product (such as avoiding adverse effects) is governed by the process
                            variables and the microstructure development. By achieving the optimised process variables,
                            the production cycles, cost of the pharmaceutical components is minimised.
                        </Typography>
                    </Grid>


                </Grid>


            </Paper>
        </Container>
    );
};

export default PharmaPage;