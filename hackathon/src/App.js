import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import Home from './Home';
import Campaigns from './Campaigns';
import Contact from './Contact';
import Footer from './Footer';
import './Home.css'
import './Footer.css'


function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/campaigns' element={<Campaigns />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
