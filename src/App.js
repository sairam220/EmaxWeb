import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CircularProgress, Box } from "@mui/material";
import TopBar from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const Home = lazy(() => import('./Components/Home/Home'));
const Services = lazy(() => import('./Components/Services/service'));
const Industries = lazy(() => import('./Components/Industries/industries'));
const ContactUs = lazy(() => import('./Components/ContactUs/contactus'));
const AboutUs = lazy(() => import('./Components/AboutUs/aboutus'));
const TrendsAndAdvances = lazy(() => import('./Components/TrendsAdvances/trensAndAdvances'));
const SpecializedProducts = lazy(() => import('./Components/SpecilizedProducts/SpecilizedProducs'));

const theme = createTheme();

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location]);
  return null;
};

const TitleUpdater = () => {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname.substring(1).replace('-', ' ');
    const capitalizedPath = path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Home';
    document.title = `${capitalizedPath} - EMAX Scientific Solutions – We Provide Industrial Process & Product Related Solutions`;
  }, [location]);
  return null;
};

const Loader = () => (
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <CircularProgress />
  </Box>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <TopBar />
          <ScrollToTop />
          <TitleUpdater />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/trends-advances" element={<TrendsAndAdvances />} />
              <Route path="/specializedProducts" element={<SpecializedProducts />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
