import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Footer from './components/Footer'
import List from "./components/List";


function App() {
  return (
    <div className="App">
 <Router>
        <Navbar />
        <Routes>
          <Route index element={<List />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/:name" element={<Home />}></Route>
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
