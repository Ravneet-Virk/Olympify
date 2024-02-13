import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import Sports from './Component/Sports/Sports';
import SportDesc from './Component/Sports/SportDesc';
// import SingleSport from './Component/Sports/SingleSport';
import Event from './Component/Event/Event';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Event" element={<Event />} />
        {/* <Route path="/SportD" element={<SportDesc />} /> */}
        <Route path="/sport/:id" element={<SportDesc />} />
      </Routes>
    </Router>
  );
}

export default App;
