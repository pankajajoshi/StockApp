import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Stock from './pages/Stock';
import Dashboard from './pages/Dashboard';
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Nav />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/stocks" element={<Dashboard/>}/>
      <Route path="/stocks/:symbol" element={<Stock/>}/>
    </Routes>
    </div>
  );
}

export default App;
