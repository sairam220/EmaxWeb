import React, { useState } from "react";
import {
    Grid, Container, Typography,
    Paper, useTheme, Button
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import Picture1 from '../../asserts/Mems/Picture1.jpg'
import Picture2 from '../../asserts/Mems/Picture2.jpg'
import Picture3 from '../../asserts/Mems/Picture3.jpg'
import Picture4 from '../../asserts/Mems/Picture4.jpg'
import Picture5 from '../../asserts/Mems/Picture5.jpg'
import Picture6 from '../../asserts/Mems/Picture6.jpg'
import Picture7 from '../../asserts/Mems/Picture7.png'


const StyledImage = styled(motion.img)(({ theme }) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
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



const MeMsChips = () => {
    const theme = useTheme();
    const [showMore, setShowMore] = useState(false);

    const handleViewMoreClick = () => {
        setShowMore(!showMore); // Toggle the visibility
    };
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
                    sx={{
                        fontWeight: 550, mb: { xs: 3, sm: 4 }, letterSpacing: 0.8, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" }
                    }}
                >
                    MEMES DEVICES FOR INSTITUTE
                </Typography>



                {/* Grid Container for Side-by-Side Images */}
                <Grid container spacing={2} sx={{ mt: 3 }}>
                    {/* First Image (50% width) */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" color="primary" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                            Optical image of 2 inch double side polished Silicon wafer
                        </Typography>
                        {/* <br /> */}
                        <StyledImage
                            component={motion.img}
                            src={Picture1}
                            alt="Our Methodology"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = { Picture1 };
                            }}
                        />
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, textAlign: "center", width: '90%' }}>
                            An optical image of a 2-inch double-side polished silicon wafer shows a smooth,
                            defect-free surface, crucial for semiconductor applications.
                        </Typography>
                    </Grid>

                    {/* Second Image (50% width) */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" color="primary" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                            nitride coated wafer
                        </Typography>
                        {/* <br /> */}
                        <StyledImage
                            component={motion.img}
                            src={Picture2} // Add the URL of the second image
                            alt="TEM Image Example"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = { Picture2 }; // Fallback if image fails to load
                            }}
                        />
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, textAlign: "center", width: '90%' }}>
                            An optical image of a nitride-coated wafer shows a silicon wafer with a thin layer of nitride,
                            often used for insulation or protective purposes in semiconductor processes.
                        </Typography>
                    </Grid>

                </Grid>


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




                {/* Grid Container for Side-by-Side Images */}
                <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={12} sm={12}>

                        <Typography variant="h6" color="primary" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                            Photolithography and etching of MEMS chips for different design

                        </Typography>
                    </Grid>

                    {/* First Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        {/* <br /> */}
                        <StyledImage
                            component={motion.img}
                            src={Picture3}
                            alt="Our Methodology"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = { Picture3 };
                            }}
                        />

                    </Grid>

                    {/* Second Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        {/* <br /> */}
                        <StyledImage
                            component={motion.img}
                            src={Picture4} // Add the URL of the second image
                            alt="TEM Image Example"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = { Picture4 }; // Fallback if image fails to load
                            }}
                        />

                    </Grid>

                    <Grid item xs={12} sm={6}>

                        {/* <br /> */}
                        <StyledImage
                            component={motion.img}
                            src={Picture5}
                            alt="Our Methodology"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = { Picture5 };
                            }}
                        />

                    </Grid>

                    {/* Second Image (50% width) */}
                    <Grid item xs={12} sm={6}>

                        {/* <br /> */}
                        <StyledImage
                            component={motion.img}
                            src={Picture6} // Add the URL of the second image
                            alt="TEM Image Example"
                            sx={{ width: "100%", height: "auto" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onError={(e) => {
                                e.target.src = { Picture6 }; // Fallback if image fails to load
                            }}
                        />

                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, textAlign: "center", width: '90%' }}>
                            Photolithography and etching are key processes in MEMS chip fabrication. Photolithography uses light to transfer patterns onto the wafer,
                            while etching removes material to create micro-scale features, enabling the precise design of MEMS devices for various applications.
                        </Typography>
                    </Grid>

                </Grid>


            </Paper>

            {showMore &&
                <Paper
                    elevation={3}
                    sx={{
                        p: { xs: 3, sm: 4, md: 5 },
                        borderRadius: 4,
                        mt: 4,
                        backgroundColor: theme.palette.background?.default || "#fff"
                    }}
                >

                    {/* Grid Container for Side-by-Side Images */}
                    <Grid container spacing={2} sx={{ mt: 3 }}>
                        <Grid item xs={12} sm={12}>

                            <Typography variant="h6" color="primary" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                                Cross-section STEM-EDS


                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={12}>

                            {/* <br /> */}
                            <StyledImage
                                component={motion.img}
                                src={Picture7} // Add the URL of the second image
                                alt="TEM Image Example"
                                sx={{ width: "100%", height: "auto" }}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                onError={(e) => {
                                    e.target.src = { Picture7 }; // Fallback if image fails to load
                                }}
                            />

                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, textAlign: "center", width: '100%' }}>
                                STEM-EDS – clear distribution of elements – well defined interface
                                – robustness of the lithography and etching

                            </Typography>
                        </Grid>

                    </Grid>

                </Paper>
            }
            <Grid item xs={12} sm={12} sx={{ textAlign: "center", mt: 2 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleViewMoreClick}
                    endIcon={showMore ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                >
                    {showMore ? "View Less" : "View More"}
                </Button>
            </Grid>

        </Container>
    );
};

export default MeMsChips;
