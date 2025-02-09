// import { Route, Switch } from "react-router-dom";
import './App.css';
import TopBar from '../src/Components/Header/Header'
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home/>
    </div>
  );
}

export default App;
