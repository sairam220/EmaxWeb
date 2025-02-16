import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { BarChart, Lightbulb, Dashboard, Search, Layers, LayersClear, RadioButtonChecked, Psychology } from '@mui/icons-material';

const services = [
    { name: "SAPI", icon: <BarChart /> },
    { name: "Product Innovation", icon: <Lightbulb /> },
    { name: "TEM", icon: <Dashboard /> },
    { name: "SEM", icon: <Search /> },
    { name: "FIB-SEM", icon: <Layers /> },
    { name: "XRD", icon: <LayersClear /> },
    { name: "SPS", icon: <RadioButtonChecked /> },
    { name: "AI/ML", icon: <Psychology /> }
];

export default function Services() {
    const [value, setValue] = useState(0);
    const handleChange = (_, newValue) => setValue(newValue);

    return (
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
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                sx={{
                    width: { xs: "100%", sm: "auto" },
                    maxWidth: "100%",
                    overflowX: "auto",
                    bgcolor: "#ffffff",
                    borderRadius: 2,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(10px)",
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
                    />
                ))}
            </Tabs>
        </Box>
    );
}
