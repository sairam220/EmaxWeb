import React from "react";
import {
     Container, Typography, Paper, useTheme
} from "@mui/material";



const DefencePage = () => {
    const theme = useTheme();



    return (
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 4, sm: 6 } }}>
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
                    Defence & Aerospace
                </Typography>

                <Typography
                    variant="h4"
                    align="center"
                    color="text.secondary"
                    sx={{ mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
                >
                    Services will be updated soon!
                </Typography>
                

            </Paper>

            
        </Container>
    );
};

export default DefencePage;