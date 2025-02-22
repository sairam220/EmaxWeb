import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import TopBar from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Services from './Components/Services/service';
import { useEffect } from 'react';
import Industries from './Components/Industries/industries';
import ConatctUs from './Components/ContactUs/contactus';
import AboutUs from './Components/AboutUs/aboutus';

// Create a theme for Material UI
const theme = createTheme();

// Create a custom scroll-to-top component
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on route change
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        
        {/* Add ScrollToTop component to handle scrolling */}
        <ScrollToTop />

        <Routes>
          {/* Define Routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path='/industries' element={<Industries/>}/>
          <Route path='/contact' element={<ConatctUs/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
        </Routes>

        <ThemeProvider theme={theme}>
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
