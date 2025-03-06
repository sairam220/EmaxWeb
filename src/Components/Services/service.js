import { useState, useEffect } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { BarChart, Lightbulb, Dashboard, Search, Layers, LayersClear, RadioButtonChecked, Psychology } from '@mui/icons-material';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ProcessImprovementPage from "./sapi";
import { motion } from 'framer-motion';
import ProductInnovationPage from "./productInnovation";
import TemServicesPage from "./tem";
import ScanningElectronMicroscopyPage from "./sem";
import FibSemPage from "./FIB";
import XRDPage from "./xdr";
import StructuralProbeStationPage from "./sps";
import AiMlPage from "./AiMl";

const services = [
    { name: "TEM", icon: <Dashboard /> }, // comes first 
    { name: "FIB-SEM", icon: <Layers /> }, // second
    { name: "SAPI", icon: <BarChart /> },
    { name: "Product Innovation", icon: <Lightbulb /> },
    { name: "SEM", icon: <Search /> }, // fourth
    { name: "XRD", icon: <LayersClear /> }, // five 
    { name: "SPS", icon: <RadioButtonChecked /> }, 
    { name: "AI/ML", icon: <Psychology /> }
];
// mems devices for institue studies  third
// alide services (SPAI, SPS, AI/ML, Product Innovation)
export default function Services() {
    const [value, setValue] = useState(0);
    const handleChange = (_, newValue) => setValue(newValue);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const savedTab = localStorage.getItem("activeTab");
        if (savedTab !== null) {
            setValue(Number(savedTab));
        }
        return () => {
            localStorage.removeItem("activeTab");
        };
    }, []);

    const pageVariants = {
        hidden: { opacity: 0, y: isMobile ? 20 : 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    };

    const renderPage = () => {
        switch (value) {
            case 0:
                return <TemServicesPage />;
            case 1:
                return <FibSemPage />;
            case 2:
                return <ProcessImprovementPage />; 
            case 3:
                return <ProductInnovationPage />;
            case 4:
                return <ScanningElectronMicroscopyPage />;
            case 5:
                return <XRDPage />;
            case 6:
                return <StructuralProbeStationPage />;
            case 7:
                return <AiMlPage />;
            default:
                return <TemServicesPage />;
        }
    };

    return (
        <motion.div variants={pageVariants} initial="hidden" animate="visible">
            <Box
                sx={{
                    minHeight: '81.5vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 12,
                    width: '100%',
                    overflowX: "hidden",
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

                    Our Services
                    <MiscellaneousServicesIcon sx={{ color: "#000000", fontSize: "2.2rem" }} />
                </Typography>




                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons={isMobile ? "auto" : false}
                    allowScrollButtonsMobile
                    sx={{
                        width: { xs: "100%", sm: "auto"},
                        maxWidth: "100%",
                        overflowX: "auto",
                        bgcolor: "#ffffff",
                        borderRadius: 2,
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        backdropFilter: "blur(10px)",
                        height: { xs: "auto", sm: "auto", md: "50px" },
                        "& .MuiTabs-flexContainer": {
                            display: "flex",
                            flexWrap: "nowrap", // Prevents tabs from wrapping
                            justifyContent: "flex-start", // Ensures first tab is visible
                            gap: 1,
                        },
                        "& .MuiTab-root": {
                            display: 'flex',
                            alignItems: 'center',
                            textTransform: "none",
                            fontWeight: "bold",
                            fontSize: { xs: "0.8rem", sm: "1rem" },
                            minWidth: "auto",
                            px: 2,
                            py: 1.5,
                            borderRadius: "50px",
                            transition: "all 0.3s ease-in-out",
                            color: "#333",
                            whiteSpace: "nowrap",
                            "&:hover": {
                                bgcolor: "rgba(255, 255, 255, 0.3)",
                            },
                            "&.Mui-selected": {
                                bgcolor: "#007FFF",
                                color: "white",
                                boxShadow: "0px 4px 10px rgba(0, 127, 255, 0.4)",
                                transform: "scale(1.05)",
                            },
                        },
                        "& .MuiTabs-indicator": {
                            display: "none",
                        },
                    }}
                >
                    {services.map((service, index) => (
                        <Tab
                            key={index}
                            label={
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    {service.icon}
                                    <Box sx={{ ml: 1 }}>{service.name}</Box>
                                </Box>
                            }
                            sx={{
                                ...(index === 0 && { ml: 1 }),
                                ...(index === services.length - 1 && { mr: 1 }),
                            }}
                        />
                    ))}
                </Tabs>
                {renderPage()}
            </Box>
        </motion.div>
    );
}
