import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate} from "react-router-dom";
import TopBar from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Services from './Components/Services/service';
import { useEffect } from 'react';
import Industries from './Components/Industries/industries';
import ConatctUs from './Components/ContactUs/contactus';
import TrendsAndAdvnces from './Components/TrendsAdvances/trensAndAdvances';

const theme = createTheme();

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.substring(1);
    const capitalizedPath = path ? path.charAt(0).toUpperCase() + path.slice(1) : ''; // Capitalize the first letter
    const title = path ? `${capitalizedPath} - EMAX Scientific Solutions – We Provide Industrial Process & Product Related Solutions` : 'EMAX Scientific Solutions – We Provide Industrial Process & Product Related Solutions';
    document.title = title;
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <ScrollToTop />
        <TitleUpdater />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path='/industries' element={<Industries />} />
          <Route path='/contact' element={<ConatctUs />} />
          <Route path='/trends-advances' element={<TrendsAndAdvnces />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <ThemeProvider theme={theme}>
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
