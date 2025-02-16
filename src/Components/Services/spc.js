import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";

const StatisticalApproach = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
        Statistical Approach for Process Improvement
      </Typography>
      
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        EMAX SS provides a design-based approach to industries for new product development and process improvement.
        We also provide additional statistical quality control measures such as Statistical Process Control (SPC) and
        Failure Mode Effective Analysis (FMEA).
      </Typography>
      
      <Box display="flex" justifyContent="center" my={4}>
        <img
          src="https://emaxss.org/wp-content/uploads/2024/07/process1.png?w=2500&h="
          alt="Process Improvement"
          style={{ width: "100%", maxWidth: "900px", borderRadius: "10px" }}
        />
      </Box>
      
      <Grid container spacing={3}>
        {points.map((point, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%", boxShadow: 3, borderRadius: "12px" }}>
              <CardContent>
                <Typography variant="body1" color="textPrimary">
                  {point}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const points = [
  "Design of experiments is a rigorous, systematic, and efficient statistical tool that solves engineering and scientific problems.",
  "This approach establishes key fundamental relationships between variables, providing valid engineering conclusions.",
  "It maximizes process response, reduces variation, and improves processes.",
  "It provides effective quality control solutions, reducing material and energy consumption.",
  "This tool applies to any industrial process with defined input and output variables.",
  "Statistical tools ensure an optimum production cycle with improved efficiency.",
  "Techniques reduce rejection rates and lower the cost of the final device."
];

export default StatisticalApproach;
