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

const ProcessImprovementPage = () => {
  const theme = useTheme();

  const doePoints = [
    {
      title: "Structured Approach for Problem Solving",
      description: "DOE is a rigorous, systematic, and statistical tool used to solve engineering and scientific problems through a structured approach for conducting trials and collecting data efficiently."
    },
    {
      title: "Establishing Key Relationships",
      description: "DOE helps in identifying fundamental relationships between variables in scientific and engineering problems, enabling valid, supportable, and data-driven engineering conclusions."
    },
    {
      title: "Process Optimization and Quality Control",
      description: "The technique is used to maximize process response, reduce variation, and drive continuous process improvement. It provides effective quality control solutions, reducing material and energy consumption."
    },
    {
      title: "Economic and Industrial Benefits",
      description: "DOE plays a crucial role in the cost economics of product development and manufacturing processes. It can be applied across various industrial processes with defined input and output variables."
    },
    {
      title: "Enhancing Process Efficiency",
      description: "The use of statistical tools in DOE ensures an optimized production cycle. It leads to improved efficiency, lower rejection rates, and reduced final product costs."
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
          Statistical Approach for Process Improvement
        </Typography>

        <Typography
          variant="body1"
          align="justify"
          color="text.secondary"
          sx={{mt: { xs: 2, sm: 2 }, mb: { xs: 3, sm: 4 }, lineHeight: 1.8 }}
        >
          EMAX SS provides a design-based approach to industries for new product development 
          and process improvement. We also offer statistical quality control measures such as 
          Statistical Process Control (SPC) and Failure Mode and Effects Analysis (FMEA) to 
          enhance process efficiency and reliability.
        </Typography>

        {/* Animated Image */}
        <StyledImage
          component={motion.img}
          src="https://emaxss.org/wp-content/uploads/2024/07/process1.png"
          alt="Process Improvement"
          sx={{ mb: { xs: 3, sm: 4 }, maxWidth: "100%", height: "auto" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onError={(e) => {
            e.target.src = "https://emaxss.org/wp-content/uploads/2024/07/process1.png";
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
    </Container>
  );
};

export default ProcessImprovementPage;
