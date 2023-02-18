import React from 'react';
import Navbar from './/components/Navbar/index';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import HeroSlider from './/components/Hero-slider/hero-slider';
import Welcome from './/components/Welcome-to-hordes/index';

function App(){

        return(
            <Router>
                <Navbar />
                <Routes>
                <Route exact path="/" element={<HeroSlider/>} />
                </Routes>
                <Routes>
                <Route path="/" element={<Welcome/>} />
                </Routes>
            </Router>
        )
    
}

export default App;