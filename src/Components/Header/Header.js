import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Button,
  Typography,
  Tooltip
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import logo from '../../asserts/Header/emax-white-multicolor-3.webp';
import CloseIcon from "@mui/icons-material/Close";
import MemoryIcon from '@mui/icons-material/Memory';


const pages = [
  { name: "HOME", icon: <HomeOutlinedIcon />, path: "/", tooltip: 'Home' },
  { name: "SpecX", icon: <MemoryIcon />, path: "/specializedProducts", tooltip: 'Specialized Products' },
  { name: "Services", icon: <BuildOutlinedIcon />, path: "/services", tooltip: 'Services' },
  { name: "Industries", icon: <DomainOutlinedIcon />, path: "/industries", tooltip: 'Industries' },
  { name: "Trends", icon: <TrendingUpOutlinedIcon />, path: "/trends-advances", tooltip: 'Trends & Advances' },
  { name: "Contact", icon: <ContactMailOutlinedIcon />, path: "/contact", tooltip: 'Contact' },
  { name: "About Us", icon: <InfoOutlinedIcon />, path: "/about-us", tooltip: 'About Us' },
];

function ResponsiveAppBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleMenuClick = (path) => {
    navigate(path);
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(135deg, #0F2027, #203A43, #2C5364)",
        backdropFilter: "blur(15px)",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Container maxWidth={false} sx={{ padding: 0, margin: 0, width: "100%" }}>
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

          {/* LOGO */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Link to="/">
              <img
                src={logo}
                loading="lazy"
                alt="Logo"
                style={{ height: "42px", objectFit: "contain", marginLeft: "20px" }}
              />
            </Link>
          </Box>


          {/* MOBILE MENU */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" aria-label="menu" onClick={handleOpenNavMenu} color="inherit">
              {anchorElNav ? (
                <CloseIcon sx={{ color: "#FFF" }} />
              ) : (
                <MenuIcon sx={{ color: "#FFF" }} />
              )}
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => handleMenuClick(page.path)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: location.pathname === page.path ? "#2196f3" : "#333",
                    fontWeight: location.pathname === page.path ? "bold" : "normal",
                    fontSize: "16px",
                    "&:hover": { backgroundColor: "#EDE7F6" },
                  }}
                >
                  {React.cloneElement(page.icon, {
                    sx: { marginRight: 1, color: location.pathname === page.path ? "#2196f3" : "#616161" },
                  })}
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* DESKTOP NAVIGATION */}
          <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "flex-end", alignItems: "center" }}>
            {pages.map((page) => (
              <Tooltip key={page.name} title={page.tooltip} placement="bottom">
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  sx={{
                    mx: 1.5,
                    px: 1,
                    py: 1,
                    borderRadius: "25px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: "12px",
                    fontFamily: "'Playfair Display', serif",
                    color: location.pathname === page.path ? "#000" : "#EDE7F6",
                    backgroundColor: location.pathname === page.path ? "#e8eaf6" : "transparent",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      backgroundColor: "#e8eaf6",
                      color: "#000",
                      transform: "scale(1.05)",
                    },
                    // minWidth:'auto',
                    // height:'auto'
                  }}
                >
                  {React.cloneElement(page.icon, {
                    sx: { marginRight: 1, fontSize: "22px" },
                  })}
                  <Typography variant="body1" sx={{ fontWeight: "500", fontFamily: "'Playfair Display', serif", }}>
                    {page.name}
                  </Typography>
                </Button>
              </Tooltip>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
