import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Services from './Components/Services/service';

// Create a theme for Material UI
const theme = createTheme();

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Routes>
          {/* Define Routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />

        </Routes>
        <ThemeProvider theme={theme}>
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
