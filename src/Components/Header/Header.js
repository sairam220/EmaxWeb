import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover'
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import BuildIcon from '@mui/icons-material/Build';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';
import DomainIcon from '@mui/icons-material/Domain';

const pages = ['Trends & Advances', 'Contact', 'About Us'];

const services = [
  'Stat Analysis', 'Product Innovation', 'TEM', 'SEM',
  'FIB-SEM', 'XRD', 'Probe Station', 'AI/ML'
];

const industries = [
  'Semiconductors', 'Metals', 'Ceramics', 'Food & Pharma', 'Aerospace'
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const [anchorElIndustries, setAnchorElIndustries] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenServicesMenu = (event) => setAnchorElServices(event.currentTarget);
  const handleCloseServicesMenu = () => setAnchorElServices(null);

  const handleOpenIndustriesMenu = (event) => setAnchorElIndustries(event.currentTarget);
  const handleCloseIndustriesMenu = () => setAnchorElIndustries(null);



  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black'}}>
      <Container maxWidth={false} sx={{ padding: 0, margin: 0, width: '100%' }}>
        <Toolbar disableGutters>

          {/*Desktop Logo */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, alignItems: 'center' }}>
            <img
              src="https://emax42.wordpress.com/wp-content/uploads/2024/05/emax-white-multicolor-3.png?w=1024"
              alt="Logo"
              style={{ height: '40px', objectFit: 'contain' }}
            />
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="menu" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
              
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <HomeIcon sx={{color: '#616161', marginRight: 1 }} />
                HOME
              </MenuItem>
              <MenuItem onClick={handleOpenServicesMenu}>
                <BuildIcon sx={{color: '#616161', marginRight: 1 }} />
                Services {anchorElServices ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </MenuItem>
              <Popover
                open={Boolean(anchorElServices)}
                anchorEl={anchorElServices}
                sx={{ display: { xs: 'flex', md: 'none' } }}
                onClose={handleCloseServicesMenu}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                disableRestoreFocus
              >
                <Box sx={{
                  padding: '10px 20px',
                  backgroundColor: '#1976d2',  // Blue background color for the header
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  textAlign: 'center',
                  marginBottom: '10px',
                }}>
                  Services
                </Box>
                {services.map((option, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      handleCloseNavMenu();
                      handleCloseServicesMenu();
                    }}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Popover>

              <MenuItem onClick={handleOpenIndustriesMenu}>
                <DomainIcon sx={{color: '#616161', marginRight: 1 }} />
                Industries {anchorElIndustries ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </MenuItem>
              <Popover
                sx={{ display: { xs: 'flex', md: 'none' } }}
                open={Boolean(anchorElIndustries)}
                anchorEl={anchorElIndustries}
                onClose={handleCloseIndustriesMenu}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                disableRestoreFocus
              >
                <Box sx={{
                  padding: '10px 20px',
                  backgroundColor: '#1976d2',  // Blue background color for the header
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  textAlign: 'center',
                  marginBottom: '10px',
                }}>
                  Industries
                </Box>
                {industries.map((option, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      handleCloseNavMenu();
                      handleCloseIndustriesMenu();
                    }}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Popover>

              <MenuItem onClick={handleCloseNavMenu}>
                <TrendingUpIcon sx={{ color: '#616161',marginRight: 1 }} />
                Trends & Advances
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <ContactMailIcon sx={{color: '#616161', marginRight: 1 }} />
                Contact
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <InfoIcon sx={{color: '#616161', marginRight: 1 }} />
                About Us
              </MenuItem>
            </Menu>
          </Box>

          {/*Mobile Logo */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <img
              src="https://emax42.wordpress.com/wp-content/uploads/2024/05/emax-white-multicolor-3.png?w=1024"
              alt="Logo"
              style={{ height: '30px', objectFit: 'contain' }} // Adjust the height for mobile
            />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center' }}>

            <MenuItem>
              HOME
            </MenuItem>

            <Button
              onClick={handleOpenServicesMenu}
              sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'center' }}
            >
              Services {anchorElServices ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </Button>

            <Menu
              anchorEl={anchorElServices}
              open={Boolean(anchorElServices)}
              onClose={handleCloseServicesMenu}
              sx={{ mt: 1, display: { xs: 'none', md: 'flex' } }}

            >
              {services.map((service) => (
                <MenuItem key={service} onClick={handleCloseServicesMenu}>
                  {service}
                </MenuItem>
              ))}
            </Menu>

            <Button
              onClick={handleOpenIndustriesMenu}
              sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'center' }}
            >
              Industries {anchorElIndustries ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </Button>

            <Menu
              anchorEl={anchorElIndustries}
              open={Boolean(anchorElIndustries)}
              onClose={handleCloseIndustriesMenu}
              sx={{ mt: 1, display: { xs: 'none', md: 'flex' } }}
            >
              {industries.map((industry) => (
                <MenuItem key={industry} onClick={handleCloseIndustriesMenu}>
                  {industry}
                </MenuItem>
              ))}
            </Menu>

            {pages.map((page) => (
              <Button key={page} sx={{ my: 2, color: 'white' }}>
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
