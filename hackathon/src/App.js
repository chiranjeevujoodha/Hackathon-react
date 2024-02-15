import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import Home from './Home';
import Campaigns from './Campaigns';
import Contact from './Contact';
import Footer from './Footer';
import './Home.css'
import './Footer.css'
import './Contact.css'
import './Signin.css'
import './Copyright.css'
import Signin from './Signin';
import Signup from './Signup';
import Copyright from './Copyright';


function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/campaigns' element={<Campaigns />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
      <Copyright />
    </Router>
  );
}

export default App;
