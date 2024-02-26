import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CustomNavbar from './Components/CustomNavbar';
import Campaigns from './Pages/Campaigns/Campaigns';
import './Pages/Home/Home.css'
import './Components/Footer.css'
import './Pages/Contact/Contact.css'
import './Pages/Registration/Signin.css'
import './Components/Copyright.css'
import './Pages/Campaigns/Campaigns.css'
import Signin from './Pages/Registration/Signin';
import Signup from './Pages/Registration/Signup';
import Copyright from './Components/Copyright';
import ContactPage from './Pages/Contact/ContactPage';



function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<Campaigns />} />
          {/* <Route path='/campaigns' element={<CampaignsPage />} /> */}
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
      <Copyright />
    </Router>
  );
}

export default App;
