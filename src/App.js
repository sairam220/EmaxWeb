// import { Route, Switch } from "react-router-dom";
import './App.css';
import TopBar from '../src/Components/Header/Header'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
